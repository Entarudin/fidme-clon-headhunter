import React from 'react';
import {
  FindMeBar,
  FindMeButton,
  FindMeHolder,
  FindMeText,
  Footer,
  Logo,
  NavBar,
  PlusBarText,
  Wrapper
} from '../../molecules/MainInfoBar/styles';
import { ReactComponent as logoBlack } from '../../../assets/images/logoBlack.svg';

export const MainInfoBar = () => {
  return (
    <Wrapper>
      <Footer>
        <NavBar>
          <li> Главная</li>
          <li> О нас</li>
          <li> Студентам</li>
          <li> IT-компаниям</li>
        </NavBar>
        <Logo as={logoBlack} />
      </Footer>
      <FindMeHolder>
        <FindMeBar>FindMe</FindMeBar>
        <FindMeText>
          Веб-сервис, который поможет IT-компаниям
          <br />
          мгновенно найти среди студентов будущих
          <br />
          стажеров и сотрудников.
        </FindMeText>
        <FindMeButton>Начать поиск</FindMeButton>
      </FindMeHolder>
      <PlusBarText>Почему стоит выбрать наш продукт</PlusBarText>
    </Wrapper>
  );
};
