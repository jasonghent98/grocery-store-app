import { SET_USER_LOCATION, SET_USER_INPUT, SET_USER_OBJECT } from "../actionTypes";
import { User } from "../../types/reduxActions/user";

const INITIAL_STATE = {
    userLocation: {},
    userQuery: null,
    appIsLoaded: false,
    user: {
        email: null,
        phoneNumber: null,
        uid: null
    }
}

const userManagementState = (state: any = INITIAL_STATE, action: any = {}) => {
    switch(action.type) {
        case SET_USER_LOCATION:
            return {
                ...state,
                userLocation: action.userLocation
            }
        case SET_USER_INPUT:
            return {
                ...state,
                userQuery: action.query
            }
        case 'SET_APP_AS_LOADED':
            return {
                ...state,
                appIsLoaded: true
            }
        case SET_USER_OBJECT:
            return {
                ...state,
                user: {
                    email: action.user.email,
                    phoneNumber: action.user.phoneNumber,
                    uid: action.user.uid
                }
            }
        default:
            return {...state}
    }
}

export default userManagementState