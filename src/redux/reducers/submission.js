// this is how a general reducer would look like
import {STORE_SUBMISSION} from '../actions/submission';

const initialState = [];

export const SubmissionReducer = (is = initialState, action) => {
  switch (action.type) {
    case STORE_SUBMISSION:
      console.log(`Submission number ${is.length}: \n`, action.payload);
      console.log(`All submissions: \n`, is);

      return [...is, action.payload];
    default:
      return is;
  }
};
