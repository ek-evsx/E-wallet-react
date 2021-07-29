import styled from 'styled-components';

export const Card = styled.section`
  background-color: var(--white);
  padding: 0 10px;
  border-radius: 5px;
  width: 300px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ProfileName = styled.h1`
  color: var(--white);
  padding: 10px;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  background-color: var(--light-purple);
  margin: 0;
`;

export const AvatarContainer = styled.div`
  width: 100%;
  padding: 15px 10px;
  margin: 0;
  background-color: var(--light-purple);
  display: flex;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const ProfileInfoContainer = styled.div`
  width: 100%;
  min-height: 100px;
  margin: 10px 0;
  position: relative;
`;

export const ProfileInfoField = styled.p`
  text-transform: capitalize;
`;

export const ViewProfileContainer = styled.div`
  margin: 10px 0;
`;

export const ProfileInfoFieldLabel = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

export const ProfileInfoFieldValue = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;
