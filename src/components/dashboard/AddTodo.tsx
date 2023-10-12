import { addTodo } from '@/redux/todoSlice'
import { Todo } from '@/types'
import { Button, FormControl, TextField, Typography } from '@mui/material'
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs'
import { FormEventHandler, useState } from 'react'
import { useDispatch } from 'react-redux'

const AddTodo = () => {
    const [name, setName] = useState<string>('')
    const [nameErr, setNameErr] = useState<boolean>(false)
    const [description, setDescription] = useState<string>('')
    const [timestamp, setTimestamp] = useState<Dayjs | null>(null)

    const dispatch = useDispatch()

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        if (name === '') return setNameErr(true) // name has to be entered
        const newTodo: Todo = {
            name: name,
            description: description,
            time: timestamp ? timestamp.unix().toString() : Math.floor(new Date().getTime() / 1000).toString(),
        }
        dispatch(addTodo(newTodo))
        setName('')
        setDescription('')
        setTimestamp(null)
    }

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Add new todo
            </Typography>
            <form noValidate autoComplete="off" onSubmit={onSubmit}>
                <FormControl
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'top',
                        gap: '0.5rem',
                    }}
                >
                    <TextField
                        required
                        error={nameErr}
                        helperText={'Required'}
                        label="Name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                            setNameErr(false)
                        }}
                        sx={{ minWidth: '230px' }}
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Time"
                            value={timestamp}
                            onChange={(newValue) => setTimestamp(newValue)}
                            sx={{ minWidth: '230px' }}
                        />
                    </LocalizationProvider>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ minWidth: '230px', height: '56px', fontWeight: 'bold', fontSize: '15px' }}
                    >
                        Add
                    </Button>
                </FormControl>
            </form>
        </div>
    )
}
export default AddTodo
