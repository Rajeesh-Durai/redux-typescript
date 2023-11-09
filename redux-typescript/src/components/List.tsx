import React from 'react'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../store/store'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import '../../src/CSS/add.css'

const List = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      fontFamily: 'Manrope, sans-serif',
    },
  }))

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }))
  // Assuming your Redux state structure has a 'persons' array
  const persons = useAppSelector((state) => state.person.persons)

  return (
    <div className="table">
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ width: 650 }} aria-label="simple table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {persons.map((person) => (
                <StyledTableRow key={person.id}>
                  <StyledTableCell>{person.id}</StyledTableCell>
                  <StyledTableCell>{person.name}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default List
