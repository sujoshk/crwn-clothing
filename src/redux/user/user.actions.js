// The purpose of this file is to create the action that will ultimately trigger off the correct case in the switch case statement inside the user reducer


import {UserActionTypes} from './user.types'


export const setCurrentUser = user => ({
    // This has to be the exact same string that is used in the switch case statement in the user reducer
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})
