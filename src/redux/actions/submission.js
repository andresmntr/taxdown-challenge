export const SUBMISSION = '[SUBMISSION]';

// export const SUBMISSION_REQUEST = `${SUBMISSION} SUBMISSION_REQUEST`;
export const STORE_SUBMISSION = `${SUBMISSION} STORE_SUBMISSION`;

export const storeSubmission = formValues => ({
  type: STORE_SUBMISSION,
  payload: formValues,
});
