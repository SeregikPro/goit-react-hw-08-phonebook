import React, { useEffect } from 'react';
import Box from 'components/Box';
import ContactList from 'components/ContactsList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactsSelectors';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={5}>
      <h1>Phonebook</h1>
      <Box
        width="300px"
        textAlign="center"
        border="normal"
        borderColor="accent"
        borderRadius="normal"
        p={4}
      >
        <ContactForm />
      </Box>
      {contacts.length > 0 ? (
        <Box width="300px">
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Box>
      ) : (
        <h2>Contact list is empty</h2>
      )}
    </Box>
  );
};

export default ContactsPage;
