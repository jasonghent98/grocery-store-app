import { SET_USER_LOCATION, SET_USER_INPUT } from "../actionTypes";

const userManagementState = (state: any = {}, action: any = {}) => {
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
        default:
            return {...state}
    }
}

export default userManagementState