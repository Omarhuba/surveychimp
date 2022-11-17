import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getSurveyById from '../../api/getSurveyById';
import { ISurvey } from '@surveychimp/surveychimp-lib';

import useAnalyticsEventTracker from '../hooks/useAnalyticsEventTracker'
import ReactStars from 'react-stars';

export const SurveyPage = () => {
  const gaEventTracker = useAnalyticsEventTracker('Contact us');
  const { surveyId } = useParams();
  const [survey, setSurvey] = useState<ISurvey>();

  useEffect(() => {
    if (surveyId) {
      getSurveyById(surveyId).then((survey) => {
        setSurvey(survey);
      });
    } else {
      //Visa upp att id saknas
    }
  }, []);

  const ratingChanged = (newRating: number) => {
    console.log(newRating);
  };

  return (
    <>
      <h1>Survey</h1>
      <p>{survey?.recipient.name}</p>

      <ReactStars
        count={5}
        onChange={() => { gaEventTracker ('rate')}}
        size={24}
        color2={'#ffd700'}
        />

        </>
  );
};

export default SurveyPage;
