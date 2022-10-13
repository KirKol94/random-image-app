const ADD_IMAGE = 'ADD_IMAGE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';

const initialState = {
  likes: [],
};

export default function likesReducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case ADD_IMAGE:
      return {
        ...state,
        likes: [payload, ...state.likes],
      };
    case REMOVE_IMAGE:
      return {
        ...state,
        likes: [...state.likes.filter((p) => p.id !== payload)],
      };

    default:
      return state;
  }
}

export const addImageToLikesAC = (img) => ({ type: ADD_IMAGE, payload: img });
export const removeImageFromLikesAC = (id) => ({ type: REMOVE_IMAGE, payload: id });
