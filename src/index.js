import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

//REDUX
import { Provider } from "react-redux";
import { store } from "./reducers/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
