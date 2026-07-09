import React from 'react';
import './ProfileImage.css';
import wa from '../../assets/wa1.png'

const ProfileImage = () => {
  return (
    <div className="profile-container">
      {/* เส้นประวงกลมด้านหลัง (ใช้ CSS วาด) */}
      <div className="dashed-circle circle-small"></div>
      <div className="dashed-circle circle-large"></div>

      {/* รูปโปรไฟล์หลัก */}
      <img 
        // เปลี่ยนที่อยู่รูปเป็นไฟล์ของคุณ เช่น '/assets/my-profile.jpg'
        src={wa}
        alt="Profile" 
        className="floating-image" 
      />
    </div>
  );
};

export default ProfileImage;