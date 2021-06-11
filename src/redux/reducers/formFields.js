// this is how a general reducer would look like
import {RECIEVE_NEW_FIELDS} from '../actions/submission';
import * as data from '../../../fakeserver/api.json';

const initialState = data;

export const FormFieldsReducer = (is = initialState, action) => {
  switch (action.type) {
    case RECIEVE_NEW_FIELDS:
      return action.payload;
    default:
      return is;
  }
};
