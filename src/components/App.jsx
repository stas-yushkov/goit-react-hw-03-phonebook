import { PureComponent } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { MainSection } from './StyledComponents';

import { colors } from 'constants/colors';

import localStorageHandler from 'utils/localStorageHandler';

export class App extends PureComponent {
  constructor(props) {
    super(props);

    const contactsFromLocalStorage = localStorageHandler.get('contacts');
    const initialContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];

    this.state = {
      contacts: contactsFromLocalStorage || initialContacts,
      filter: '',
    };

    if (!contactsFromLocalStorage) {
      localStorageHandler.persist('contacts', initialContacts);
    }
  }

  componentDidUpdate = () => {
    localStorageHandler.persist('contacts', this.state.contacts);
  };

  onSubmit = elem => {
    this.setState(prev => ({
      ...prev,
      contacts: [...prev.contacts, elem],
    }));
  };

  handleFilterChange = e => {
    this.setState(prev => ({
      ...prev,
      filter: e.target.value,
    }));
  };

  handleDelete = idToDelete => {
    this.setState(prev => ({
      ...prev,
      contacts: this.state.contacts.filter(({ id }) => id !== idToDelete),
    }));
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;

    if (filter) {
      return contacts.filter(contact => contact.name.includes(filter));
    }

    return contacts;
  };

  render() {
    const { contacts } = this.state;
    const { onSubmit, handleFilterChange, handleDelete, filteredContacts } =
      this;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          fontSize: 40,
          color: colors.color,
        }}
      >
        <MainSection>
          <h1>Phonebook</h1>
          <ContactForm contactList={contacts} onSubmit={onSubmit} />
          <h2>Contacts</h2>
          <Filter handleFilterChange={handleFilterChange} />
          <ContactList
            contactList={filteredContacts()}
            onDelete={handleDelete}
          />
        </MainSection>
      </div>
    );
  }
}
