import { useAppDispatch, useAppSelector } from '../../../store/reducers/rootReducer';
import { SideBar } from '../../organisms/SideBar';
import { PageContainer } from '../../templates/PageContainer';
import { StyledCompaniesBlock, StyledHeaderCompanies } from './styles';
import { useEffect, useState } from 'react';
import { Company } from '../../molecules/Company';
import { axiosGetCompanies } from '../../../store/actions/userAction';

export const CompaniesPage = () => {
  const dispatch = useAppDispatch();
  const { companies } = useAppSelector(({ rootReducer }) => rootReducer.user);

  useEffect(() => {
    dispatch(axiosGetCompanies());
  }, [dispatch]);

  return (
    <>
      <SideBar />
      <PageContainer>
        <StyledHeaderCompanies>Компании</StyledHeaderCompanies>
        <StyledCompaniesBlock>
          {companies &&
            companies.length > 0 &&
            companies.map((item) => {
              return (
                <div key={item._id}>
                  <Company name={item.name!} profileImage={item.profile.profileImage} />
                </div>
              );
            })}
        </StyledCompaniesBlock>
      </PageContainer>
    </>
  );
};
