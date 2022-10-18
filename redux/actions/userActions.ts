import {SET_USER_LOCATION} from '../actionTypes' 
import { UserLocation } from '../../types/actionTypes/userActionTypes'

export const setUserLocation = ({latitude, longitude, city}: UserLocation) => ({
    type: SET_USER_LOCATION,
    // object containing the latitude, longitude, and city of the user
    userLocation: {
        latitude,
        longitude,
        city
    }
})