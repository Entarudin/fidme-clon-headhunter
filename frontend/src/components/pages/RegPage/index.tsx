import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../api/axios';
import {RegInput, RegPage, RegButton, BaseBlock, StyleElementImg, RegSwitchButton, RegSwitchButtonHolder, RegActiveSwitchButton} from './styles';
import { ReactComponent as logoBlack } from '../../../assets/images/logoBlack.svg';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useAppDispatch, useAppSelector } from '../../../store/reducers/rootReducer';
import { setStatusRegistration } from '../../../store/actions/visibleFlagsAction';

export const Registration = () => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [fullNameDirty, setFullNameDirty] = useState(false);
  const [companyNameDirty, setCompanyNameDirty] = useState(false);
  const [emailError, setEmailError] = useState('Укажите электронную почту');
  const [passwordError, setPasswordError] = useState('Укажите пароль для личного кабинета');
  const [fullNameError, setFullNameError] = useState('Укажите имя пользователя');
  const [companyNameError, setCompanyNameError] = useState('Укажите название компании');
  const [formValid, setFormValid] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [reqStatus, setReqStatus] = useState('');

  const dispatch = useAppDispatch();
  const { registrationVisibleFlag } = useAppSelector(({ rootReducer }) => rootReducer.flags);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const user = {
      name: registrationVisibleFlag ? fullName : companyName,
      email: email,
      password: password,
      role: registrationVisibleFlag ? 'Student' : 'Company'
    };
    const req = await api.post('/auth/registration', user);

    if (req.status == 201) {
      setReqStatus('Регистрация прошла успешно!');
      setTimeout(() => navigate('/'), 3000);
    }
  };
  
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
      case 'fullName':
        setFullNameDirty(true);
        handleClick;
        break;
      case 'companyName':
        setCompanyNameDirty(true);
        handleClick;
        break;
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

  const fullNameHandler = (e: any) => {
    setFullName(e.target.value);
    if (e.target.value.length < 3) {
      setFullNameError('Имя пользователя должно быть не менее 3 символов');
      handleClick();
      if (!e.target.value) {
        setFullNameError('Укажите имя пользователя');
        handleClick();
      }
    } else {
      setFullNameError('');
    }
  };
  const companyNameHandler = (e: any) => {
    setCompanyName(e.target.value);
    if (e.target.value.length < 1) {
      setCompanyNameError('Название компании должно быть не менее 1 символов');
      handleClick();
      if (!e.target.value) {
        setCompanyNameError('Укажите название компании');
        handleClick();
      }
    } else {
      setCompanyNameError('');
    }
  };

  useEffect(() => {
    if (registrationVisibleFlag == true) {
      if (emailError || passwordError || fullNameError) {
        setFormValid(false);
      } else {
        setFormValid(true);
      }
    } else {
      if (emailError || passwordError || companyNameError) {
        setFormValid(false);
      } else {
        setFormValid(true);
      }
    }
  }, [emailError, passwordError, fullNameError, companyNameError]);

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

  return (
    <>
      <RegPage>
        <BaseBlock>
          <StyleElementImg as={logoBlack} />
          {emailDirty && emailError && (
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
              <Alert severity="warning" sx={{ width: '100%' }}>
                {emailError}
              </Alert>
            </Snackbar>
          )}
          {reqStatus && (
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
              <Alert severity="success" sx={{ width: '100%' }}>
                {reqStatus}
              </Alert>
            </Snackbar>
          )}
          <RegSwitchButtonHolder>
            {registrationVisibleFlag ?( <>
              <RegActiveSwitchButton disabled onClick={() => {
                dispatch(setStatusRegistration(true));
              }}>Студент</RegActiveSwitchButton>
              <RegSwitchButton onClick={() => {
                dispatch(setStatusRegistration(false));
              }}>Компания</RegSwitchButton>
            </>
            ) : (<>
              <RegSwitchButton onClick={() => {
                dispatch(setStatusRegistration(true));
              }}>Студент</RegSwitchButton>
              <RegActiveSwitchButton disabled onClick={() => {
                dispatch(setStatusRegistration(false));
              }}>Компания</RegActiveSwitchButton>
            </>)}
          </RegSwitchButtonHolder>
          {registrationVisibleFlag ? (<>
            <RegInput
              onBlur={(e) => blurHandler(e)}
              name="fullName"
              type={'text'}
              value={fullName}
              placeholder="ФИО"
              onChange={(e) => {
                setFullName(e.target.value);
                fullNameHandler(e);
              }}
            />
            {fullNameDirty && fullNameError && (
              <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert severity="warning" sx={{ width: '100%' }}>
                  {fullNameError}
                </Alert>
              </Snackbar>
            )}
            <RegInput
              onBlur={(e) => blurHandler(e)}
              name="email"
              type={'text'}
              value={email}
              placeholder="Электронная почта"
              onChange={(e) => {
                setEmail(e.target.value);
                emailHandler(e);
              }}/>
            {passwordDirty && passwordError && (
              <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert severity="warning" sx={{ width: '100%' }}>
                  {passwordError}
                </Alert>
              </Snackbar>
            )}
            <RegInput
              onBlur={(e) => blurHandler(e)}
              name="password"
              type={'password'}
              value={password}
              placeholder="Пароль"
              onChange={(e) => {
                setPassword(e.target.value);
                passwordHandler(e);
              }} />
            <RegButton disabled={!formValid} onClick={() => handleSubmit()}>Зарегистрироваться</RegButton>
          </>) : (
            <>
              <RegInput
                onBlur={(e) => blurHandler(e)}
                name="companyName"
                type={'text'}
                value={companyName}
                placeholder="Название компании"
                onChange={(e) => {
                  setCompanyName(e.target.value);
                  companyNameHandler(e);
                }}
              />
              {companyNameDirty && companyNameError && (
                <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                  <Alert severity="warning" sx={{ width: '100%' }}>
                    {companyNameError}
                  </Alert>
                </Snackbar>
              )}
              <RegInput
                onBlur={(e) => blurHandler(e)}
                name="email"
                type={'text'}
                value={email}
                placeholder="Электронная почта"
                onChange={(e) => {
                  setEmail(e.target.value);
                  emailHandler(e);
                }}/>
              {passwordDirty && passwordError && (
                <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                  <Alert severity="warning" sx={{ width: '100%' }}>
                    {passwordError}
                  </Alert>
                </Snackbar>
              )}
              <RegInput
                onBlur={(e) => blurHandler(e)}
                name="password"
                type={'password'}
                value={password}
                placeholder="Пароль"
                onChange={(e) => {
                  setPassword(e.target.value);
                  passwordHandler(e);
                }} />
              <RegButton disabled={!formValid} onClick={() => handleSubmit()}>Зарегистрироваться</RegButton>
            </>)}
        </BaseBlock>
      </RegPage>
    </>
  );
};
