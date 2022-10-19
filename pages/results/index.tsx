import {useSelector} from 'react-redux'
import Navbar from '../../components/Navbar'
import Result from '../../components/Result'
import SearchBar from '../../components/SearchBar'
import SearchProductsButton from '../../components/buttons/SearchProductsButton'
import axios from 'axios'
import cacheData from 'memory-cache'
import { ListItem } from '@mui/material'
import { RootState } from '../../redux/store'

// data from the user query should be accessible to this component 
// will need to loop over the results generated and populate the properties within the Result component
const Results = ({data}: any) => {
    const userQuery = useSelector((state: RootState) => state.userManagementState.userQuery)
    console.log(userQuery)
  return (
    <div className='flex flex-col items-center h-screen bg-gray-300'>
        <div className='h-1/6'>
            <div className='h-3/5'>
                <Navbar/>
            </div>
        </div>

        <div className='flex gap-x-10 h-1/6 w-3/5'>
            <SearchBar styles={'rounded-lg w-full h-full text-black bg-gray-200 relative placeholder:italic pl-3 placeholder:sm:text-xl placeholder:md:text-2xl placeholder:lg:text-3xl placeholder:xl:text-4xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'}/>
            <SearchProductsButton />
        </div>

        <div className='h-1/12 relative bottom-14 w-full flex justify-center xl:justify-start xl:ml-36'>
            <h2 className='h-1/6 text-xl text-black sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Results for <span className='italic'>{userQuery}</span></h2>
        </div>


        <div className='h-4/6 w-4/5 bg-blue-300 flex flex-col gap-y-3 gap-x-3'>
            {/* will contain the list of products returned to the user */}
            {/* <div className='h-full w-full flex flex-row justify-around flex-wrap gap-x-3 gap-y-3'> */}
                {/* map over all results returned here */}
                {/* <div className='relative h-1/2 w-1/2'> */}

                {data.local_results.map((result: any) => (
                    <Result 
                    photo={result.thumbnail}
                    itemName={result.title} 
                    price='$1.99 per pound' 
                    location={result.url} 
                    key={result.position}/>
                    ))}

                {/* </div> */}
            {/* </div> */}
        </div>
    </div>
  )
}

/**
 * 
 * @returns a list of results based on the user query
 * the results will be returned and rendered within the component
 * 
 * these results can be stored in a public cache bc there is no authorization component to the req
 */
export async function getServerSideProps(context:any) {
    const {query, req, res} = context
    let {queryString, userCity, userState, userCountry} = query;

    // handle multi-word locations
    userCity = userCity.split(' ')
    userCity = userCity.join('+')
    userState = userState.split(' ')
    userState = userState.join('+')
    userCountry = userCountry.split(' ')
    userCountry = userCountry.join('+')


    // mock api call test
    res.setHeader(
        'Cache-Control',
        'test123'
    )

    // add the user city as a query param to the api call
    let response: any;
    if (cacheData.get(queryString)) {
        console.log('cache hit!')
        response = cacheData.get(queryString)
    } else {
        //  response = await axios.get('https://app.scrapingbee.com/api/v1/store/google', { params: {
        // 'api_key': process.env.NEXT_PUBLIC_GOOGLE_SCRAPER_KEY,
        // 'search': q,
        // 'near': userLocation
        // }});
        response = await axios.get(`https://serpapi.com/search.json?q=${queryString}&location=${userCity},+${userState},+${userCountry}&tbm=lcl`, { params: {
            'api_key': process.env.NEXT_PUBLIC_SERPAPI_KEY
            }
        })
        cacheData.put(queryString, response, (86400 * 1000))
        console.log('cache miss')
    }
    console.log(response)

    return {
        props: {
            data: response.data
        }
    }
}

export default Results