import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import ProjectDetailScreen from '../screens/ProjectDetailScreen';
import Layout from './Layout';

export interface IApplicationProps {}

function App(props: IApplicationProps) {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/details">
              <Route index element={<ProjectDetailScreen />} />
              <Route path=":number" element={<ProjectDetailScreen />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
