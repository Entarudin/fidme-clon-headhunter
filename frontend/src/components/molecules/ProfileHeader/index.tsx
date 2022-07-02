import { FC, useEffect } from 'react';
import { axiosGetProfileCompany, axiosGetprofileStudent } from '../../../store/actions/profileAction';
import { axiosGetUser } from '../../../store/actions/userAction';
import { useAppDispatch, useAppSelector } from '../../../store/reducers/rootReducer';
import {
  StyledAvatar,
  StyledCircle,
  StyledHr,
  StyledP,
  StyledProf,
  StyledProfileHeader
} from './styles';
import ghost from '../../../assets/images/ghost.svg';

interface ProfileHeaderProps {
  userId?: string;
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({ userId }) => {
  const dispatch = useAppDispatch();
  dispatch(axiosGetprofileStudent(userId!));
  const { name, role } = useAppSelector(({ rootReducer }) => rootReducer.user);
  const { careerObjective, profileImage } = useAppSelector(
    ({ rootReducer }) => rootReducer.profile.profileStudent
  );
  useEffect(() => {
    dispatch(axiosGetprofileStudent(userId!));
    dispatch(axiosGetUser(userId!));
  }, []);
  return (
    <StyledProfileHeader>
      <StyledCircle>
        <StyledAvatar
          shape="circle"
          size="xlarge"
          image={
            profileImage && typeof profileImage !== undefined
              ? `${process.env.REACT_APP_BASE_API_URL}/` + `${profileImage}`
              : ghost
          }
        />
      </StyledCircle>
      <div>
        <StyledP>{name}</StyledP>
        <StyledHr />
        <StyledProf>{role === 'Student' ? careerObjective : role}</StyledProf>
      </div>
    </StyledProfileHeader>
  );
};

export const ProfileHeaderCompany: FC<ProfileHeaderProps> = ({ userId }) => {
  const dispatch = useAppDispatch();
  dispatch(axiosGetprofileStudent(userId!));
  const { name, role } = useAppSelector(({ rootReducer }) => rootReducer.user);
  const { profileImage } = useAppSelector(
    ({ rootReducer }) => rootReducer.profile.profileCompany
  );
  useEffect(() => {
    dispatch(axiosGetProfileCompany(userId!));
    dispatch(axiosGetUser(userId!));
  }, [dispatch]);
  return (
    <StyledProfileHeader>
      <StyledCircle>
        <StyledAvatar
          shape="circle"
          size="xlarge"
          image={
            profileImage && typeof profileImage !== undefined
              ? `${process.env.REACT_APP_BASE_API_URL}/` + `${profileImage}`
              : ghost
          }
        />
      </StyledCircle>
      <div>
        <StyledP>{name}</StyledP>
        <StyledHr />
        <StyledProf>{role}</StyledProf>
      </div>
    </StyledProfileHeader>
  );
};
