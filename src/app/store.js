
import { configureStore } from '@reduxjs/toolkit'
import { api } from './services/api.js'
import { combineReducers } from 'redux'
import { setupListeners } from '@reduxjs/toolkit/query'

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
})


export const store = configureStore({
  reducer: reducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)
