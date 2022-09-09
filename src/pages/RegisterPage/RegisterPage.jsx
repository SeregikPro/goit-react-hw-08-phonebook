import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Box from 'components/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Box display="flex" justifyContent="center" p={5}>
      <HelmetProvider>
        <Helmet>
          <title>Register page</title>
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
          id="name"
          label="Name"
          variant="outlined"
          margin="normal"
          helperText="Please enter your name"
          fullWidth
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <TextField
          id="email"
          label="E-mail"
          variant="outlined"
          margin="normal"
          helperText="Please enter your e-mail"
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
          helperText="Please enter password"
          fullWidth
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button
          disabled={!name || !email || !password}
          variant="text"
          type="submit"
          sx={{
            width: 100,
          }}
        >
          sign up
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterPage;
