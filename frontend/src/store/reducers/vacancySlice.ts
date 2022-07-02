import { createSlice } from '@reduxjs/toolkit';
import { axiosGetVacancies, axiosGetVacancyById } from '../actions/vacanciesAction';

interface Vacancy {
  _id: string | null;
  fieldOfActivity: string | null;
  vacancyName: string | null;
  skills: string | null;
  requirements: string | null;
  schedule: string | null;
  workFormat: string | null;
  salary: string | null;
  offer: string | null;
  companyId: string | null;
}

interface OneVacancy extends Vacancy {
  status: string | null;
  error: string | unknown;
}

interface VacancyProps {
  vacansiesList: Vacancy[];
  currentVacancy: OneVacancy;
  status: string | null;
  error: string | unknown;
}

const initialState: VacancyProps = {
  vacansiesList: [],
  currentVacancy: {
    _id: null,
    fieldOfActivity: null,
    vacancyName: null,
    skills: null,
    requirements: null,
    schedule: null,
    workFormat: null,
    salary: null,
    offer: null,
    companyId: null,
    status: null,
    error: null
  },
  status: null,
  error: null
};

export const vacancySlice = createSlice({
  name: 'vacancy',
  initialState,
  reducers: {
    deleteStatusAndError: (state) => {
      state.status = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(axiosGetVacancies.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(axiosGetVacancies.fulfilled, (state, action) => {
        (state.vacansiesList = action.payload), (state.status = 'resolved');
      })
      .addCase(axiosGetVacancies.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'rejected';
      });
    builder
      .addCase(axiosGetVacancyById.pending, (state) => {
        state.currentVacancy.status = 'loading';
        state.currentVacancy.error = null;
      })
      .addCase(axiosGetVacancyById.fulfilled, (state, action) => {
        state.currentVacancy._id = action.payload._id;
        state.currentVacancy.companyId = action.payload.companyId;
        state.currentVacancy.fieldOfActivity = action.payload.fieldOfActivity;
        state.currentVacancy.offer = action.payload.offer;
        state.currentVacancy.requirements = action.payload.requirements;
        state.currentVacancy.salary = action.payload.salary;
        state.currentVacancy.schedule = action.payload.schedule;
        state.currentVacancy.skills = action.payload.skills;
        state.currentVacancy.vacancyName = action.payload.vacancyName;
        state.currentVacancy.workFormat = action.payload.workFormat;
        state.currentVacancy.status = 'resolved';
      })
      .addCase(axiosGetVacancyById.rejected, (state, action) => {
        state.currentVacancy.error = action.payload;
        state.currentVacancy.status = 'rejected';
      });
  }
});
