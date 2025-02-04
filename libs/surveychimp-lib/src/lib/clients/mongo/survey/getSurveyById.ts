import SurveyModel, { ISurvey } from './SurveyModel';

export const getSurveyById = async (surveyId: string) => {
    const survey = SurveyModel.findById(surveyId);
    if (!survey) {
        throw "404";
    }

    return survey;
}

export const getSurvey = async () => {
    const getSurvey = SurveyModel.find();
    if (!getSurvey) {
        throw "404";
    }

    return getSurvey;
}