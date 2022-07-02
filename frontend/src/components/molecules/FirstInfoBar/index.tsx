import React from 'react';
import {
  Background,
  FirstTextStyle,
  SecondTextStyle,
  ThirdTextStyle,
  BackgroundInfoFirstPart
} from './styles';

export const FirstInfoBar = () => {
  return (
    <>
      <BackgroundInfoFirstPart>
        <Background>
          <FirstTextStyle>
            Войдите или зарегистрируйтесь
            <br /> как студент
          </FirstTextStyle>
          <SecondTextStyle>Заполните резюме</SecondTextStyle>
          <ThirdTextStyle>Откликнитесь на вакансию</ThirdTextStyle>
        </Background>
      </BackgroundInfoFirstPart>
    </>
  );
};
