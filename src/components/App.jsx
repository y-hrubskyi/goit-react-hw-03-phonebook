import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { GlobalStyle } from './GlobalStyle';
import { AppWrapper } from './App.styled';

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

  updateState = (option, value) => {
    this.setState({ [option]: value });
  };

  addContact = data => {
    const formattedName = data.name.toLowerCase();
    const isAlreadyAdded = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === formattedName
    );

    if (isAlreadyAdded) {
      alert(`${data.name} is already in contacts.`);
      return isAlreadyAdded;
    }

    const newContact = { ...data, id: nanoid() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const formattedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(formattedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    const results = filteredContacts.length;
    let filterInfo = '';
    if (!results && !filter) filterInfo = <p>Your contact list is empty</p>;
    if (!results && filter) filterInfo = <p>Not Finded</p>;

    return (
      <AppWrapper>
        <GlobalStyle />

        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter
          filter={filter}
          filterInfo={filterInfo}
          onChange={this.updateState}
        />
        <ContactList contacts={filteredContacts} onClick={this.deleteContact} />
      </AppWrapper>
    );
  }
}
