import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";

//REDUX
import { store } from "./reducers/store";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
