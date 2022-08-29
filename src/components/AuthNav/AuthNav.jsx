import Box from 'components/Box';
import { List, Navlink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Box as="nav">
      <List>
        <li>
          <Navlink to="/">SignUp</Navlink>
        </li>
        <li>
          <Navlink to="/contacts">LogIn</Navlink>
        </li>
      </List>
    </Box>
  );
};

export default AuthNav;
