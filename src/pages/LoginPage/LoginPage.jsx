import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import Box from 'components/Box';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Box display="flex" justifyContent="center" p={5}>
      <HelmetProvider>
        <Helmet>
          <title>Login page</title>
        </Helmet>
      </HelmetProvider>

      <Box
        as="form"
        display="flex"
        alignItems="center"
        flexDirection="column"
        width="320px"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          id="email"
          label="E-mail"
          variant="outlined"
          margin="normal"
          fullWidth
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          id="password"
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button
          disabled={!email || !password}
          variant="text"
          type="submit"
          sx={{
            width: 100,
          }}
        >
          log in
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
