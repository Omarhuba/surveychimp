
import React, {useEffect } from 'react';
import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';
import StartPage from './pages/StartPage';





import { Route, Routes } from 'react-router-dom';
// import {Rating} from '../components/ReactStar'
import ReactStars from 'react-stars'

import ReactGA from "react-ga4";

const StyledApp = styled.div`
    // Your style here
`;
ReactGA.initialize("G-Q65BBQGGHW");
ReactGA.send("pageview");



export function App() {
  useEffect(() => {
    ReactGA.send("pageview");
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
