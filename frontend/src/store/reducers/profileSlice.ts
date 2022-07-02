import { createSlice } from '@reduxjs/toolkit';
import { axiosGetProfileCompany, axiosGetprofileStudent } from '../actions/profileAction';

interface RoleProps {
  role: string | null;
  status: string | null;
  error: string | unknown;
}
interface StudentProfileProps {
  profileImage: string | null;
  achievements: string | null;
  additionalEducation: string | null;
  averageScore: string | null;
  dateOfBirth: Date | null;
  education: string | null;
  fieldOfActivity: string | null;
  foreignLanguages: string | null;
  hardSkills: string | null;
  interests: string | null;
  portfolio: string | null;
  schedule: string | null;
  softSkills: string | null;
  technologyStack: string | null;
  workPlace: string | null;
  careerObjective: string | null;
  status: string | null;
  error: string | unknown;
}
interface CompanyProfileProps {
  profileImage: string | null;
  fieldOfActivity: string | null;
  learningOpportunity: string | null;
  aboutCompany: string | null;
  aboutProjects: string | null;
  abilityToWorkRemotely: string | null;
  status: string | null;
  error: string | unknown;
}
interface Profile {
  role: RoleProps;
  profileCompany: CompanyProfileProps;
  profileStudent: StudentProfileProps;
  status: string | null;
  error: string | unknown;
}

const initialState: Profile = {
  role: {
    role: null,
    status: null,
    error: null
  },
  profileStudent: {
    profileImage: null,
    achievements: null,
    additionalEducation: null,
    averageScore: null,
    dateOfBirth: null,
    education: null,
    fieldOfActivity: null,
    foreignLanguages: null,
    hardSkills: null,
    interests: null,
    portfolio: null,
    schedule: null,
    softSkills: null,
    technologyStack: null,
    workPlace: null,
    careerObjective: null,
    status: null,
    error: null
  },
  profileCompany: {
    profileImage: null,
    fieldOfActivity: null,
    learningOpportunity: null,
    aboutCompany: null,
    aboutProjects: null,
    abilityToWorkRemotely: null,
    status: null,
    error: null
  },
  status: null,
  error: null
};
export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    deleteStatusAndError: (state) => {
      state.status = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(axiosGetprofileStudent.fulfilled, (state, action) => {
        state.role = action.payload.role;
        state.profileStudent.achievements = action.payload.achievements;
        state.profileStudent.profileImage = action.payload.profileImage;
        state.profileStudent.achievements = action.payload.achievements;
        state.profileStudent.additionalEducation = action.payload.additionalEducation;
        state.profileStudent.averageScore = action.payload.averageScore;
        state.profileStudent.dateOfBirth = action.payload.dateOfBirth;
        state.profileStudent.education = action.payload.education;
        state.profileStudent.fieldOfActivity = action.payload.fieldOfActivity;
        state.profileStudent.foreignLanguages = action.payload.foreignLanguages;
        state.profileStudent.hardSkills = action.payload.hardSkills;
        state.profileStudent.interests = action.payload.interests;
        state.profileStudent.portfolio = action.payload.portfolio;
        state.profileStudent.schedule = action.payload.schedule;
        state.profileStudent.softSkills = action.payload.softSkills;
        state.profileStudent.technologyStack = action.payload.technologyStack;
        state.profileStudent.workPlace = action.payload.workPlace;
        state.profileStudent.careerObjective = action.payload.сareerObjective;
        state.status = 'resolved';
      })
      .addCase(axiosGetProfileCompany.fulfilled, (state, action) => {
        state.role = action.payload.role;
        state.profileCompany.profileImage = action.payload.profileImage;
        state.profileCompany.fieldOfActivity = action.payload.fieldOfActivity;
        state.profileCompany.aboutCompany = action.payload.aboutCompany;
        state.profileCompany.abilityToWorkRemotely = action.payload.abilityToWorkRemotely;
        state.profileCompany.aboutProjects = action.payload.aboutProjects;
        state.profileCompany.learningOpportunity = action.payload.learningOpportunity;
        state.status = 'resolved';
      })
      .addCase(axiosGetprofileStudent.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(axiosGetprofileStudent.pending, (state) => {
        state.status = 'loading';
      });
  }
});
