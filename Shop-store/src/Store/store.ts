import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist-indexeddb-storage";
import {
  PERSIST,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
} from "redux-persist";
import { api } from "../Services/api";


const rootReducer = combineReducers({
  // auth: authSlice.reducer,
  [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: "loxfordtrading",
  storage: storage("LOXFORD"),
  timeout: 20000,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
  devTools: true,
});

export const persistor = persistStore(store);
