import useDeepEffect from '../../utility/useDeepEffect'
import {useSelector, useDispatch} from 'react-redux'
import type { RootState } from '../../redux/store'
import { setUserLocation } from '../../redux/actions/userActions'
import axios from 'axios'
import { dividerClasses } from '@mui/material'
import { setAppAsLoaded } from '../../redux/actions/appActions'

const GetGeolocation = ({children}: any) => {
    const dispatch = useDispatch();
    const {userLocation, appIsLoaded} = useSelector((state: RootState) => state.userManagementState)
  
    // grab the user location when user routes to the home page and store as globally available state
    // only run useEffect when the city has changed within the memo object
    useDeepEffect(() => {
          const getUserCoordinates = () => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
            } else { 
              throw new Error("Geolocation is not supported by this browser.");
            }
          }      
          
          const showPosition = async (position: any) => {
            const {coords} = position;
            const {latitude, longitude} = coords;
            // run the coorindates into function that  returns user city
            const reverseGeoResponse = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${process.env.NEXT_PUBLIC_REVERSE_GEOCODE_KEY}`)
            dispatch(setUserLocation({
              latitude,
              longitude,
              city: reverseGeoResponse.data.features[0].properties.city,
              state: reverseGeoResponse.data.features[0].properties.state,
              country: reverseGeoResponse.data.features[0].properties.country
            }))
          }  
          getUserCoordinates() 
          console.log('running geolocation useEffect')
          dispatch(setAppAsLoaded())
  
    }, [userLocation])

  return (
    <div>{children}</div>
    )
}

export default GetGeolocation