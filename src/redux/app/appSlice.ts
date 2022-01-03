
import {LoginStates} from '../../shared/types/AppStates';
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        loginState: LoginStates.LOGGED_IN
    },
    reducers: {
        login(state) {
            state.loginState = LoginStates.LOGGED_IN;
        },

        logout(state) {
            state.loginState = LoginStates.LOGGED_OUT;
        }
    }
})

export const {login, logout} = appSlice.actions;

export default appSlice.reducer;