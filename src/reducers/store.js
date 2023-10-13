import { configureStore } from "@reduxjs/toolkit";
import firstNameReducer from "./firstName";
import lastNameReducer from "./lastName";
import tokenReducer from "./token";
import emailReducer from "./email";

export const store = configureStore({
  reducer: {
    firstName: firstNameReducer,
    lastName: lastNameReducer,
    token: tokenReducer,
    email: emailReducer,
    devTools: true,
  },
});
