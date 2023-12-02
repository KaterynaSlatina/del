import React from 'react';

export const ContactList = ({ contacts }) => {
  const arr = Object.keys({ contacts });

  return (
    <ul>
      <div>
        {arr.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name} : {number}
            </p>

            <button type="button" name="delete">
              Delete
            </button>
          </li>
        ))}
      </div>
    </ul>
  );
};
