import { Helmet, HelmetProvider } from 'react-helmet-async';
import Box from 'components/Box';
import { NavLink } from 'react-router-dom';
import { Book, AppName } from './HomePage.styled';

const HomePage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={5}>
      <HelmetProvider>
        <Helmet>
          <title>Home page</title>
        </Helmet>
      </HelmetProvider>

      <NavLink to="/contacts">
        <Book>
          <AppName>Phonebook</AppName>
        </Book>
      </NavLink>

      <h2>
        This small application allows you to save phone contacts, quickly find
        and edit them. Have use and enjoy it!
      </h2>
    </Box>
  );
};

export default HomePage;
