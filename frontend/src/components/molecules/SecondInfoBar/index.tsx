import React from 'react';
import {
  Background,
  FirstInfoHolder,
  SecondInfoHolder,
  ThirdInfoHolder,
  FourInfoHolder,
  InfoHolder,
  Images
} from './styles';
import icon1 from '../../../assets/images/Group 5.png';
import icon2 from '../../../assets/images/Group 6.png';
import icon3 from '../../../assets/images/Group 7.png';
import icon4 from '../../../assets/images/Group 8.png';
export const SecondInfoBar = () => {
  return (
    <>
      <Background>
        <InfoHolder>
          <FirstInfoHolder>
            <Images src={icon1} />
            <p>
              Войдите или зарегистрируйтесь
              <br />
              как компания
            </p>
          </FirstInfoHolder>
          <SecondInfoHolder>
            <Images src={icon2} />
            <p>Расскажите о компании</p>
          </SecondInfoHolder>
          <ThirdInfoHolder>
            <Images src={icon3} />
            <p>Разместите вакансию</p>
          </ThirdInfoHolder>
          <FourInfoHolder>
            <Images src={icon4} />
            <p>Свяжитесь с исполнителем напрямую</p>
          </FourInfoHolder>
        </InfoHolder>
      </Background>
    </>
  );
};
