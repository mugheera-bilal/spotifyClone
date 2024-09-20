import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name : 'Auth',
    initialState : {
        loggedIn : false,
        token : null
    },
    reducers : {
        loggedIn : (state, action ) => {
            state.loggedIn = true
            state.token = action.payload
        } ,
        loggedOut : (state , action ) => {

            state.loggedIn = false,
            state.token = null

        }

    }
})

export const { loggedIn, loggedOut } = AuthSlice.actions

export default AuthSlice.reducer