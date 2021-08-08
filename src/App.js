import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import css from './App.module.css';

export default function App() {
  const mounted = useRef(false);
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const contactsLS = JSON.parse(localStorage.getItem('contacts'));

  //   if (contactsLS) {
  //     setContacts(contactsLS);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!mounted.current) {
  //     mounted.current = true;
  //     return;
  //   }
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const onSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const id = uuidv4();
    // const existingContact = contacts.find(
    //   contact => contact.name.toLowerCase() === name.toLowerCase(),
    // );

    // if (existingContact) {
    //   return toast.error(`${name} is already in contacts!!!`);
    // }

    // setContacts(prevState => [...prevState, { id, name, number }]);

    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  const handleChange = e => {
    const filterName = e.target.value.toLowerCase();
    console.log(filterName);
    setFilter(filterName);
  };

  // const handleFilter = () => {
  //   if (!filter) {
  //     return;
  //   } else {
  //     return contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(filter),
  //     );
  //   }
  // };

  const deleteContact = contactId => {
    console.log(contactId);
    // setContacts(prevState =>
    //   prevState.filter(contact => contact.id !== contactId),
    // );
  };

  // const selectedContacts = handleFilter();

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />

      <h2>Contacts</h2>
      <Filter filterByName={handleChange} />
      {!filter && (
        <ContactList contacts={contacts} deleteContact={deleteContact} />
      )}
      {filter && (
        <ContactList
          contacts={selectedContacts}
          deleteContact={deleteContact}
        />
      )}
      <Toaster />
    </div>
  );
}
