import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React from 'react';
import './SignUpPage.css';
import Button from './assets/components/button.jsx';
import CountrySelect from './CountrySelect.jsx';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF', // Set the background color to white
        },
      },
    },
  },
});
const SignUpPage = () => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
  const [fullNameError, setFullNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [usernameError, setUsernameError] = React.useState(false);
  const [isCountryAndPhoneNumberValid, setIsCountryAndPhoneNumberValid] =
    React.useState(false);
  const [shouldValidate, setShouldValidate] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (event.target.value !== password) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  };

  const handleCountryValidation = (isValid) => {
    setIsCountryAndPhoneNumberValid(isValid);
  };

  const navigate = useNavigate();

  const handleSignUp = () => {
    setShouldValidate(true);
    // Check if all required fields are filled and if country and phone number are valid
    if (
      !fullName ||
      !email ||
      !username ||
      !password ||
      confirmPassword !== password ||
      !isCountryAndPhoneNumberValid
    ) {
      console.log('unsuccessful');
      setFullNameError(!fullName);
      setEmailError(!email);
      setUsernameError(!username);
      setPasswordError(!password);
      setConfirmPasswordError(confirmPassword !== password);
      return; // Exit early if any required field is empty or validations fail
    }

    navigate('/userselect');
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          className='container-signup'
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '75vw' },
          }}
          noValidate
          autoComplete='off'
        >
          <div className='sign-up-text'>Sign Up</div>
          <TextField
            required
            error={fullNameError}
            helperText={fullNameError && 'Full name is required'}
            label='Full name'
            variant='outlined'
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              setFullNameError(false); // Reset error state when user types
            }}
          />
          <TextField
            required
            error={emailError}
            helperText={emailError && 'Email is required'}
            label='Email'
            variant='outlined'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false); // Reset error state when user types
            }}
          />
          <TextField
            required
            error={usernameError}
            helperText={usernameError && 'Username is required'}
            label='Username'
            variant='outlined'
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setUsernameError(false); // Reset error state when user types
            }}
          />
          <TextField
            required
            error={passwordError}
            helperText={passwordError && 'Password is required'}
            label='Password'
            type={showPassword ? 'text' : 'password'}
            variant='outlined'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false); // Reset error state when user types
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleTogglePassword}
                    edge='end'
                    sx={{
                      '&:focus': { outline: 'none' },
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            error={confirmPasswordError}
            helperText={confirmPasswordError ? "Passwords don't match" : ''}
            label='Confirm password'
            type={showPassword2 ? 'text' : 'password'}
            variant='outlined'
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordError(false); // Reset error state when user types
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleTogglePassword2}
                    edge='end'
                    sx={{
                      '&:focus': { outline: 'none' },
                    }}
                  >
                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <div className='country-selector'>
            <CountrySelect
              shouldValidate={shouldValidate}
              onValidationComplete={handleCountryValidation}
            />
          </div>
          <div className='empty-space' />
          <Button
            text='Sign up'
            color='black'
            onClick={handleSignUp}
            width='57vw'
          />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default SignUpPage;
