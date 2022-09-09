import Box from 'components/Box';
import ContactItem from 'components/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { getFilter } from 'redux/filter/filterSlice';
import { Table, Thead } from './ContactsList.styled';

const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(e =>
    e.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <div>
      <Table>
        <Thead>
          <tr>
            <Box as="th" width="50px">
              Avatar
            </Box>
            <Box as="th" width="300px">
              Name
            </Box>
            <Box as="th" width="300px">
              Number
            </Box>
            <Box as="th" width="50px">
              Option
            </Box>
          </tr>
        </Thead>
        <tbody>
          {filteredContacts.map(({ id, avatar, name, number }) => {
            return (
              <ContactItem
                key={id}
                id={id}
                avatar={avatar}
                name={name}
                number={number}
                deleteContact={deleteContact}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ContactsList;
