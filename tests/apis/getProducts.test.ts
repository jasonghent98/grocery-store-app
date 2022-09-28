import { markAsUntransferable } from "worker_threads";
import getProductByName from "../../pages/api/getProducts";
import mockAxios from 'axios'

jest.mock('axios')
mockAxios.get.mockImplementation(() => Promise.resolve({data: { search_results: 'Ben and Jerrys'}}))


// test that the api function returns the 200 status with the proper json 
describe('get products route', () => {
    let req: any;
    let res: any;

    beforeEach(() => {
        req = {}
        res = {
            status: jest.fn(() => res),
            end: jest.fn()
        }
    })

    afterEach(jest.clearAllMocks)

    it('should return a 405 if method is not POST', async () => {
        req.method = 'GET'
        const response = await getProductByName(req, res)
        expect(res.status).toBeCalledWith(405)
    })

    it('should return a list of object items in the form of an array', async () => {
        req.body = {
            query: 'vegan ice cream'
        }

        const mockGetProduct = jest.fn()
        const response = await getProductByName(req, res)
    })
}) 
 