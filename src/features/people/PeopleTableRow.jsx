import React, { useEffect } from 'react';
import { TableRow, TableCell } from '@mui/material';
import { useGetPersonalQuoteQuery } from '../../app/services/api';
export default (props) => {
  const { data, error, loading } = useGetPersonalQuoteQuery(props.person.id);

  const handleClick = () => {
    console.log(data);
  };

  return (
    <TableRow onClick={() => handleClick(props.person.id)}>
      <TableCell component="th" scope="row">
        {props.person.id}
      </TableCell>
      <TableCell>{props.person.Firstname}</TableCell>
      <TableCell>{props.person.Lastname}</TableCell>
      <TableCell>{props.person.description}</TableCell>
      <TableCell>{props.person.level}</TableCell>
    </TableRow>
  );
};
