import { useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { addContact, deleteItem } from './redux/actions/actions-contacts';
import { filterContacts } from './redux/actions/actions-filter';
import Filter from './components/Filter/Filter';
import css from './App.module.css';


export default function App() {
  const mounted = useRef(false);
  const contacts = useSelector((state) => state.items);
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const contactsLS = JSON.parse(localStorage.getItem('contacts'));

  //   if (contactsLS) {
  //     dispatch(addContact(contactsLS));
  //   }
  // }, [dispatch]);

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
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (existingContact) {
      return toast.error(`${name} is already in contacts!!!`);
    }
    dispatch(addContact({ id, name, number }));

    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  const handleChange = e => {
    const filterName = e.target.value.toLowerCase();
    dispatch(filterContacts(filterName));
  };

  const handleFilter = () => {
    if (!filter) {
      return;
    } else {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter),
      );
    }
  };

  const deleteContact = contactId => {
    dispatch(deleteItem(contactId));
  };

  const selectedContacts = handleFilter();

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
