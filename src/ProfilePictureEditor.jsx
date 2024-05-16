import React, { useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import Monke from './assets/monke.png';
import Edit from './assets/edit.svg';
import './ProfileSettingsPage.css';

const ProfilePictureEditor = () => {
  const [image, setImage] = useState(Monke);
  const fileInputRef = useRef(null);

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vh', // Adjust as needed
  };

  const frameStyle = {
    borderRadius: '50%',
    border: '2px solid black',
    width: '200px', // Adjust as needed
    height: '200px', // Adjust as needed
    overflow: 'hidden',
    position: 'relative',
  };

  const editIconStyle = {
    position: 'absolute',
    bottom: '-52px', // Adjust as needed to overlap the frame
    right: '12px', // Adjust as needed to overlap the frame
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    zIndex: 1, // Ensure the edit icon appears above the frame
  };

  return (
    <div style={containerStyle} className='profile-picture'>
      <div style={frameStyle}>
        <AvatarEditor
          image={image}
          width={200} // Same as frame width
          height={200} // Same as frame height
          border={0}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={1}
          rotate={0}
          disableCanvas={true} // Disable dragging and scaling
          borderRadius={100} // Half of frame width/height
        />
      </div>
      <img
        src={Edit}
        alt='Edit'
        style={editIconStyle}
        onClick={handleEditClick}
      />
      <input
        type='file'
        accept='image/*'
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ProfilePictureEditor;
