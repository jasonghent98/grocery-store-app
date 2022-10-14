import { SET_USER_LOCATION } from "../actionTypes";

const userManagementState = (state: any = {}, action: any = {}) => {
    switch(action.type) {
        case SET_USER_LOCATION:
            return {
                ...state,
                userLocation: action.userLocation
            }
        default:
            return {...state}
    }
}

export default userManagementState