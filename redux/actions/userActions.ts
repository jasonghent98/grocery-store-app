import {SET_USER_LOCATION, SET_USER_INPUT} from '../actionTypes' 
import { UserLocation } from '../../types/reduxActions.ts/userActionTypes'

export const setUserLocation = ({latitude, longitude, city, state, country}: UserLocation) => ({
    type: SET_USER_LOCATION,
    // object containing the latitude, longitude, and city of the user
    userLocation: {
        latitude,
        longitude,
        city,
        state,
        country
    }
})

export const setUserInput = (query: string) => ({
    type: SET_USER_INPUT,
    query
})