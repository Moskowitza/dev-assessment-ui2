import React from 'react'
import {
  Grid,
  Paper,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  TableBody
} from '@mui/material'
import { useGetPeopleQuery } from '../../app/services/api'

export default function PeopleTable () {
  const { data, loading, error } = useGetPeopleQuery()

  // TODO: show loading indicator
  if (loading) {
    // https://mui.com/material-ui/react-skeleton/#main-content
  }

  // TODO In the Return
  // TODO Add a BASIC MUI table to display our data
  // !visit https://mui.com/material-ui/react-table/
  // TODO After the Table is created, center it on the page
  // !visit https://mui.com/material-ui/grid/

  return (
    <Grid container>
      <Grid item>
        <Typography>A Table of People</Typography>
      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>{/* TODO Create A Header Row */}</TableRow>
          </TableHead>
          <TableBody >
            {/* TODO map over our data to create a table body */}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  )
}
