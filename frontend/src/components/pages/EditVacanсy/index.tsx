import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';
import { ChangeEvent, useRef, useState } from 'react';
import { SideBar } from '../../organisms/SideBar';
import { PageContainer } from '../../templates/PageContainer';
import {
  StyledD,
  StyledDiv,
  StyledTextMultiline,
  StyledDivButton,
  StyledResumeForm,
  StyledTitle,
  StyledNavLink,
  StyledTextField,
  StyledDi
} from './styles';
import { SaveVacancy } from '../../atoms/SaveVacancy';
import { Message } from 'primereact/message';
import { useAppDispatch, useAppSelector } from '../../../store/reducers/rootReducer';

export const EditVacansy = () => {
  const [vacancyName, setVacancyName] = useState<string>();
  const [workPlace, setWorkPlace] = useState(''); // workFormat
  const [workTime, setWorkTime] = useState(''); // schelude
  const [skills, setSkills] = useState('');
  const [fieldOfActivity, setFieldOfActivity] = useState<string>();
  const [offer, setOffer] = useState<string>();
  const [salary, setSalary] = useState<string>();
  const [requirements, setRequirements] = useState<string>('');

  const [workPlaceDirty, setWorkPlaceDirty] = useState(false);
  const [workTimeDirty, setWorkTimeDirty] = useState(false);
  const [vacancyDirty, setVacancyDirty] = useState(false);
  const [requirementsDirty, setRequirementsDirty] = useState(false);
  const [fieldOfActivityDirty, setFieldOfActivityDirty] = useState(false);
  const [offerDirty, setOfferDirty] = useState(false);
  const [skillsDirty, setSkillsDirty] = useState(false);
  const [salaryDirty, setSalaryDirty] = useState(false);

  const [requirementsEmpty, setRequirementsEmpty] = useState('');
  const [vacancyNameEmpty, setVacancyNameEmpty] = useState('');
  const [fieldOfActivityEmpty, setFieldOfActivityEmpty] = useState('');
  const [offerEmpty, setOfferEmpty] = useState('');
  const [skillsEmpty, setSkillsEmpty] = useState('');
  const [salaryEmpty, setSalaryEmpty] = useState('');

  const dispatch = useAppDispatch();

  const userId = localStorage.getItem('id');

  const handleChange = (event: SelectChangeEvent) => {
    setWorkPlace(event.target.value as string);
  };
  const handleChangeTime = (event: SelectChangeEvent) => {
    setWorkTime(event.target.value as string);
  };

  const emptyVacancyNameHandler = (e: any) => {
    setVacancyName(e.target.value);
    if (e.target.value) {
      setVacancyNameEmpty('?????????????????? ????????');
    } else {
      setVacancyNameEmpty('');
    }
  };

  const emptyFieldOfActivityHandler = (e: any) => {
    setFieldOfActivity(e.target.value);
    if (e.target.value) {
      setFieldOfActivityEmpty('?????????????????? ????????');
    } else {
      setFieldOfActivityEmpty('');
    }
  };

  const emptyOfferHandler = (e: any) => {
    setOffer(e.target.value);
    if (e.target.value) {
      setOfferEmpty('?????????????????? ????????');
    } else {
      setOfferEmpty('');
    }
  };

  const emptyRequirementsHandler = (e: any) => {
    setRequirements(e.target.value);
    if (e.target.value) {
      setRequirementsEmpty('?????????????????? ????????');
    } else {
      setRequirementsEmpty('');
    }
  };

  const emptySkillsHandler = (e: any) => {
    setSkills(e.target.value);
    if (e.target.value) {
      setSkillsEmpty('?????????????????? ????????');
    } else {
      setSkillsEmpty('');
    }
  };

  const emptySalaryHandler = (e: any) => {
    setSalary(e.target.value);
    if (e.target.value) {
      setSalaryEmpty('?????????????????? ????????');
    } else {
      setSalaryEmpty('');
    }
  };

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case 'requirements':
        setRequirementsDirty(true);
        break;
      case 'vacancy':
        setVacancyDirty(true);
        break;
      case 'fieldOfActivity':
        setFieldOfActivityDirty(true);
        break;
      case 'offer':
        setOfferDirty(true);
        break;
      case 'skills':
        setSkillsDirty(true);
        break;
      case 'salary':
        setSalaryDirty(true);
        break;
      case 'workTime':
        setWorkTimeDirty(true);
        break;
      case 'workPlace':
        setWorkPlaceDirty(true);
        break;
    }
  };

  return (
    <>
      <SideBar />
      <PageContainer>
        <StyledResumeForm>
          <StyledTitle>?????????????????? ????????????????</StyledTitle>
          <StyledDiv>
            <StyledD>
              <StyledDi>
                <StyledTextField
                  label="?????????? ????????????????????????"
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
                  <Message severity="error" text="?????????????????? ????????" />
                )}
              </StyledDi>
            </StyledD>
            <StyledD>
              <StyledDi>
                <StyledTextField
                  label="B??????????????"
                  value={vacancyName}
                  name="vacancy"
                  onBlur={(e) => blurHandler(e)}
                  required
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setVacancyName(e.target.value);
                    emptyVacancyNameHandler(e);
                  }}
                />
                {vacancyDirty && vacancyNameEmpty.length === 0 && (
                  <Message severity="error" text="?????????????????? ????????" />
                )}
              </StyledDi>
            </StyledD>
          </StyledDiv>
          <StyledDi>
            <StyledTextMultiline
              id="outlined-multiline-static"
              label="?????????????????????? ????????????"
              name="skills"
              value={skills}
              onBlur={(e) => blurHandler(e)}
              multiline
              rows={4}
              defaultValue=""
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setSkills(e.target.value);
                emptySkillsHandler(e);
              }}
            />
            {skillsDirty && skillsEmpty.length === 0 && (
              <Message severity="error" text="?????????????????? ????????" />
            )}
          </StyledDi>
          <StyledDi>
            <StyledTextMultiline
              id="outlined-multiline-static"
              label="???????????????????? ?? ??????????????????"
              multiline
              onBlur={(e) => blurHandler(e)}
              rows={4}
              defaultValue=""
              value={requirements}
              name="requirements"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setRequirements(e.target.value);
                emptyRequirementsHandler(e);
              }}
            />
            {requirementsDirty && requirementsEmpty.length === 0 && (
              <Message severity="error" text="?????????????????? ????????" />
            )}
          </StyledDi>
          <StyledDiv>
            <StyledD>
              <StyledDi>
                <FormControl sx={{ width: 250 }} required>
                  <InputLabel>????????????</InputLabel>
                  <Select
                    value={workTime}
                    name="workTime"
                    label="????????????"
                    onChange={handleChangeTime}
                    onBlur={(e) => blurHandler(e)}
                  >
                    <MenuItem value={'???????????? ????????'}>???????????? ????????</MenuItem>
                    <MenuItem value={'?????????????? ????????????'}>?????????????? ???????????? </MenuItem>
                    <MenuItem value={'???????????? ????????????'}>???????????? ????????????</MenuItem>
                  </Select>
                  {workTimeDirty && workTime.length === 0 && (
                    <Message severity="error" text="?????????????????? ????????" />
                  )}
                </FormControl>
              </StyledDi>
            </StyledD>
            <StyledDi>
              <FormControl sx={{ width: 250 }} required>
                <InputLabel>???????????? ????????????</InputLabel>
                <Select
                  value={workPlace}
                  name="workPlace"
                  label="???????????? ????????????"
                  onChange={handleChange}
                  onBlur={(e) => blurHandler(e)}
                >
                  <MenuItem value={'?? ??????????'}>?? ??????????</MenuItem>
                  <MenuItem value={'????????????????'}>????????????????</MenuItem>
                  <MenuItem value={'??????????????????'}>??????????????????</MenuItem>
                </Select>
                {workPlaceDirty && workPlace.length === 0 && (
                  <Message severity="error" text="?????????????????? ????????" />
                )}
              </FormControl>
            </StyledDi>
          </StyledDiv>
          <StyledDiv>
            <StyledD>
              <StyledDi>
                <StyledTextField
                  label="?????????????? ??/??"
                  required
                  value={salary}
                  onBlur={(e) => blurHandler(e)}
                  name="salary"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setSalary(e.target.value);
                    emptySalaryHandler(e);
                  }}
                />
                {salaryDirty && salaryEmpty.length === 0 && (
                  <Message severity="error" text="?????????????????? ????????" />
                )}
              </StyledDi>
            </StyledD>
          </StyledDiv>
          <StyledDi>
            <StyledTextMultiline
              id="outlined-multiline-static"
              label="???? ????????????????????"
              multiline
              rows={4}
              defaultValue=""
              value={offer}
              onBlur={(e) => blurHandler(e)}
              name="offer"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setOffer(e.target.value);
                emptyOfferHandler(e);
              }}
            />
            {offerDirty && offerEmpty.length === 0 && (
              <Message severity="error" text="?????????????????? ????????" />
            )}
          </StyledDi>
        </StyledResumeForm>
        <StyledDivButton>
          <SaveVacancy
            vacancyName={vacancyName}
            workPlace={workPlace}
            workTime={workTime}
            skills={skills}
            fieldOfActivity={fieldOfActivity}
            offer={offer}
            salary={salary}
            requirements={requirements}
            companyId={userId!}
          />

          <StyledNavLink to="/mainPage">
            <Button variant="contained">????????????????</Button>
          </StyledNavLink>
        </StyledDivButton>
      </PageContainer>
    </>
  );
};
