import axios from "axios";
import cacheData from 'memory-cache'

// accepts a list of strings to pull icons from in an array

export default async function getImages(domain: string) {
    // cache the results for the domain requested to prevent a per-user call for static assets
    let response
    const endpoint = `https://api.brandfetch.io/v2/brands/${domain}`
    response = cacheData.get(endpoint)
    if (response) {
        console.log(`${endpoint} was cached!`)
        return response
    } else {
        response = await axios.get(endpoint, {
            headers: {
                Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_BEARER_TOKEN
            }
        })
        const {data} = response
        const {logos} = data
        cacheData.put(endpoint, logos)
        return logos
    }
}


