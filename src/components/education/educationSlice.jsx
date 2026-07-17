import { educationData } from '../../data';

export const getEducation = () => {
  return {
    type: 'education/getEducation',
    payload: educationData,
  };
};

const initialEducation = [];
export const educationReducer = (education = initialEducation, action) => {
  switch (action.type) {
    case 'education/getEducation': {
      return action.payload;
    }
    default: {
      return education;
    }
  }
};