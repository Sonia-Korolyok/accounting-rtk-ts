import {configureStore} from "@reduxjs/toolkit";
import token from "../features/token/tokenSlice"
import user from "../features/user/userSlice";

export const store = configureStore({
    reducer: {
     token, user
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;