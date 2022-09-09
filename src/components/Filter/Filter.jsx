import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from 'redux/filter/filterSlice';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };

  return (
    <TextField
      id="filter"
      label="Find contacts by name"
      variant="standard"
      margin="normal"
      helperText="Type to search"
      // fullWidth
      // type="text"
      size="small"
      value={filter}
      onChange={handleFilter}
    />
  );
};

export default Filter;
