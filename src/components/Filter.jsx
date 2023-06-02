import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, onSearch }) => (
  <input
    type="text"
    name="filter"
    value={filter || ''}
    onChange={onSearch}
    placeholder="Type name"
  />
);

Filter.propTypes = {
  filter: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default Filter;
