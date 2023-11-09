import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useAppDispatch } from '../store/store'
import { addPerson } from '../store/feature/personSlice'
import '../../src/CSS/add.css'

const Add = () => {
  const [name, setName] = useState<string>('')
  const dispatch = useAppDispatch()
  const addNewPerson = () => {
    dispatch(addPerson({ name }))
  }

  return (
    <div className="add-header">
      <div className="name">
        <label htmlFor="">Enter the name: </label>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="add-button">
        <Button variant="contained" onClick={addNewPerson} className="button">
          Add
        </Button>
      </div>
    </div>
  )
}

export default Add
