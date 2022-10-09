const ADD_NOTE = 'ADD_NOTE';
const REMOVE_NOTE = 'REMOVE_NOTE';

const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action = '') => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NOTE:
      return {
        ...state, notes: [payload, ...state.notes],
      };
    case REMOVE_NOTE:
      return {
        ...state, notes: [...state.notes].filter((note) => note.id !== payload),
      };

    default:
      return state;
  }
};

export const addNoteAC = (note) => ({ type: ADD_NOTE, payload: note });
export const removeNoteAC = (id) => ({ type: REMOVE_NOTE, payload: id });

export default notesReducer;
