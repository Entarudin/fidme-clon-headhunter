import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  useAutocomplete
} from '@mui/material';
import { ChangeEvent, useRef, useState, useEffect } from 'react';
import { SideBar } from '../../organisms/SideBar';
import { PageContainer } from '../../templates/PageContainer';
import {
  StyledD,
  StyledDiv,
  StyledLabel,
  StyledDivButton,
  StyledInput,
  StyledResumeForm,
  StyledTitle,
  StyledNavLink,
  StyledTextField,
  StyledDi
} from './styles';
import { Message } from 'primereact/message';
import { useAppDispatch, useAppSelector } from '../../../store/reducers/rootReducer';
import {
  axiosGetProfileCompany,
  axiosGetprofileStudent
} from '../../../store/actions/profileAction';
import { axiosGetUser } from '../../../store/actions/userAction';
import { RadioButton } from 'primereact/radiobutton';
import { SaveCompany } from '../../atoms/SaveCompany';

export const EditCompany = () => {
  const [namePicture, setNamePicture] = useState('');
  const [picture, setPicture] = useState<File | null>(null);
  const [fieldOfActivity, setFieldOfActivity] = useState<string>();
  const [aboutCompany, setAboutCompany] = useState<string>();
  const [aboutProjects, setAboutProjects] = useState<string>();
  const [fieldOfActivityDirty, setFieldOfActivityDirty] = useState(false);
  const [aboutCompanyDirty, setAboutCompanyDirty] = useState(false);

  const [fieldOfActivityEmpty, setFieldOfActivityEmpty] = useState('');
  const [aboutCompanyEmpty, setAboutCompanyEmpty] = useState('');

  const [study, setStudy] = useState('Да');
  const [work, setWork] = useState('Да');
  const dispatch = useAppDispatch();

  const { profileCompany } = useAppSelector(({ rootReducer }) => rootReducer.profile);
  const userId = localStorage.getItem('id');

  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && e.target.files[0].name) {
      setPicture(e.target.files[0]);
      setNamePicture(e.target.files[0].name);
    }
  };

  const emptyFieldOfActivityHandler = (e: any) => {
    setFieldOfActivity(e.target.value);
    if (e.target.value) {
      setFieldOfActivityEmpty('Заполните поле');
    } else {
      setFieldOfActivityEmpty('');
    }
  };

  const emptyAboutCompanyHandler = (e: any) => {
    setAboutCompany(e.target.value);
    if (e.target.value) {
      setAboutCompanyEmpty('Заполните поле');
    } else {
      setAboutCompanyEmpty('');
    }
  };

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case 'fieldOfActivity':
        setFieldOfActivityDirty(true);
        break;
      case 'aboutCompany':
        setAboutCompanyDirty(true);
        break;
    }
  };
  useEffect(() => {
    dispatch(axiosGetProfileCompany(userId));
    dispatch(axiosGetUser(userId));
    if (profileCompany.fieldOfActivity && typeof profileCompany.fieldOfActivity !== 'undefined') {
      setFieldOfActivity(profileCompany.fieldOfActivity);
    }
    if (profileCompany.aboutCompany && typeof profileCompany.aboutCompany !== 'undefined') {
      setAboutCompany(profileCompany.aboutCompany);
    }
    if (profileCompany.aboutProjects && typeof profileCompany.aboutProjects !== 'undefined') {
      setAboutProjects(profileCompany.aboutProjects);
    }
    if (
      profileCompany.learningOpportunity &&
      typeof profileCompany.learningOpportunity !== 'undefined'
    ) {
      setStudy(profileCompany.learningOpportunity);
    }
    if (
      profileCompany.abilityToWorkRemotely &&
      typeof profileCompany.abilityToWorkRemotely !== 'undefined'
    ) {
      setWork(profileCompany.abilityToWorkRemotely);
    }
  }, []);
  return (
    <>
      <SideBar />
      <PageContainer>
        <StyledResumeForm>
          <StyledTitle>Заполните профиль</StyledTitle>
          <StyledInput
            type="file"
            id="file"
            accept="image/*"
            onChange={onChangeFile}
            ref={fileRef}
            name="picture"
          />
          <StyledLabel htmlFor="file">
            {fileRef.current?.value ? namePicture : 'Загрузить фото'}
          </StyledLabel>
          <StyledDi>
            <StyledD>
              <StyledTextField
                label="Сфера деятельности"
                value={fieldOfActivity}
                name="fieldOfActivity"
                onBlur={(e) => blurHandler(e)}
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFieldOfActivity(e.target.value);
                  emptyFieldOfActivityHandler(e);
                }}
              />
              {fieldOfActivityDirty && fieldOfActivityEmpty.length === 0 && (
                <Message severity="error" text="Заполните поле" />
              )}
            </StyledD>
          </StyledDi>
          <StyledDi>
            <StyledD>
              <StyledTextField
                label="О компании"
                name="aboutCompany"
                value={aboutCompany}
                required
                onBlur={(e) => blurHandler(e)}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setAboutCompany(e.target.value);
                  emptyAboutCompanyHandler(e);
                }}
              />
              {aboutCompanyDirty && aboutCompanyEmpty.length === 0 && (
                <Message severity="error" text="Заполните поле" />
              )}
            </StyledD>
          </StyledDi>
          <p>Возможность обучения</p>
          <div>
            <RadioButton value="Да" onChange={(e) => setStudy(e.value)} checked={study === 'Да'} />
            <label>Да</label>
          </div>
          <div>
            <RadioButton
              value="Нет"
              onChange={(e) => setStudy(e.value)}
              checked={study === 'Нет'}
            />
            <label>Нет</label>
          </div>
          <p>Возможность работать удаленно</p>
          <div>
            <RadioButton value="Да" onChange={(e) => setWork(e.value)} checked={work === 'Да'} />
            <label>Да</label>
          </div>
          <div>
            <RadioButton value="Нет" onChange={(e) => setWork(e.value)} checked={work === 'Нет'} />
            <label>Нет</label>
          </div>
          <StyledDi>
            <StyledTextField
              label="Проекты"
              value={aboutProjects}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setAboutProjects(e.target.value)}
            />
          </StyledDi>
        </StyledResumeForm>
        <StyledDivButton>
          <SaveCompany
            profileImage={picture!}
            fieldOfActivity={fieldOfActivity}
            aboutCompany={aboutCompany}
            aboutProjects={aboutProjects}
            learningOpportunity={study}
            abilityToWorkRemotely={work}
          />
          <StyledNavLink to="/mainPage">
            <Button variant="contained">Отменить</Button>
          </StyledNavLink>
        </StyledDivButton>
      </PageContainer>
    </>
  );
};
