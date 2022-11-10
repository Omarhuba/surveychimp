
import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';
import { Route, Routes } from 'react-router-dom';
// import {Rating} from '../components/ReactStar'
import ReactStars from 'react-stars'


const StyledApp = styled.div`
    // Your style here
`;


export function App() {

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
          element={<div>Du är på förstasidan</div>} />
      </Routes>
    </StyledApp>
  );

}



export default App;
