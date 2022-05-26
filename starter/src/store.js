import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './features/card/cardSlice'
import modelReducer from './features/model/modelSlice'

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        model: modelReducer
    },
})