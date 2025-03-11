import { configureStore } from "@reduxjs/toolkit";
import { articalApi } from "./Artical";

export const store=configureStore({
    reducer:{
        [articalApi.reducerPath]: articalApi.reducer
    },
    middleware:(getDefualtMiddleware)=>
        getDefualtMiddleware().concat(articalApi.middleware)

})