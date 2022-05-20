import {configureStore} from "@reduxjs/toolkit";
import { RootReducer } from "../reducers/RootReducer";

// @ts-ignore
export const  Store =  configureStore(RootReducer);