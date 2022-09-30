import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import cacheData from 'memory-cache'
import { UserInput } from '../../types/getProductRequest'

// this function will handle processing the user request and changing the query into string before routing it to the appropriate API that will handle communicating with externals
export const userInputHandler = async (url: string, data: UserInput) => {
        // destructure query and add words as params into request
        const {query}  = data
        if (Array.isArray(query)) {
            data.query = query.join('+')
        } 
        // call the getProductByName function
        return await axios.post('http://localhost:3000/api/getProducts', data)
}


// this function will take care of calling the walmart api, retrieving a list of products that correspond to the item passed in 
// this is all third party and doesnt need to be tested
export default async function getProductByName (req: any, res: any): Promise<any> {
    // handle the data passed in from front-end and call the walmart api with it
    if (req.method === 'POST') {
        const {query: searchTerm} = req.body
        const url = `https://api.bluecartapi.com/request?api_key=${process.env.API_KEY}&type=search&search_term=${searchTerm}&sort_by=best_seller`
        const value = cacheData.get(url);
        if (value) {
            console.log('cached!')
            const {data} = value
            const {search_results} = data
            console.log(search_results)
            return search_results;
        } else {
            const hours = 72;
            console.log('running cache miss')
            const res = await axios.get(url);
            const {data} = res
            const {search_results} = data
            console.log(search_results)
            cacheData.put(url, res, hours * 1000 * 60 * 60);
            return search_results;
        }
    }
    return res.status(405).end()
}