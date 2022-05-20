import { combineReducers } from  "@reduxjs/toolkit";
import { SigninReducer } from "./SigninReducer";
import { registerReducer } from "./registerReducer";



export  const RootReducer = combineReducers({
    SigninReducer,
    registerReducer
})