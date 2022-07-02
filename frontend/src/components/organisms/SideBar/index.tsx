import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  StyledHeader,
  StyledButton,
  StyledToolbar,
  StyledSideBar,
  SideBarBlock,
  SideBarContainer,
  StyledNavLink
} from './styles';
import { useEffect, useState } from 'react';
import { ReactComponent as logoSideBar } from '../../../assets/images/SideBar.svg';
import { StyledElementImg } from './styles';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from '../../../hooks/useWindowSize';
import api from '../../../api/axios';

export const SideBar = () => {
  const [visibleLeft, setVisibleLeft] = useState(true);
  const [width] = useWindowSize();
  const navigate = useNavigate();
  useEffect(() => {
    if (width < 1024) {
      setVisibleLeft(false);
    } else {
      setVisibleLeft(true);
    }
  }, [width]);

  const remoteTokens = async () => {
    await api.post('/auth/logout', {
      userId: localStorage.getItem('id'),
      refresh: localStorage.getItem('refresh'),
      access: localStorage.getItem('access')
    });
  };

  const logout = async () => {
    await remoteTokens();
    localStorage.removeItem('refresh');
    localStorage.removeItem('access');
    localStorage.removeItem('isAuth');
    localStorage.removeItem('id');
    navigate('/');
  };
  return (
    <div>
      <StyledHeader>
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setVisibleLeft(!visibleLeft)}
          >
            <MenuIcon />
          </IconButton>
        </StyledToolbar>
      </StyledHeader>
      <StyledSideBar
        id="sidebar"
        baseZIndex={-1}
        visible={visibleLeft}
        showCloseIcon={false}
        onHide={() => setVisibleLeft(true)}
      >
        <StyledElementImg as={logoSideBar} />
        <SideBarContainer>
          <StyledNavLink to="/mainPage">
            <SideBarBlock>Главная</SideBarBlock>
          </StyledNavLink>
          <StyledNavLink to="/messages">
            <SideBarBlock>Сообщения</SideBarBlock>
          </StyledNavLink>
          <StyledNavLink to="/vacancies">
            <SideBarBlock>Вакансии</SideBarBlock>
          </StyledNavLink>
          <StyledNavLink to="/companies">
            <SideBarBlock>Компании</SideBarBlock>
          </StyledNavLink>
          <StyledButton onClick={logout}>Выход</StyledButton>
        </SideBarContainer>
      </StyledSideBar>
    </div>
  );
};
