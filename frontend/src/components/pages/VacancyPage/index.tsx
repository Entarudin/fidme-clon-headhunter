import { useAppDispatch, useAppSelector } from '../../../store/reducers/rootReducer';
import { SideBar } from '../../organisms/SideBar';
import { PageContainer } from '../../templates/PageContainer';
import {StyledVacancyInfo, StyledP, StyledData, StyledPColored} from './styles';
import { useEffect } from 'react';
import { axiosGetVacancyById } from '../../../store/actions/vacanciesAction';
import { useParams } from 'react-router-dom';
import { ProfileHeaderCompany } from '../../molecules/ProfileHeader';
import { StyledHeader } from '../UserPages/styles';
export const VacancyPage = () => {
  const dispatch = useAppDispatch();
  const {
    fieldOfActivity,
    vacancyName,
    skills,
    requirements,
    workFormat,
    salary,
    offer,
    companyId
  } = useAppSelector(({ rootReducer }) => rootReducer.vacancies.currentVacancy);
  const { id } = useParams();

  useEffect(() => {
    dispatch(axiosGetVacancyById(id));
  }, []);
  return (
    <>
      <SideBar />
      <PageContainer>
        <StyledHeader>
          <ProfileHeaderCompany userId={companyId!} />
        </StyledHeader>
        <StyledData>
          <StyledVacancyInfo>
            <StyledPColored>Название вакансии:</StyledPColored>
            <StyledP> {vacancyName} </StyledP>
            <StyledPColored>Требования:</StyledPColored>
            <StyledP> {requirements} </StyledP>
            <StyledPColored>Навыки:</StyledPColored>
            <StyledP>{skills} </StyledP>
            <StyledPColored>Формат работы:</StyledPColored>
            <StyledP> {workFormat} </StyledP>
            <StyledPColored>Заработная плата:</StyledPColored>
            <StyledP> {salary} </StyledP>
            <StyledPColored>Преимущества:</StyledPColored>
            <StyledP> {offer} </StyledP>
            <StyledPColored>Сфера деятельности:</StyledPColored>
            <StyledP> {fieldOfActivity} </StyledP>
          </StyledVacancyInfo>
        </StyledData>
      </PageContainer>
    </>
  );
};
