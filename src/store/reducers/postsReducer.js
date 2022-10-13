const ADD_POST = 'ADD_POST';
const REMOVE_POST = 'REMOVE_POST';

const initialState = {
  posts: [],
};

export default function postsReducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: [...state.posts.filter((p) => p.id !== payload)],
      };

    default:
      return state;
  }
}

export const addPostAC = (post) => ({ type: ADD_POST, payload: post });
export const removePostAC = (id) => ({ type: REMOVE_POST, payload: id });
