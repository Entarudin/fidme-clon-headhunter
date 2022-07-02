import React from 'react';
import {
  MainPageStyle,
  NavBar,
  Footer,
  Logo,
  FindMeBar,
  FindMeHolder,
  FindMeText,
  FindMeButton,
  PlusBarHolder,
  PlusBarText,
  PlusBarContainer,
  FirstPlusBarItem,
  SecondPlusBarItem,
  ThirdPlusBarItem,
  PlusBarItemText,
  Wrapper,
  BackgroundInfoFirstPart,
  Image
} from './styles';
import { ReactComponent as logoBlack } from '../../../assets/images/logoBlack.svg';
import '../../../index.css';
import icon1 from '../../../assets/images/icon1.png';
import icon2 from '../../../assets/images/icon2.png';
import icon3 from '../../../assets/images/icon3.png';
import { FirstInfoBar } from '../../molecules/FirstInfoBar';
import { SecondInfoBar } from '../../molecules/SecondInfoBar';

export const InfoPage = () => {
  return (
    <>
      <MainPageStyle>
        <Wrapper>
          <Footer>
            <NavBar>
              <li> Главная </li>
              <li> О нас </li>
              <li> Студентам </li>
              <li> IT-компаниям </li>
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
        <PlusBarHolder>
          <PlusBarContainer>
            <FirstPlusBarItem>
              <Image src={icon1} />
              <PlusBarItemText>Большое количество вакансий и работодателей</PlusBarItemText>
            </FirstPlusBarItem>
            <SecondPlusBarItem>
              <img src={icon2} />
              <PlusBarItemText>Взаимодействие напрямую с кандидатами</PlusBarItemText>
            </SecondPlusBarItem>
            <ThirdPlusBarItem>
              <img src={icon3} />
              <PlusBarItemText>Только проверенные компании</PlusBarItemText>
            </ThirdPlusBarItem>
          </PlusBarContainer>
        </PlusBarHolder>
        <BackgroundInfoFirstPart>
          <FirstInfoBar />
        </BackgroundInfoFirstPart>
        <SecondInfoBar />
      </MainPageStyle>
    </>
  );
};
