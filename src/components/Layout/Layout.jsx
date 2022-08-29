import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Box from 'components/Box';

const Layout = () => {
  return (
    <Box as="main">
      <AppBar />
      <Suspense fallback={<section>Loading...</section>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Layout;
