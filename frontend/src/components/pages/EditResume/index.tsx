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
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
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
import { SaveResume } from '../../atoms/SaveResume';
import { Message } from 'primereact/message';
import { useAppDispatch, useAppSelector } from '../../../store/reducers/rootReducer';
import { axiosGetprofileStudent } from '../../../store/actions/profileAction';
import { axiosGetUser } from '../../../store/actions/userAction';

export const EditResume = () => {
  const [namePicture, setNamePicture] = useState('');
  const [interests, setInterests] = useState<string>();
  const [portfolio, setPortfolio] = useState<string>();
  const [achievements, setAchievements] = useState<string>();
  const [valueData, setValueData] = useState<Date | null>(null);

  const [workPlace, setWorkPlace] = useState('');
  const [workTime, setWorkTime] = useState('');
  const [workName, setWorkName] = useState('');
  const [averageScore, setAverageScore] = useState<string>('');
  const [picture, setPicture] = useState<File | null>(null);
  const [education, setEducation] = useState<string>('');
  const [additionalEducation, setAdditionalEducation] = useState<string>();
  const [fieldOfActivity, setFieldOfActivity] = useState<string>();
  const [technologyStack, setTechnologyStack] = useState<string>();
  const [hardSkills, setHardSkills] = useState<string>();
  const [softSkills, setSoftSkills] = useState<string>();
  const [foreignLanguages, setForeignLanguages] = useState<string>();

  const [workPlaceDirty, setWorkPlaceDirty] = useState(false);
  const [workTimeDirty, setWorkTimeDirty] = useState(false);
  const [workNameDirty, setWorkNameDirty] = useState(false);
  const [averageScoreDirty, setAverageScoreDirty] = useState(false);
  const [educationDirty, setEducationDirty] = useState(false);
  const [fieldOfActivityDirty, setFieldOfActivityDirty] = useState(false);
  const [technologyStackDirty, setTechnologyStackDirty] = useState(false);
  const [hardSkillsDirty, setHardSkillsDirty] = useState(false);
  const [softSkillsDirty, setSoftSkillsDirty] = useState(false);
  const [foreignLanguagesDirty, setForeignLanguagesDirty] = useState(false);

  const [educationEmpty, setEducationEmpty] = useState('');
  const [averageScoreEmpty, setAverageScoreEmpty] = useState('');
  const [fieldOfActivityEmpty, setFieldOfActivityEmpty] = useState('');
  const [technologyStackEmpty, setTechnologyStackEmpty] = useState('');
  const [hardSkillsEmpty, setHardSkillsEmpty] = useState('');
  const [softSkillsEmpty, setSoftSkillsEmpty] = useState('');
  const [foreignLanguagesEmpty, setForeignLanguagesEmpty] = useState('');

  const dispatch = useAppDispatch();

  const { profileStudent } = useAppSelector(({ rootReducer }) => rootReducer.profile);
  const { role } = useAppSelector(({ rootReducer }) => rootReducer.user);
  const userId = localStorage.getItem('id');

  const handleChange = (event: SelectChangeEvent) => {
    setWorkPlace(event.target.value as string);
  };
  const handleChangeTime = (event: SelectChangeEvent) => {
    setWorkTime(event.target.value as string);
  };
  const handleChangeName = (event: SelectChangeEvent) => {
    setWorkName(event.target.value as string);
  };
  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && e.target.files[0].name) {
      setPicture(e.target.files[0]);
      setNamePicture(e.target.files[0].name);
    }
  };
  const emptyEducationHandler = (e: any) => {
    setEducation(e.target.value);
    if (e.target.value) {
      setEducationEmpty('Заполните поле');
    } else {
      setEducationEmpty('');
    }
  };

  const emptyAverageScoreHandler = (e: any) => {
    setAverageScore(e.target.value);
    if (e.target.value) {
      setAverageScoreEmpty('Заполните поле');
    } else {
      setAverageScoreEmpty('');
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

  const emptyTechnologyStackHandler = (e: any) => {
    setTechnologyStack(e.target.value);
    if (e.target.value) {
      setTechnologyStackEmpty('Заполните поле');
    } else {
      setTechnologyStackEmpty('');
    }
  };

  const emptyHardSkillsHandler = (e: any) => {
    setHardSkills(e.target.value);
    if (e.target.value) {
      setHardSkillsEmpty('Заполните поле');
    } else {
      setHardSkillsEmpty('');
    }
  };

  const emptySoftSkillsHandler = (e: any) => {
    setSoftSkills(e.target.value);
    if (e.target.value) {
      setSoftSkillsEmpty('Заполните поле');
    } else {
      setSoftSkillsEmpty('');
    }
  };

  const emptyForeignLanguagesHandler = (e: any) => {
    setForeignLanguages(e.target.value);
    if (e.target.value) {
      setForeignLanguagesEmpty('Заполните поле');
    } else {
      setForeignLanguagesEmpty('');
    }
  };

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case 'education':
        setEducationDirty(true);
        break;
      case 'averageScore':
        setAverageScoreDirty(true);
        break;
      case 'fieldOfActivity':
        setFieldOfActivityDirty(true);
        break;
      case 'technologyStack':
        setTechnologyStackDirty(true);
        break;
      case 'hardSkills':
        setHardSkillsDirty(true);
        break;
      case 'softSkills':
        setSoftSkillsDirty(true);
        break;
      case 'workName':
        setWorkNameDirty(true);
        break;
      case 'workTime':
        setWorkTimeDirty(true);
        break;
      case 'workPlace':
        setWorkPlaceDirty(true);
        break;
      case 'foreignLanguages':
        setForeignLanguagesDirty(true);
        break;
    }
  };
  useEffect(() => {
    dispatch(axiosGetprofileStudent(userId));
    dispatch(axiosGetUser(userId));
    if (profileStudent.dateOfBirth && typeof profileStudent.dateOfBirth !== 'undefined') {
      setValueData(profileStudent.dateOfBirth);
    }
    if (profileStudent.education && typeof profileStudent.education !== 'undefined') {
      setEducation(profileStudent.education);
    }
    if (
      profileStudent.additionalEducation &&
      typeof profileStudent.additionalEducation !== 'undefined'
    ) {
      setAdditionalEducation(profileStudent.additionalEducation);
    }
    if (profileStudent.averageScore && typeof profileStudent.averageScore !== 'undefined') {
      setAverageScore(profileStudent.averageScore);
    }
    if (profileStudent.fieldOfActivity && typeof profileStudent.fieldOfActivity !== 'undefined') {
      setFieldOfActivity(profileStudent.fieldOfActivity);
    }
    if (profileStudent.technologyStack && typeof profileStudent.technologyStack !== 'undefined') {
      setTechnologyStack(profileStudent.technologyStack);
    }
    if (profileStudent.hardSkills && typeof profileStudent.hardSkills !== 'undefined') {
      setHardSkills(profileStudent.hardSkills);
    }
    if (profileStudent.softSkills && typeof profileStudent.softSkills !== 'undefined') {
      setSoftSkills(profileStudent.softSkills);
    }
    if (profileStudent.workPlace && typeof profileStudent.workPlace !== 'undefined') {
      setWorkPlace(profileStudent.workPlace);
    }
    if (profileStudent.schedule && typeof profileStudent.schedule !== 'undefined') {
      setWorkTime(profileStudent.schedule);
    }
    if (profileStudent.careerObjective && typeof profileStudent.careerObjective !== 'undefined') {
      setWorkName(profileStudent.careerObjective);
    }
    if (profileStudent.foreignLanguages && typeof profileStudent.foreignLanguages !== 'undefined') {
      setForeignLanguages(profileStudent.foreignLanguages);
    }
    if (profileStudent.interests && typeof profileStudent.interests !== 'undefined') {
      setInterests(profileStudent.interests);
    }
    if (profileStudent.portfolio && typeof profileStudent.portfolio !== 'undefined') {
      setPortfolio(profileStudent.portfolio);
    }
    if (profileStudent.achievements && typeof profileStudent.achievements !== 'undefined') {
      setAchievements(profileStudent.achievements);
    }
  }, []);
  return (
    <>
      <SideBar />
      <PageContainer>
        <StyledResumeForm>
          <StyledTitle>Заполните резюме(профиль)</StyledTitle>
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
          <StyledDiv>
            <StyledDi>
              <LocalizationProvider required dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Дата рождения *"
                  value={valueData}
                  onChange={(newValueData) => {
                    setValueData(newValueData);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </StyledDi>
          </StyledDiv>
          <StyledDiv>
            <StyledD>
              <StyledDi>
                <StyledTextField
                  label="Образование"
                  name="education"
                  required
                  value={education}
                  onBlur={(e) => blurHandler(e)}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setEducation(e.target.value);
                    emptyEducationHandler(e);
                  }}
                />
                {educationDirty && educationEmpty.length === 0 && (
                  <Message severity="error" text="Заполните поле" />
                )}
              </StyledDi>
            </StyledD>
            <StyledDi>
              <StyledTextField
                label="Дополнительное образование"
                name="additionalEducation"
                value={additionalEducation}
                onBlur={(e) => blurHandler(e)}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setAdditionalEducation(e.target.value);
                }}
              />
            </StyledDi>
          </StyledDiv>
          <StyledDiv>
            <StyledD>
              <StyledDi>
                <StyledTextField
                  label="Средний балл"
                  required
                  name="averageScore"
                  onBlur={(e) => blurHandler(e)}
                  value={averageScore}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setAverageScore(e.target.value);
                    emptyAverageScoreHandler(e);
                  }}
                />
                {averageScoreDirty && averageScoreEmpty.length === 0 && (
                  <Message severity="error" text="Заполните поле" />
                )}
              </StyledDi>
            </StyledD>
            <StyledD>
              <StyledDi>
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
              </StyledDi>
            </StyledD>
          </StyledDiv>
          <StyledDiv>
            <StyledD>
              <StyledDi>
                <StyledTextField
                  label="Стек"
                  onBlur={(e) => blurHandler(e)}
                  value={technologyStack}
                  name="technologyStack"
                  required
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setTechnologyStack(e.target.value);
                    emptyTechnologyStackHandler(e);
                  }}
                />
                {technologyStackDirty && technologyStackEmpty.length === 0 && (
                  <Message severity="error" text="Заполните поле" />
                )}
              </StyledDi>
            </StyledD>
            <StyledD>
              <StyledDi>
                <StyledTextField
                  label="Hard Skills"
                  value={hardSkills}
                  name="hardSkills"
                  onBlur={(e) => blurHandler(e)}
                  required
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setHardSkills(e.target.value);
                    emptyHardSkillsHandler(e);
                  }}
                />
                {hardSkillsDirty && hardSkillsEmpty.length === 0 && (
                  <Message severity="error" text="Заполните поле" />
                )}
              </StyledDi>
            </StyledD>
          </StyledDiv>
          <StyledDiv>
            <StyledD>
              <StyledDi>
                <StyledTextField
                  label="Soft Skills"
                  required
                  value={softSkills}
                  onBlur={(e) => blurHandler(e)}
                  name="softSkills"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setSoftSkills(e.target.value);
                    emptySoftSkillsHandler(e);
                  }}
                />
                {softSkillsDirty && softSkillsEmpty.length === 0 && (
                  <Message severity="error" text="Заполните поле" />
                )}
              </StyledDi>
            </StyledD>
            <StyledDi>
              <FormControl sx={{ width: 250 }} required>
                <InputLabel>Должность</InputLabel>
                <Select
                  value={workName}
                  name="workName"
                  label="Должность"
                  onBlur={(e) => blurHandler(e)}
                  onChange={handleChangeName}
                >
                  <MenuItem value={'HR'}>HR</MenuItem>
                  <MenuItem value={'Developer'}>Developer</MenuItem>
                  <MenuItem value={'Designer'}>Designer</MenuItem>
                  <MenuItem value={'QA'}>QA</MenuItem>
                  <MenuItem value={'DevOps'}>DevOps</MenuItem>
                  <MenuItem value={'Project Manager'}>Project Manager</MenuItem>
                  <MenuItem value={'Business Analyst'}>Business Analyst</MenuItem>
                  <MenuItem value={'Other'}>Other</MenuItem>
                </Select>
                {workNameDirty && workName.length === 0 && (
                  <Message severity="error" text="Заполните поле" />
                )}
              </FormControl>
            </StyledDi>
          </StyledDiv>
          <StyledDiv>
            <StyledD>
              <StyledDi>
                <FormControl sx={{ width: 250 }} required>
                  <InputLabel>График</InputLabel>
                  <Select
                    value={workTime}
                    name="workTime"
                    label="График"
                    onChange={handleChangeTime}
                    onBlur={(e) => blurHandler(e)}
                  >
                    <MenuItem value={'Полный день'}>Полный день</MenuItem>
                    <MenuItem value={'Сменный график'}>Сменный график </MenuItem>
                    <MenuItem value={'Гибкий график'}>Гибкий график</MenuItem>
                  </Select>
                  {workTimeDirty && workTime.length === 0 && (
                    <Message severity="error" text="Заполните поле" />
                  )}
                </FormControl>
              </StyledDi>
            </StyledD>
            <StyledDi>
              <FormControl sx={{ width: 250 }} required>
                <InputLabel>Формат работы</InputLabel>
                <Select
                  value={workPlace}
                  name="workPlace"
                  label="Формат работы"
                  onChange={handleChange}
                  onBlur={(e) => blurHandler(e)}
                >
                  <MenuItem value={'В офисе'}>В офисе</MenuItem>
                  <MenuItem value={'Удаленно'}>Удаленно</MenuItem>
                  <MenuItem value={'Смешанный'}>Смешанный</MenuItem>
                </Select>
                {workPlaceDirty && workPlace.length === 0 && (
                  <Message severity="error" text="Заполните поле" />
                )}
              </FormControl>
            </StyledDi>
          </StyledDiv>
          <StyledDiv>
            <StyledD>
              <StyledDi>
                <StyledTextField
                  label="Иностранные языки"
                  required
                  value={foreignLanguages}
                  name="foreignLanguages"
                  onBlur={(e) => blurHandler(e)}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setForeignLanguages(e.target.value);
                    emptyForeignLanguagesHandler(e);
                  }}
                />
                {foreignLanguagesDirty && foreignLanguagesEmpty.length === 0 && (
                  <Message severity="error" text="Заполните поле" />
                )}
              </StyledDi>
            </StyledD>
            <StyledDi>
              <StyledTextField
                label="Интересы"
                value={interests}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setInterests(e.target.value)}
              />
            </StyledDi>
          </StyledDiv>
          <StyledDiv>
            <StyledDi>
              <StyledD>
                <StyledTextField
                  label="Ссылка на портфолио"
                  value={portfolio}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPortfolio(e.target.value)}
                />
              </StyledD>
            </StyledDi>
            <StyledDi>
              <StyledTextField
                label="Достижения"
                value={achievements}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAchievements(e.target.value)}
              />
            </StyledDi>
          </StyledDiv>
        </StyledResumeForm>
        <StyledDivButton>
          <SaveResume
            profileImage={picture!}
            dateOfBirth={valueData!}
            education={education}
            additionalEducation={additionalEducation}
            averageScore={averageScore}
            fieldOfActivity={fieldOfActivity}
            technologyStack={technologyStack}
            hardSkills={hardSkills}
            softSkills={softSkills}
            сareerObjective={workName}
            schedule={workTime}
            workPlace={workPlace}
            foreignLanguages={foreignLanguages}
            interests={interests}
            portfolio={portfolio}
            achievements={achievements}
          />
          <StyledNavLink to="/mainPage">
            <Button variant="contained">Отменить</Button>
          </StyledNavLink>
        </StyledDivButton>
      </PageContainer>
    </>
  );
};
