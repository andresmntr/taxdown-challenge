// // this middleware only care about the getBooks action
// export const getBooksFlow = ({dispatch}) => next => action => {
//   next(action);

//   if (action.type === GET_BOOKS) {
//     dispatch(apiRequest('GET', URL, null, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR));
//     dispatch(showSpinner());
//   }

// };

// // on successful fetch, process the books data
// export const processBooksCollection = ({dispatch}) => next => action => {
//   next(action);

//   if (action.type === FETCH_BOOKS_SUCCESS) {
//     dispatch(updateBooks(action.payload.items));
//     dispatch(hideSpinner())
//   }
// };
