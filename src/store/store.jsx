// Import createStore and combineReducers here.
import { createStore, combineReducers } from 'redux';

// Import the slice reducers here.
import { educationReducer } from '../components/education/educationSlice';

// Create and export the store here.
export const store = createStore(combineReducers({
  education: educationReducer
}));
