import { ADD_CONTACT, DELETE_CONTACT } from "../types/phonebookTypes";

export const addContact = (data) => ({
  type: ADD_CONTACT,
  payload: data,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});