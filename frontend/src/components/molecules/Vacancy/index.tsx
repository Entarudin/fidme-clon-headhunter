import React, { FC, useEffect, useState } from 'react';
import {
  StyledLogoCompany,
  StyledVacancy,
  StyledInfoBlock,
  StyledIconsBlock,
  StyledIcon,
  StyledNavLink
} from './styles';
import HeartIcon from '../../../assets/icons/heart-icons.png';
import MessagesIcon from '../../../assets/icons/messages-icons.png';
import SendIcon from '../../../assets/icons/tg-icons.png';
import GhostIcon from '../../../assets/images/ghost.svg';
import api from '../../../api/axios';

interface VacancyProps {
  id: string;
  companyId?: string;
  fieldActivity: string;
  vacancyName: string;
  skills: string;
}

export const Vacancy: FC<VacancyProps> = ({
  companyId,
  fieldActivity,
  vacancyName,
  skills,
  id
}) => {
  const [profileImage, setProfileImage] = useState(null);
  const userId = localStorage.getItem('id') ? localStorage.getItem('id') : null;

  const addConversation = async () => {
    try {
      const data = {
        senderId: userId,
        receiverId: companyId
      };
      const res = await api.post('/conversation', data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getProfileImage = async () => {
      try {
        const res = await api.get(`/profile/${companyId}`);
        setProfileImage(res.data['profileImage']);
      } catch (err) {
        console.log(err);
      }
    };
    getProfileImage();
  }, []);

  return (
    <>
      <StyledVacancy>
        <StyledNavLink to={`/users/${companyId}`}>
          <StyledLogoCompany
            src={
              profileImage
                ? `${process.env.REACT_APP_BASE_API_URL}/` + `${profileImage}`
                : GhostIcon
            }
          />
        </StyledNavLink>
        <StyledNavLink to={`/vacancy/${id}`}>
          <StyledInfoBlock>
            <div className="title">{vacancyName ? vacancyName : 'Не указано'}</div>
            <div className="type_vacancy">
              <p> {fieldActivity ? fieldActivity : 'Не указано'}</p>
            </div>
            <div className="skills">{skills ? skills : 'Не указано'}</div>
          </StyledInfoBlock>
        </StyledNavLink>
        <StyledIconsBlock>
          <StyledIcon src={SendIcon} />

          <StyledNavLink to={'/messages'}>
            <StyledIcon src={MessagesIcon} onClick={() => addConversation()} />
          </StyledNavLink>

          <StyledIcon src={HeartIcon} />
        </StyledIconsBlock>
      </StyledVacancy>
    </>
  );
};
