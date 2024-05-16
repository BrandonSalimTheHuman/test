import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.svg';
import Button from './assets/components/button.jsx';
import './TitlePage.css';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff, Email, Lock } from '@mui/icons-material';

const TitlePage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLoginForm(true);
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    // Handle login logic
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='container-title'>
      <div className='background-image'></div>
      <div className='content'>
        <h1 className={`inter-title ${showLoginForm ? 'move-up' : ''}`}>
          Welcome To
        </h1>
        <div className={`logo-container ${showLoginForm ? 'move-up' : ''}`}>
          <img src={logo} alt='Logo' />
          <span className='name-title'>Moringo</span>
        </div>
        {showLoginForm ? (
          <form className={`login-form`} onSubmit={handleLogin}>
            <TextField
              required
              className={`${showLoginForm ? 'move-up' : ''}`}
              error={emailError}
              helperText={emailError && 'Email is required'}
              placeholder='abc@email.com'
              variant='filled'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
              }}
              sx={{
                '& .MuiInputBase-root': {
                  height: '60px',
                  paddingTop: '15px', // Adjust top padding as needed
                  paddingBottom: '15px', // Adjust bottom padding as needed
                },
                '& .MuiFilledInput-input': {
                  padding: '10px 14px', // Adjust left and right padding as needed
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Email />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              required
              className={`${showLoginForm ? 'move-up' : ''}`}
              error={passwordError}
              helperText={passwordError && 'Password is required'}
              placeholder='Your password'
              type={showPassword ? 'text' : 'password'}
              variant='filled'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
              }}
              sx={{
                '& .MuiInputBase-root': {
                  height: '60px',
                  paddingTop: '15px', // Adjust top padding as needed
                  paddingBottom: '15px', // Adjust bottom padding as needed
                },
                '& .MuiFilledInput-input': {
                  padding: '10px 14px', // Adjust left and right padding as needed
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Lock />
                  </InputAdornment>
                ),
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
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              text='Log in'
              color='white'
              width='60vw'
              onClick={() => setShowLoginForm(true)}
              className={`${showLoginForm ? 'move-up' : ''}`}
            />
          </form>
        ) : (
          <>
            <div className='empty-space'></div>
            <Button
              text='Log in'
              color='white'
              width='60vw'
              onClick={handleLoginButtonClick}
            />
            <Button
              text='Sign Up'
              color='black'
              onClick={handleSignUp}
              width='60vw'
            />
          </>
        )}
        <>
          <div className='additional-options'>
            <a
              href='#'
              className={`forgot-password ${showLoginForm ? 'move-up' : ''} `}
            >
              Forgot password?
            </a>
            <label className='remember-me'>
              <input
                type='checkbox'
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span
                className={`slider ${showLoginForm ? 'move-up' : ''}`}
              ></span>
              <span className={`slider-text ${showLoginForm ? 'move-up' : ''}`}>
                Remember Me
              </span>
            </label>
          </div>
        </>
      </div>
    </div>
  );
};

export default TitlePage;
