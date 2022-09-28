import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import cacheData from 'memory-cache'


// this function will take care of calling the walmart api, retrieving a list of products that correspond to the item passed in 
export default async function getProductByName (req: any, res: any): Promise<any> {
    // handle the data passed in from front-end and call the walmart api with it
    if (req.method === 'POST') {
        const url = `https://api.bluecartapi.com/request?api_key=${process.env.API_KEY}&type=search&search_term=highlighter+pens&sort_by=best_seller`
        const {item}  = req.body
        const value = cacheData.get(url);
        if (value) {
            console.log('cached!', value)
            return value;
        } else {
            const hours = 24;
            const res = await axios.get(url);
            const {data} = res
            cacheData.put(url, res, hours * 1000 * 60 * 60);
            // return data;
        }
    }
}