import Box from 'components/Box';
import { List, Navlink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Box as="nav">
      <List>
        <li>
          <Navlink to="/register">SignUp</Navlink>
        </li>
        <li>
          <Navlink to="/login">LogIn</Navlink>
        </li>
      </List>
    </Box>
  );
};

export default AuthNav;
