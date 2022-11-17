
import React, {useEffect } from 'react';
import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';
import StartPage from './pages/StartPage';





import { Route, Routes } from 'react-router-dom';
// import {Rating} from '../components/ReactStar'
import ReactStars from 'react-stars'

import ReactGA from 'react-ga';

const StyledApp = styled.div`
    // Your style here
`;
const TRACKING_ID = "G-SDESYVPF92"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);




export function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <StyledApp>
      <Routes>
        <Route
          path="/survey"
          element={<SurveyPage />}
        />
        <Route
          path="/rating"
          element={<ReactStars />}
        />
        <Route
          path="/"
          element={<StartPage/>} />
      </Routes>
    </StyledApp>
  );

}



export default App;
