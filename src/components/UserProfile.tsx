import React from "react";

import styled from "styled-components";

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 3rem;
  padding-top: 4.6rem;
  padding-bottom: 4.6rem;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const UserName = styled.h2`
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const UserEmail = styled.p`
  color: #ffffff;
`;

const Profile: React.FC = () => {
  return (
    <UserProfile>
      <ProfileImage
        src="https://i.pravatar.cc/150?u=a04235h853thg670"
        alt="User"
      />
      <UserName>John Doe</UserName>
      <UserEmail>john.doe@mail.com</UserEmail>
    </UserProfile>
  );
};

export default Profile;
