import Box from 'components/Box';
import { List, Navlink } from './Navigation.styled';
import { useAuth } from 'hooks';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="nav">
      <List>
        <Navlink to="/">Main</Navlink>
        {isLoggedIn && <Navlink to="/contacts">Contacts</Navlink>}
      </List>
    </Box>
  );
};

export default Navigation;
