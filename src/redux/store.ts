import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice"
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER } from "redux-persist";

const persistOptions = {
    key:"cart",
    storage
}

const persistedCart = persistReducer(persistOptions,cartReducer);

export const makeStore = () => {
    return configureStore({
        reducer:{
            cart:persistedCart
        },
        middleware:(getDefaultMiddleware)=> getDefaultMiddleware({
            serializableCheck:{
                ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
            }
        })
    })
}

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];