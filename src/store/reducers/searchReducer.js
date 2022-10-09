const SEARCH_TYPING = 'SEARCH_TYPING';
const SEARCH_IS_SUCCESS = 'SEARCH_IS_SUCCESS';
const SEARCH_IS_NOT_SUCCESS = 'SEARCH_IS_NOT_SUCCESS';

const initialState = {
  search: '',
  isSuccess: false,
};

const searchReducer = (state = initialState, action = '') => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_TYPING:
      return {
        ...state, search: payload,
      };
    case SEARCH_IS_SUCCESS:
      return {
        ...state, isSuccess: true,
      };
    case SEARCH_IS_NOT_SUCCESS:
      return {
        ...state, isSuccess: false,
      };

    default:
      return state;
  }
};

export const searchTypingAC = (text) => ({ type: SEARCH_TYPING, payload: text });
export const searchIsSuccessAC = () => ({ type: SEARCH_IS_SUCCESS });
export const searchIsNotSuccessAC = () => ({ type: SEARCH_IS_NOT_SUCCESS });

export default searchReducer;
