import { useAppDispatch, useAppSelector } from '../../../store/reducers/rootReducer';
import { SideBar } from '../../organisms/SideBar';
import { PageContainer } from '../../templates/PageContainer';
import {
  StyledP,
  StyledVacansyButton,
  StyledVacansiesBlock,
  ButtonConteiner,
  StyledHeaderVacancies
} from './styles';
import { Vacancy } from '../../molecules/Vacancy';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { axiosGetVacancies } from '../../../store/actions/vacanciesAction';

export const VacanciesPage = () => {
  const dispatch = useAppDispatch();

  const { role } = useAppSelector(({ rootReducer }) => rootReducer.user);
  const { vacansiesList } = useAppSelector(({ rootReducer }) => rootReducer.vacancies);

  useEffect(() => {
    dispatch(axiosGetVacancies());
  }, []);

  return (
    <>
      <SideBar />
      <PageContainer>
        <StyledHeaderVacancies>Вакансии</StyledHeaderVacancies>
        {role === 'Company' && (
          <ButtonConteiner>
            <NavLink to="/mainPage/editVacancy">
              <StyledVacansyButton>
                <StyledP>Добавить вакансию</StyledP>
              </StyledVacansyButton>
            </NavLink>
          </ButtonConteiner>
        )}

        <StyledVacansiesBlock>
          {vacansiesList &&
            vacansiesList.length > 0 &&
            vacansiesList.map((item) => {
              return (
                <div key={item._id!}>
                  <Vacancy
                    skills={item.skills!}
                    fieldActivity={item.fieldOfActivity!}
                    vacancyName={item.vacancyName!}
                    companyId={item.companyId!}
                    id={item._id!}
                  />
                </div>
              );
            })}
        </StyledVacansiesBlock>
      </PageContainer>
    </>
  );
};
