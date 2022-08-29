import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { lazy } from 'react';

const Register = lazy(() => import('pages/RegisterPage'));
const Login = lazy(() => import('pages/LoginPage'));
const Contacts = lazy(() => import('pages/ContactsPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default App;
