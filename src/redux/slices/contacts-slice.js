import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const ItemsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addItem: (state, action) => [...state, action.payload],
    deleteItem: (state, action) =>
      state.filter((contact) => contact.id !== action.payload),
  },
});

export const { addItem, deleteItem } = ItemsSlice.actions;
export default ItemsSlice.reducer;