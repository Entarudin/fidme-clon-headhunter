import React, { FC, useEffect, useState } from 'react';
import api from '../../../api/axios';
import { StyledConversation } from './styles';
import ghost from '../../../assets/images/ghost.svg';

interface ConversationProps {
  id: string;
}

export const Conversation: FC<ConversationProps> = ({ id }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    const getProfileImage = async () => {
      try {
        const res = await api.get(`/user/${id}`);
        setUserName(res.data['name']);
        setProfileImage(res.data['profile']['profileImage']);
      } catch (err) {
        console.log(err);
      }
    };
    getProfileImage();
  }, []);
  return (
    <>
      <StyledConversation>
        <img
          className="conversationImg"
          src={
            profileImage && typeof profileImage !== undefined
              ? `${process.env.REACT_APP_BASE_API_URL}/` + `${profileImage}`
              : ghost
          }
          alt=""
        />
        <span className="conversationName">{userName !== null && userName}</span>
      </StyledConversation>
    </>
  );
};
