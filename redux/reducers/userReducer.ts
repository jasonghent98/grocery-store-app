import { SET_USER_LOCATION, SET_USER_INPUT } from "../actionTypes";

const INITIAL_STATE = {
    userLocation: {},
    userQuery: null,
    appIsLoaded: false

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
        default:
            return {...state}
    }
}

export default userManagementState