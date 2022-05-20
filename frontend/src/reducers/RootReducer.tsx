import { combineReducers } from  "@reduxjs/toolkit";
import { SigninReducer } from "./SigninReducer";
import { registerReducer } from "./registerReducer";
import { postComment } from "../actions/post";



export  const RootReducer = combineReducers({
    SigninReducer,
    registerReducer,
    postComment
})