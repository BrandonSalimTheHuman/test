import { useState } from 'react';
import Header from './assets/header.svg';
import Leaf from './assets/leaf.svg';
import Back from './assets/back.svg';
import Bell from './assets/bell.svg';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import LockIcon from '@mui/icons-material/Lock';
import SettingsIcon from '@mui/icons-material/Settings';
import ProfilePictureEditor from './ProfilePictureEditor.jsx';
import { useNavigate } from 'react-router-dom';
import './ProfileSettingsPage.css';

export default function ProfileSettingsPage() {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/profile-edit');
  };

  const handleManagePassword = () => {
    navigate('/manage-password');
  };

  return (
    <>
      <div className='container-settings'>
        <img className='header' src={Header} alt='header' />
        <img className='header leaf' src={Leaf} alt='leaf' />
        <div className='top-settings'>
          <img src={Back} alt='back button' />
          <h3>Profile</h3>
          <img src={Bell} alt='notification button' />
        </div>
        <ProfilePictureEditor />
        <h3 className='name'>{'Placeholder name'}</h3>
        <p className='email'>{'@Placeholder email'}</p>
        <Button
          variant='contained'
          endIcon={<EditIcon />}
          sx={{
            borderRadius: '50px',
            backgroundColor: '#2C533E',
            '&:hover': {
              backgroundColor: '#2C533E',
            },
            width: '50vw',
            height: '6vh',
            textTransform: 'none',
            fontSize: '16px',
          }}
          onClick={handleEditProfile}
        >
          Edit Profile
        </Button>
        <Button
          variant='contained'
          endIcon={<LogoutIcon />}
          sx={{
            borderRadius: '50px',
            backgroundColor: '#000000',
            '&:hover': {
              backgroundColor: '#000000',
            },
            width: '70vw',
            height: '6vh',
            textTransform: 'none',
            fontSize: '16px',
            position: 'absolute',
            top: '85%',
          }}
        >
          Log out
        </Button>
      </div>

      <div className='bottom-section'>
        <div className='rectangle'>
          <Button
            startIcon={<LockIcon />}
            variant='contained'
            sx={{
              borderRadius: '10px',
              backgroundColor: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#FFFFFF',
              },
              color: 'black',
              width: '70vw', // Adjust width as needed
              height: '6vh', // Adjust height as needed
              textTransform: 'none',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)', // Shadow
              marginBottom: '16px', // Add spacing between buttons
              fontSize: '15px',
            }}
            onClick={handleManagePassword}
          >
            Manage Password
          </Button>
          <Button
            startIcon={<SettingsIcon />}
            variant='contained'
            sx={{
              borderRadius: '10px',
              backgroundColor: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#FFFFFF',
              },
              color: 'black',
              width: '70vw', // Adjust width as needed
              height: '6vh', // Adjust height as needed
              textTransform: 'none',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)', // Shadow
              fontSize: '15px',
            }}
          >
            Settings
          </Button>
        </div>
      </div>
    </>
  );
}
