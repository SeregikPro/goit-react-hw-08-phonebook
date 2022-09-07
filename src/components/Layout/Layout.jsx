import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Box from 'components/Box';
import { GlobalStyle } from 'components/GlobalStyle';

const Layout = () => {
  return (
    <Box as="main" maxWidth={1440} margin="0 auto" px={16}>
      <AppBar />
      <Suspense fallback={<section>Loading...</section>}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </Box>
  );
};

export default Layout;
