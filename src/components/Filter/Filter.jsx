import React from 'react';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name={filter} onChange={changeFilter} />
    </label>
  );
};
