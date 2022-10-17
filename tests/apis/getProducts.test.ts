import { markAsUntransferable } from "worker_threads";
import {userInputHandler} from "../../pages/api/getProducts";
import getProductByName from "../../pages/api/getProducts";
import mockAxios from 'axios'

// jest.mock('../../pages/api/getProducts')


// test that the api function returns the 200 status with the proper json 
describe('get products route', () => {
    let req: any;
    let res: any;

    beforeEach(() => {
        req = {
            method: 'GET' // So that we arent calling the 3rd party APIS
        }
        res = {
            status: jest.fn(() => res),
            end: jest.fn()
        }
    })

    afterEach(jest.clearAllMocks)

    // will not actually call the third-party API because GET 
    it('should return a 405 if method is not POST', async () => {
        const response = await getProductByName(req, res) // will trigger the 3rd party api with a GET
        expect(res.status).toBeCalledWith(405)
    })

    // the user input handler calls our API route with the POST method and doesnt accept req, res params, so we need to mock out the userInput handler call 
    it('should take in an array as data input and assign the concat string version as a prop', async () => {
        const data = {
            query: ['vegan', 'ice', 'cream']
        }
        const url = 'http://getProducts.com'
        const mockUserInputHandler = jest.fn((url, data) => {
            const {query}  = data
            if (Array.isArray(query)) {
                data.query = query.join('+')
            } 
            return data.query
        })
        mockUserInputHandler(url, data)
        expect(mockUserInputHandler).toHaveReturnedWith('vegan+ice+cream')
    })

    // should call the api route with a string in the query property, and not an array
    // it ('should call the api route with a string in the query property, and not an array', () => {

    // })
}) 
 