import { FC } from 'react';
import { Button } from '@mui/material';
import api from '../../../api/axios';

interface SaveCompanyProps {
  profileImage: File;
  aboutCompany?: string;
  fieldOfActivity?: string;
  aboutProjects?: string;
  learningOpportunity?: string;
  abilityToWorkRemotely?: string;
}
export const SaveCompany: FC<SaveCompanyProps> = ({
  profileImage,
  fieldOfActivity,
  aboutProjects,
  learningOpportunity,
  abilityToWorkRemotely,
  aboutCompany
}) => {
  const userId = localStorage.getItem('id');
  const addCompany = async () => {
    const data = new FormData();
    data.append('profileImage', profileImage);
    data.append('fieldOfActivity', String(fieldOfActivity));
    data.append('aboutCompany', String(aboutCompany));
    data.append('learningOpportunity', String(learningOpportunity));
    data.append('aboutProjects', String(aboutProjects));
    data.append('abilityToWorkRemotely', String(abilityToWorkRemotely));

    const res = await api.put(`/profile/${userId}`, data);
  };
  return (
    <>
      <Button onClick={() => addCompany()} variant="contained">
        Сохранить
      </Button>
    </>
  );
};
