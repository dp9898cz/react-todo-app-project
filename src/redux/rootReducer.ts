import { combineReducers } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'

export const rootReducer = combineReducers({
    //your TODO should go here
    todos: todoSlice,
})

export type RootState = ReturnType<typeof rootReducer>
