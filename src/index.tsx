import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import ThemeHandler from "./theme/ThemeHandler";

// This is the way to render one's react app when using
// react v17 with react-dom v17 and react-router-dom v6.
// Different version of those 3 packages may require
// alterations to this code to work.

ReactDOM.render(
    <React.StrictMode>
        <ThemeHandler>
            <App />
        </ThemeHandler>
    </React.StrictMode>,
    document.getElementById("root")
);
