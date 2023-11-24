import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import MainContextProvider from "./Context/MainContext";
import FilterContextProvider from "./Context/FilterContext";
import BioStorybookWidget from "bio-storybook-widget";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BioStorybookWidget projectSource={"fido"} />
    <BrowserRouter>
      <MainContextProvider>
        <FilterContextProvider>
          {" "}
          <App />
        </FilterContextProvider>
      </MainContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
