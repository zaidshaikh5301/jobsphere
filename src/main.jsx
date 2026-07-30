import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { JobProvider } from "./context/JobContext";
import { ApplicationProvider } from "./context/ApplicationContext";
import { RecruiterProvider } from "./context/RecruiterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JobProvider>
      <ApplicationProvider>
        <RecruiterProvider>
          <App />
        </RecruiterProvider>
      </ApplicationProvider>
    </JobProvider>
  </React.StrictMode>
);