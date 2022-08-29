import AuthNav from 'components/AuthNav';
import Box from 'components/Box';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';

const AppBar = () => {
  return (
    <Box as="header" display="flex" justifyContent="center">
      <Navigation />
      <AuthNav />
      <UserMenu />
    </Box>
  );
};

export default AppBar;
