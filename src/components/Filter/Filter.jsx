import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import css from './Filter.module.css';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <input
      className={css.input}
      type="text"
      name="filter"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Type name"
    />
  );
};

export default Filter;
