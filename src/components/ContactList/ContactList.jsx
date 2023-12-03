import React from 'react';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      <div>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name} : {number}
            </p>

            <button type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </div>
    </ul>
  );
};
