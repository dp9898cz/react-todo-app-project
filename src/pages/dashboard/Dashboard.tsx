import AddTodo from '@/components/dashboard/AddTodo'
import TodosList from '@/components/dashboard/TodosList'
import { Header } from '@/components/header/Header'
import { Box } from '@mui/material'

export const Dashboard = () => {
    return (
        <Box
            sx={{
                maxWidth: 1200,
                margin: '0 auto',
                padding: '20px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }}
        >
            <Header />
            <AddTodo />
            <TodosList />
        </Box>
    )
}
