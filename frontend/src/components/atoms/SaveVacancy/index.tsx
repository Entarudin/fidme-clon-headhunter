import { FC, useState } from 'react';
import { Button } from '@mui/material';
import api from '../../../api/axios';

interface SaveVacancyProps {
  vacancyName?: string;
  workPlace?: string;
  workTime?: string;
  skills?: string;
  fieldOfActivity?: string;
  offer?: string;
  salary?: string;
  requirements?: string;
  companyId?: string;
}

export const SaveVacancy: FC<SaveVacancyProps> = ({
  vacancyName,
  workPlace,
  workTime,
  skills,
  fieldOfActivity,
  offer,
  salary,
  requirements,
  companyId
}) => {
  const [status, setStatus] = useState<number>(0);
  const addVacancy = async () => {
    const data = {
      vacancyName,
      workFormat: workPlace,
      schelude: workTime,
      skills,
      fieldOfActivity,
      offer,
      salary,
      requirements,
      companyId
    };

    const res = await api.post('/vacancy', data);
    setStatus(res.status);
  };
  return (
    <>
      {status !== 0 && status === 201 && history.back()}
      <Button onClick={() => addVacancy()} variant="contained">
        Сохранить
      </Button>
    </>
  );
};
