import { useAppDispatch, useAppSelector } from '../../../store/reducers/rootReducer';
import { ProfileHeader } from '../../molecules/ProfileHeader';
import { SideBar } from '../../organisms/SideBar';
import { PageContainer } from '../../templates/PageContainer';
import {
  StyledBlock,
  StyledCompanyData,
  StyledCompanyInfo,
  StyledData,
  StyledHeader,
  StyledIcon,
  StyledKnob,
  StyledLinkButton,
  StyledP,
  StyledVacansyButton,
  StyledСompanyP
} from './styles';
import { useEffect } from 'react';
import { axiosGetProfileCompany, axiosGetprofileStudent } from '../../../store/actions/profileAction';
import { axiosGetUser } from '../../../store/actions/userAction';
import { NavLink } from 'react-router-dom';

export const MainPage = () => {
  const dispatch = useAppDispatch();

  const { fieldOfActivity, averageScore, technologyStack, schedule } = useAppSelector(
    ({ rootReducer }) => rootReducer.profile.profileStudent
  );
  const { aboutCompany, aboutProjects, learningOpportunity, abilityToWorkRemotely } =
    useAppSelector(({ rootReducer }) => rootReducer.profile.profileCompany);
  const field = useAppSelector(
    ({ rootReducer }) => rootReducer.profile.profileCompany.fieldOfActivity
  );
  const { role } = useAppSelector(({ rootReducer }) => rootReducer.user);
  const userId = localStorage.getItem('id');

  useEffect(() => {
    dispatch(axiosGetProfileCompany(userId));
    dispatch(axiosGetprofileStudent(userId));
    dispatch(axiosGetUser(userId));
  }, [dispatch, userId]);

  return (
    <>
      <SideBar />
      {role === 'Student' && (
        <PageContainer>
          <StyledHeader>
            <NavLink to={'/mainPage/editResume'}>
              <StyledLinkButton>
                <StyledIcon />
              </StyledLinkButton>
            </NavLink>
            <ProfileHeader userId={userId!} />
          </StyledHeader>
          <StyledData>
            <StyledBlock>
              <StyledP>{fieldOfActivity}</StyledP>
            </StyledBlock>
            <StyledBlock>
              <StyledP> {technologyStack}</StyledP>
            </StyledBlock>
            <StyledBlock>
              <StyledP>{role}</StyledP>
            </StyledBlock>
            <StyledBlock>
              <StyledP>{schedule}</StyledP>
            </StyledBlock>
            <StyledKnob value={Number(averageScore)} readOnly />
          </StyledData>
        </PageContainer>
      )}
      {role === 'Company' && (
        <PageContainer>
          <StyledHeader>
            <NavLink to={'/mainPage/editCompany'}>
              <StyledLinkButton>
                <StyledIcon />
              </StyledLinkButton>
            </NavLink>
            <ProfileHeader userId={userId!} />
          </StyledHeader>
          <StyledCompanyData>
            <NavLink to={'/mainPage/editVacancy'}>
              <StyledVacansyButton>
                <StyledP>Добавить вакансию</StyledP>
              </StyledVacansyButton>
            </NavLink>
            <StyledCompanyInfo>
              <StyledСompanyP>Сфера деятельности: {field} </StyledСompanyP>
              <StyledСompanyP>Возможность обучения: {learningOpportunity}</StyledСompanyP>

              <StyledСompanyP>
                Возможность работать удаленно:
                {abilityToWorkRemotely}
              </StyledСompanyP>
              <StyledСompanyP>О компании</StyledСompanyP>
              <StyledСompanyP>{aboutCompany}</StyledСompanyP>
              <StyledСompanyP>О проектах</StyledСompanyP>
              <StyledСompanyP>{aboutProjects}</StyledСompanyP>
            </StyledCompanyInfo>
          </StyledCompanyData>
        </PageContainer>
      )}
    </>
  );
};
