import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Authorization } from './components/pages/AuthPage';
import { MainPage } from './components/pages/MainPage';
import { EditResume } from './components/pages/EditResume';
import { EditCompany } from './components/pages/EditCompany';
import { MessangerPage } from './components/pages/MessangerPage';
import { InfoPage } from './components/pages/InfoPage';
import { EditVacansy } from './components/pages/EditVacanсy';
import { VacanciesPage } from './components/pages/VacanciesPage';
import { ErrorPage } from './components/pages/ErrorPage';
import { VacancyPage } from './components/pages/VacancyPage';
import { UserPages } from './components/pages/UserPages';
import { CompaniesPage } from './components/pages/CompaniesPage';
import {Registration} from './components/pages/RegPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Authorization />} />
        <Route path="messages" element={<MessangerPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/users/:id" element={<UserPages />} />
        <Route path="/mainPage/editResume" element={<EditResume />} />
        <Route path="/mainPage/editCompany" element={<EditCompany />} />
        <Route path="/mainPage/editVacancy" element={<EditVacansy />} />
        <Route path="/vacancies" element={<VacanciesPage />} />
        <Route path="/vacancy/:id" element={<VacancyPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
