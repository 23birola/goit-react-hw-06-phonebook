import { ADD_CONTACT, DELETE_CONTACT } from "../types/phonebookTypes";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];

    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

export default items;