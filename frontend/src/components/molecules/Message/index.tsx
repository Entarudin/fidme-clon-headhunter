import React, { FC, useEffect, useState } from 'react';
import { StyledMessage } from './styles';
import ghost from '../../../assets/images/ghost.svg';
import moment from 'moment';
import api from '../../../api/axios';

interface MessageProps {
  sender: string;
  text: string;
  own: boolean;
  date: string;
  _id?: string;
}

export const Message: FC<MessageProps> = ({ text, own, date, sender }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    const getProfileImage = async () => {
      try {
        const res = await api.get(`/user/${sender}`);
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
      <StyledMessage>
        <div className={own ? 'message own' : 'message'}>
          <div className="messageTop">
            <img
              className="messageImg"
              src={
                sender && typeof sender !== undefined
                  ? `${process.env.REACT_APP_BASE_API_URL}/` + `${profileImage}`
                  : ghost
              }
              alt=""
            />
            <div>
              <p className="messageText">{text}</p>
              <div className="messageBottom">{moment(date).format('hh:mm')}</div>
            </div>
          </div>
        </div>
      </StyledMessage>
    </>
  );
};
