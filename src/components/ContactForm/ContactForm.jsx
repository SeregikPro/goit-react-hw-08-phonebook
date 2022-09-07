import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addContact } from 'redux/contacts/contactsOperations';
import {
  getContacts,
  getLoadingStatus,
} from 'redux/contacts/contactsSelectors';
import Box from 'components/Box';
// import { Input, Title } from './ContactForm.styled';
// import Button from 'components/Button';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoadingStatus);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const allContactNames = contacts.map(contact => contact.name);

  const checkDuplicates = name => {
    if (allContactNames.includes(name)) {
      alert(`${name} is already in contacts.`);
      return true;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checkDuplicates(name)) {
      return;
    }

    const newContact = {
      name,
      number,
    };

    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box
      as="form"
      display="flex"
      alignItems="center"
      flexDirection="column"
      onSubmit={handleSubmit}
    >
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        size="small"
        margin="normal"
        // helperText="Please enter contact name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        inputProps={{
          pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        }}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <TextField
        id="tel"
        label="Number"
        variant="outlined"
        size="small"
        margin="normal"
        // helperText="Please enter contact number"
        type="text"
        name="number"
        value={number}
        onChange={handleChange}
        inputProps={{
          pattern:
            '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
        }}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button disabled={!name || !number} variant="text" type="submit">
        {isLoading ? 'Loading...' : 'Add contact'}
      </Button>
    </Box>
  );
};

export default ContactForm;
