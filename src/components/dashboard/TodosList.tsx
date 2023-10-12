import { useAppSelector } from '@/redux/store'
import { deleteTodo } from '@/redux/todoSlice'
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'
import { useDispatch } from 'react-redux'

const formatDate: (unix: string) => string = (unix) => {
    const date = new Date(parseInt(unix) * 1000)
    return date.toLocaleString('cs-CZ', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
    })
}

const TodosList = () => {
    const todos = useAppSelector((state) => state.todos)
    const dispatch = useDispatch()

    const onDeleteTodo: (index: number) => void = (index) => {
        dispatch(deleteTodo(index))
    }

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                List of todos
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ fontWeight: 'bold' }}>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todos.map((todo, idx) => (
                            <TableRow key={idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {todo.name}
                                </TableCell>
                                <TableCell>{todo.description}</TableCell>
                                <TableCell>{formatDate(todo.time)}</TableCell>
                                <TableCell align="right">
                                    <Button variant="contained" color="error" onClick={() => onDeleteTodo(idx)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TodosList
