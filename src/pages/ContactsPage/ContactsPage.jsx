import React, { useEffect } from 'react';
import Box from 'components/Box';
import ContactList from 'components/ContactsList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
      <HelmetProvider>
        <Helmet>
          <title>Contacts page</title>
        </Helmet>
      </HelmetProvider>

      <Box
        width="300px"
        height="200px"
        textAlign="center"
        border="normal"
        borderColor="accent"
        borderRadius="20px"
        p={4}
        m={16}
      >
        <ContactForm />
      </Box>
      {contacts.length > 0 ? (
        <Box display="flex" flexDirection="column">
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
