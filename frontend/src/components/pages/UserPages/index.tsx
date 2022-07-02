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
  StyledKnob,
  StyledP,
  StyledСompanyP
} from './styles';
import { FC, useEffect } from 'react';
import { axiosGetprofileStudent } from '../../../store/actions/profileAction';
import { axiosGetUser } from '../../../store/actions/userAction';
import { NavLink, useParams } from 'react-router-dom';

export const UserPages: FC = () => {
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

  const user = useAppSelector(({ rootReducer }) => rootReducer.user);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    dispatch(axiosGetprofileStudent(id!));
    dispatch(axiosGetUser(id!));
  }, [dispatch]);

  return (
    <>
      <SideBar />
      {role === 'Student' && (
        <PageContainer>
          <StyledHeader>
            <div className="position_header">
              <ProfileHeader userId={id!} />
            </div>
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
            <ProfileHeader userId={id!} />
          </StyledHeader>
          <StyledCompanyData>
            <StyledCompanyInfo>
              <StyledСompanyP>Сфера деятельности: {field}</StyledСompanyP>
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
