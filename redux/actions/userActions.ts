import {SET_USER_LOCATION, SET_USER_INPUT, SET_USER_OBJECT} from '../actionTypes' 
import { UserLocation } from '../../types/reduxActions/userActionTypes'
import { User } from '../../types/reduxActions/user'


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

// create and store a user object
export const setUserObject = ({email, phoneNumber, uid}: User) => ({
    type: SET_USER_OBJECT,
    user: {
        email,
        phoneNumber,
        uid
    }
})