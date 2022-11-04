
import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';

import { Route, Routes } from 'react-router-dom';



const StyledApp = styled.div`
    // Your style here
`;


export function App() {

  return (
    <StyledApp>
      <Routes>
        <Route
          path="/survey/:surveyId"
          element={<SurveyPage />}
        />
        <Route
          path="/"
          element={<div>
            <h1>Du är första sidan</h1>
          </div>} />
      </Routes>
    </StyledApp>
  );

}


export default App;
