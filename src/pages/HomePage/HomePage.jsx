import { Helmet, HelmetProvider } from 'react-helmet-async';
import Box from 'components/Box';
import { AppName } from './HomePage.styled';

const HomePage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={5}>
      <HelmetProvider>
        <Helmet>
          <title>Home page</title>
        </Helmet>
      </HelmetProvider>

      <Box
        width="300px"
        textAlign="center"
        // border="normal"
        bg="accent"
        borderRadius="20px"
        p={4}
        m={16}
      >
        <AppName>Phonebook</AppName>
      </Box>
      <h2>
        This small application allows you to save phone contacts, quickly find
        and edit them. Have use and enjoy it!
      </h2>
    </Box>
  );
};

export default HomePage;
