import { Component } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import { GlobalStyle } from './GlobalStyle';
import { Layout, PageTitle, Title } from './App.styled';

const LS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(LS_KEY);
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    const prevContacts = prevState.contacts;

    if (prevContacts !== contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    }
  }

  updateFilter = value => {
    this.setState({ filter: value });
  };

  addContact = contact => {
    const formattedName = contact.name.toLowerCase();
    const isExist = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === formattedName
    );

    if (isExist) {
      toast.error(`${contact.name} is already in contacts.`);
      return isExist;
    }

    const newContact = { ...contact, id: nanoid() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    toast.success('Contact successfully added');
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
    toast.success('Contact successfully deleted');
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const formattedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(formattedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = this.filterContacts();
    const results = filteredContacts.length;

    let filterInfo = '';
    if (!results && !filter) filterInfo = <p>Your contact list is empty</p>;
    if (!results && filter) filterInfo = <p>Not Finded</p>;

    return (
      <Layout>
        <GlobalStyle />
        <Toaster toastOptions={{ duration: 1500 }} />
        <PageTitle>Phonebook</PageTitle>
        <ContactForm onAdd={this.addContact} />
        <Title>Contacts</Title>
        {contacts.length > 0 && (
          <Filter filter={filter} onUpdate={this.updateFilter} />
        )}
        {filteredContacts.length ? (
          <ContactList
            contacts={filteredContacts}
            onDelete={this.deleteContact}
          />
        ) : (
          filterInfo
        )}
      </Layout>
    );
  }
}
