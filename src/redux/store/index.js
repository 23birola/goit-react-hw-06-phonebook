// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import { rootReducer } from "../reducers/rootReducer";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import filter from "../slices/filter-slice";
import contacts from "../slices/contacts-slice";
import logger from 'redux-logger';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// const store = createStore(rootReducer, devToolsEnhancer());

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];
 
const contactsPersistConfig = {
  key: 'contacts',
  storage,
}

const reducer = {
  items: persistReducer(contactsPersistConfig, contacts),
  filter: filter
}

const store = configureStore({
   reducer,
    middleware,
    devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

export { store, persistor };