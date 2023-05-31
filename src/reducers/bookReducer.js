import { v4 as uuidv4 } from 'uuid';

const ACTIONS = {
  ADD_BOOK: 'ADD_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
};

export const bookReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_BOOK:
      return [
        ...state,
        { title: action.book.title, author: action.book.author, id: uuidv4() },
      ];
    case ACTIONS.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
