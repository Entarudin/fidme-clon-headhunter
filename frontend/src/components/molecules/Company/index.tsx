import React, { FC, useEffect, useState } from 'react';
import { StyledLogoCompany, StyledCompany } from './styles';
import GhostIcon from '../../../assets/images/ghost.svg';
import api from '../../../api/axios';

interface CompanyProps {
  name: string;
  profileImage: string | null;
}

export const Company: FC<CompanyProps> = ({ name, profileImage }) => {
  return (
    <>
      <StyledCompany>
        <StyledLogoCompany
          src={
            profileImage ? `${process.env.REACT_APP_BASE_API_URL}/` + `${profileImage}` : GhostIcon
          }
        />
        <div className="name_company">{name}</div>
      </StyledCompany>
    </>
  );
};
