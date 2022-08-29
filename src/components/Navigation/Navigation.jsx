import Box from 'components/Box';
import { List, Navlink } from './Navigation.styled';

const Navigation = () => {
  return (
    <Box as="nav">
      <List>
        <li>
          <Navlink to="/">Main</Navlink>
        </li>
        <li>
          <Navlink to="/contacts">Contacts</Navlink>
        </li>
      </List>
    </Box>
  );
};

export default Navigation;
