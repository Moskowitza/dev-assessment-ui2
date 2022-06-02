import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
} from '@mui/material';
import {
  useGetPeopleQuery,
  useGetPersonalQuoteQuery,
} from '../../app/services/api';
import PeopleTableRow from './PeopleTableRow';

export default function PeopleTable() {
  const { data, loading, error } = useGetPeopleQuery();

  const [peopleData, setPeopleData] = useState([]);
  useEffect(() => {
    setPeopleData(data);
  }, [data]);

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
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Level</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!peopleData ? (
              <></>
            ) : (
              peopleData.map((person) => (
                <PeopleTableRow person={person} key={person.id} />
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
