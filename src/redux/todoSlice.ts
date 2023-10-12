import { Todo } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: Todo[] = [
    {
        name: 'Buy Groceries',
        description: 'Purchase fruits, vegetables, and other essentials for the week.',
        time: '1633947600',
    },
    {
        name: 'Complete Homework',
        description: 'Finish the math and science assignments for tomorrow.',
        time: '1633990800',
    },
    {
        name: 'Gym Workout',
        description: 'Hit the gym for a cardio and strength training session.',
        time: '1634077200',
    },
]

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1)
        },
    },
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
