import { GET_USER_SUCCESS } from "./actions";

const initState = { user: [] };

const myReducer = (state = initState, action: any) => {
    switch(action.type) {
        case GET_USER_SUCCESS: 
         return {...state, user: action.user}
        default:
            return state;
    }
}

export default myReducer;