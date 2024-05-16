import { useState } from 'react';
import Header from './assets/header.svg';
import Leaf from './assets/leaf.svg';
import Back from './assets/back.svg';
import Bell from './assets/bell.svg';
import ProfilePictureEditorSmaller from './ProfilePictureEditorSmaller.jsx';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from './assets/components/button.jsx';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './ProfileEditorPage.css';

import React from 'react';

const ProfileEditorPage = () => {
  const [firstName, setFirstName] = React.useState('John');
  const [lastName, setLastName] = React.useState('Appleseed');
  const [username, setUsername] = React.useState('Apple.seed');
  const [email, setEmail] = React.useState('johnapp@gmail.com');
  const [phone, setPhone] = React.useState('(+62) 0812566789');
  const [firstNameError, setFirstNameError] = React.useState(false);
  const [lastNameError, setLastNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [usernameError, setUsernameError] = React.useState(false);
  const [phoneError, setPhoneError] = React.useState(false);

  const navigate = useNavigate();

  const handleEditBack = () => {
    navigate('/profile');
  };

  const handleConfirmChanges = () => {
    // Reset all error states
    setFirstNameError(!firstName);
    setLastNameError(!lastName);
    setUsernameError(!username);
    setEmailError(!email);
    setPhoneError(!phone);

    // Check if all fields are filled
    if (firstName && lastName && username && email && phone) {
      console.log('All not empty');
      // Handle form submission here
    }
  };
  return (
    <div className='container-settings'>
      <img className='header-editor' src={Header} alt='header' />
      <img className='leaf-editor' src={Leaf} alt='leaf' />
      <div className='top-editor'>
        <img src={Back} alt='back button' onClick={handleEditBack} />{' '}
        <h3>Profile</h3>
        <img src={Bell} alt='notification button' />
      </div>
      <ProfilePictureEditorSmaller />
      <div className='edit-text'>Edit Profile Picture</div>
      <div className='textfield-container-edit'>
        <TextField
          label='First Name'
          variant='outlined'
          error={firstNameError}
          helperText={firstNameError && 'First Name is required'}
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />

        <TextField
          label='Last Name'
          variant='outlined'
          error={lastNameError}
          helperText={lastNameError && 'Last Name is required'}
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />

        <TextField
          label='Username'
          variant='outlined'
          error={usernameError}
          helperText={usernameError && 'Username is required'}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <TextField
          label='Email'
          variant='outlined'
          error={emailError}
          helperText={emailError && 'Email is required'}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <TextField
          label='Phone'
          variant='outlined'
          error={phoneError}
          helperText={phoneError && 'Phone number is required'}
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <div className='form-container'>
          <FormControl sx={{ width: '100%' }}>
            <FormLabel style={{ textAlign: 'left', fontSize: '15px' }}>
              Gender
            </FormLabel>
            <RadioGroup row style={{ justifyContent: 'space-between' }}>
              <FormControlLabel
                value='female'
                control={<Radio />}
                label='Female'
                style={{ textAlign: 'left' }}
              />
              <FormControlLabel
                value='male'
                control={<Radio />}
                label='Male'
                style={{ textAlign: 'center' }}
              />
              <FormControlLabel
                value='other'
                control={<Radio />}
                label='Other'
                style={{ textAlign: 'right' }}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className='button-container'>
          <Button
            text='Confirm Changes'
            color='black'
            width='55vw'
            height='45px'
            onClick={handleConfirmChanges}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileEditorPage;
