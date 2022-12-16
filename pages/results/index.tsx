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
    console.log(data)
    const userQuery = useSelector((state: RootState) => state.userManagementState.userQuery)
  return (
    <div className='flex flex-col items-center h-screen relative bg-gray-300'>
        <div className='h-1/6'>
            <div className='h-3/5'>
                <Navbar/>
            </div>
        </div>
        <div className='flex flex-col gap-y-4 sm:flex-row md:flex-row lg:flex-row xl:flex-row gap-x-10 h-1/6 w-3/5'>
            <SearchBar styles={'rounded-lg w-full h-full text-black bg-gray-200 relative placeholder:italic pl-3 py-2 placeholder:sm:text-lg placeholder:md:text-xl placeholder:lg:text-2xl placeholder:xl:text-3xl sm:text-md md:text-lg lg:text-xl xl:text-2xl'}/>
            <SearchProductsButton />
        </div>

        <div className='h-1/12 relative w-full flex justify-center xl:justify-start xl:ml-36'>
            {userQuery && <h2 className='h-1/6 text-xl text-black sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Results for <span className='italic'>{userQuery}</span></h2>}
        </div>

        <div className='h-4/6 overflow-auto w-4/5 flex my-4'>
            <div className='h-full w-full flex flex-col md:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-y-5 gap-x-3'>
                {/* map over all results returned here */}
                {data.local_results.map((result: any) => (
                <Result 
                    photo={result.thumbnail}
                    itemName={result.title} 
                    address={result.address}  
                    key={result.position}
                    resultId={result.position}
                    phone={result.phone}
                    hours={result.hours}
                    coordinates={result.gps_coordinates}
                    description={result.description}
                />
                ))}

            </div>
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
    let response: any;

    // handle pagination request
    if (query.paginationPath) {
        const {paginationPath} = query;
        // if the current page has already been requested and cached.. return it
        if (!cacheData.get(`${response?.data?.search_parameters.q} - ${response?.data?.serpapi_pagination?.current}`)) {
            response = await axios.get(paginationPath, {
                params: {
                'api_key': process.env.NEXT_PUBLIC_SERPAPI_KEY
                } 
            })

            // cache the response from this pagination request
            cacheData.put(`${response.data.search_parameters.q} - ${response.data.serpapi_pagination.current}`, response, (86400 * 1000))
            console.log(cacheData.get(`${response.data.search_parameters.q} - ${response.data.serpapi_pagination.current}`))
            console.log('cache miss for pagination req')

        } else {
            console.log('cache hit for pagination req!')
            response = cacheData.get(`${response.data.search_parameters.q} - ${response.data.serpapi_pagination.current}`)
        }

        return {
            props: {
                data: response.data 
            }
        } 

    }

    /** !!!handle first request!!!  */

    let {queryString, userCity, userState, userCountry} = query;

    // handle multi-word locations
    userCity = userCity.split(' ')
    userCity = userCity.join('+')
    userState = userState.split(' ')
    userState = userState.join('+')
    userCountry = userCountry.split(' ')
    userCountry = userCountry.join('+')


    if (cacheData.get(queryString)) {
        console.log('first query cache hit!')
        response = cacheData.get(queryString)
    } else {
        response = await axios.get(`https://serpapi.com/search.json?q=${queryString}`, { params: {
            'api_key': process.env.NEXT_PUBLIC_SERPAPI_KEY
            }
        })
        cacheData.put(queryString, response, (86400 * 1000))
        console.log('first query cache miss')
    }


    return {
        props: {
            data: response.data
        }
    }      
} 

export default Results