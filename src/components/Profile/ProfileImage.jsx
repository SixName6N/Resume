import React from 'react';
import './ProfileImage.css';
import wa from '../../assets/wa1.png';

const ProfileImage = () => {
  return (
    <div className="profile-container">
      <div className="dashed-circle circle-small"></div>
      <div className="dashed-circle circle-large"></div>

      <img 
        src={wa}
        alt="Profile" 
        className="floating-image" 
      />
    </div>
  );
};

export default ProfileImage;