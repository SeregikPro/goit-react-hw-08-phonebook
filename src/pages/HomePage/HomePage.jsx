import { Helmet, HelmetProvider } from 'react-helmet-async';
import Box from 'components/Box';
import { useAuth } from 'hooks';
import { NavLink, Link } from 'react-router-dom';
import { Book, AppName } from './HomePage.styled';

const HomePage = () => {
  const { isLoggedIn /*, user */ } = useAuth();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={5}>
      <HelmetProvider>
        <Helmet>
          <title>Home page</title>
        </Helmet>
      </HelmetProvider>

      {/* <div>Welcome {user.name}</div> */}
      <NavLink to="/contacts">
        <Book>
          <AppName>Phonebook</AppName>
        </Book>
      </NavLink>

      <Box as="h2" fontSize="m" mt={16}>
        This small application allows you to save phone contacts, quickly find
        and edit them. Have use and enjoy it!
      </Box>
      {!isLoggedIn && (
        <Box as="h2" fontSize="m" mt={16}>
          To start using, you need to{' '}
          <Link to="/register" style={{ textDecoration: 'underline' }}>
            SignUp
          </Link>{' '}
          or{' '}
          <Link to="/login" style={{ textDecoration: 'underline' }}>
            LogIn
          </Link>{' '}
          to your account.
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
