import PropTypes from 'prop-types';
import Box from 'components/Box';
import { Name, Number, HoverButton } from './ContactItem.styled';
import Avatar from 'react-avatar';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <Box
      as="tr"
      key={id} // display="flex"
      // justifyContent="space-between"
      // alignItems="center"
      // width="1000px"
    >
      {/* <div>
        <Avatar name={name} size={30} round={true} textSizeRatio={2.5} />
        <Name>{name}:</Name>
        <Number>{number}</Number>
      </div> */}

      {/* <HoverButton
        type="button"
        onClick={() => deleteContact(id)}
        aria-label="delete"
        size="small"
      >
        <DeleteIcon fontSize="inherit" />
      </HoverButton> */}

      {/* <tr key={id}> */}

      <td>
        <Avatar name={name} size={30} round={true} textSizeRatio={2.5} />
      </td>
      <td>{name}</td>
      <td>{number}</td>
      <td>
        <HoverButton
          type="button"
          onClick={() => deleteContact(id)}
          aria-label="delete"
          size="small"
        >
          <DeleteIcon fontSize="inherit" />
        </HoverButton>
      </td>
      {/* </tr> */}
    </Box>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
