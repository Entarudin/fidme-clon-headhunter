/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import api from '../../../api/axios';
import jwt_decode from 'jwt-decode';
import { Navigate } from 'react-router-dom';
import {
  AuthButton,
  AuthInput,
  AuthPage,
  BaseBlock,
  StyledNavLink,
  StyleElementImg
} from './styles';
import { ReactComponent as logoBlack } from '../../../assets/images/logoBlack.svg';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface Itokens {
  accessToken: string;
  refreshToken: string;
}

interface IpaylodTokens {
  id: string;
}

export const Authorization = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Укажите электронную почту');
  const [passwordError, setPasswordError] = useState('Укажите пароль от личного кабинета');
  const [formValid, setFormValid] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        handleClick;
        break;
      case 'password':
        setPasswordDirty(true);
        handleClick;
        break;
    }
  };

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
    const re =
      // eslint-disable-next-line max-len
      /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректная электронная почта');
      handleClick;
      if (!e.target.value) {
        setEmailError('Укажите почту');
        handleClick();
      }
    } else {
      setEmailError('');
      handleClick;
    }
  };

  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError('Пароль должен быть не менее 8 символов');
      handleClick();
      if (!e.target.value) {
        setPasswordError('Укажите пароль от личного кабинета');
        handleClick();
      }
    } else {
      setPasswordError('');
    }
  };
  const handleSubmit = async () => {
    const user = {
      email: email,
      password: password
    };
    const req = await api.post<Itokens>('/auth/login', user);
    if (req.data) {
      localStorage.setItem('access', req.data.accessToken);
      localStorage.setItem('refresh', req.data.refreshToken);
      localStorage.setItem('isAuth', 'true');
    }
    try {
      const accessToken = localStorage.getItem('access');
      const paylodTokens: IpaylodTokens = jwt_decode(accessToken!);
      localStorage.setItem('id', paylodTokens.id);
      setId(paylodTokens.id);
    } catch (e) {
      console.log(e);
    }
  };

  const userId = localStorage.getItem('id');

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  return (
    <>
      <AuthPage>
        <BaseBlock>
          {localStorage.getItem('id') && <Navigate to={'/mainPage'} />}
          <StyleElementImg as={logoBlack} />
          {emailDirty && emailError && (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert severity="warning" sx={{ width: '100%' }}>
                {emailError}
              </Alert>
            </Snackbar>
          )}
          <AuthInput
            onBlur={(e) => blurHandler(e)}
            name="email"
            type={'text'}
            value={email}
            placeholder="Электронная почта"
            onChange={(e) => {
              setEmail(e.target.value);
              emailHandler(e);
            }}
          />
          {passwordDirty && passwordError && (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert severity="warning" sx={{ width: '100%' }}>
                {passwordError}
              </Alert>
            </Snackbar>
          )}
          <AuthInput
            onBlur={(e) => blurHandler(e)}
            name="password"
            type={'password'}
            value={password}
            placeholder="Пароль"
            onChange={(e) => {
              setPassword(e.target.value);
              passwordHandler(e);
            }}
          />
          <AuthButton disabled={!formValid} onClick={() => handleSubmit()}>
            Войти
          </AuthButton>
          <StyledNavLink to="/registration">Зарегистрироваться</StyledNavLink>
        </BaseBlock>
      </AuthPage>
    </>
  );
};
