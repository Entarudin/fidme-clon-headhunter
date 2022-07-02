import React from 'react';
import {
  PlusBarHolder,
  PlusBarContainer,
  FirstPlusBarItem,
  SecondPlusBarItem,
  ThirdPlusBarItem,
  PlusBarItemText,
  Image
} from '../../molecules/PlusInfoBar/styles';
import icon1 from '../../../assets/images/icon1.png';
import icon2 from '../../../assets/images/icon2.png';
import icon3 from '../../../assets/images/icon3.png';

export const PlusInfoBar = () => {
  return (
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
  );
};
