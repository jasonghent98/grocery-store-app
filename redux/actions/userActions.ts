import {SET_USER_LOCATION} from '../actionTypes' 

export const setUserLocation = ({latitude, longitude, city}: {latitude: string, longitude: string, city: string}) => ({
    type: SET_USER_LOCATION,
    // object containing the latitude, longitude, and city of the user
    userLocation: {
        latitude,
        longitude,
        city
    }
})