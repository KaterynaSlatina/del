import React from 'react';
import { Component } from 'react';
import { FormContact } from './FormContact/FormContact';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.state.contacts.some(
      i =>
        i.name.toLowerCase() ===
          (contact.name.toLowerCase() && i.number === contact.number) ||
        i.number === contact.number
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  newContact = data => {
    console.log(data);
  };

  findContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    // const { contacts, filter } = this.state;
    return (
      <>
        <section>
          <h2>Phonebook</h2>
          <FormContact
            onSubmit={this.formSubmitHandler}
            newContact={this.newContact}
          />
          <h2>Contacts list</h2>
          <ContactList contacts={this.findContacts()} />
          <Filter />
        </section>
      </>
    );
  }
}
