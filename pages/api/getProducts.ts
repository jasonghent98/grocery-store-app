import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import cacheData from 'memory-cache'


// this function will take care of calling the walmart api, retrieving a list of products that correspond to the item passed in 
export default async function getProductByName (req: any, res: any): Promise<any> {
    // handle the data passed in from front-end and call the walmart api with it
    if (req.method === 'POST') {
        // destructure query and add words as params into request
        const {query}  = req.body
        const searchTerm = query.join('+')
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