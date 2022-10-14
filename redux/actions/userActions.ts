import {SET_USER_LOCATION} from '../actionTypes' 

export const setUserLocation = (userLocation: any) => ({
    type: SET_USER_LOCATION,
    // object containing the latitude, longitude, and city of the user
    userLocation
})