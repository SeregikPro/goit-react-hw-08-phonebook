import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { lazy } from 'react';

const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

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
