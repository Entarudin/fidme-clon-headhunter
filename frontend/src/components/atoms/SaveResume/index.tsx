import { FC } from 'react';
import { useAppDispatch } from '../../../store/reducers/rootReducer';
import { Button } from '@mui/material';
import api from '../../../api/axios';

interface SaveResumeProps {
  profileImage: File;
  achievements?: string;
  additionalEducation?: string;
  averageScore?: string;
  dateOfBirth?: Date | Date[] | undefined;
  education?: string;
  fieldOfActivity?: string;
  foreignLanguages?: string;
  hardSkills?: string;
  interests?: string;
  portfolio?: string;
  schedule?: string;
  softSkills?: string;
  technologyStack?: string;
  workPlace?: string;
  сareerObjective?: string;
}
export const SaveResume: FC<SaveResumeProps> = ({
  profileImage,
  dateOfBirth,
  education,
  additionalEducation,
  averageScore,
  fieldOfActivity,
  technologyStack,
  hardSkills,
  softSkills,
  сareerObjective,
  schedule,
  workPlace,
  foreignLanguages,
  interests,
  portfolio,
  achievements
}) => {
  const userId = localStorage.getItem('id');
  const addResume = async () => {
    const data = new FormData();
    data.append('profileImage', profileImage);
    data.append('dateOfBirth', String(dateOfBirth));
    data.append('education', String(education));
    data.append('additionalEducation', String(additionalEducation));
    data.append('averageScore', String(averageScore));
    data.append('fieldOfActivity', String(fieldOfActivity));
    data.append('technologyStack', String(technologyStack));
    data.append('hardSkills', String(hardSkills));
    data.append('softSkills', String(softSkills));
    data.append('сareerObjective', String(сareerObjective));
    data.append('schedule', String(schedule));
    data.append('workPlace', String(workPlace));
    data.append('foreignLanguages', String(foreignLanguages));
    data.append('interests', String(interests));
    data.append('portfolio', String(portfolio));
    data.append('achievements', String(achievements));

    const res = await api.put(`/profile/${userId}`, data);
  };
  return (
    <>
      <Button onClick={() => addResume()} variant="contained">
        Сохранить
      </Button>
    </>
  );
};
