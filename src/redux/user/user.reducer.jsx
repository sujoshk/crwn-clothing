
import { UserActionTypes} from './user.types';


const INITIAL_STATE = {
    currentUser: null
}


const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        // Every single reducer will get every single action even if it is not related to that particular reducer. If none of the actions match, the switch case statement will return the current state. In case the property does match, a new object with all the original properties as well as the new payload would be made.
        // Note that we are making a new object and not updating the previous one because redux only re renders when a new object is made.
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;



// We need the relevant component to get the user state from this file and not app.js. We need the header component to be able to get the state in this case. This would be possible using the connect function in header component.
