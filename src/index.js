import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { MainLayout } from "./commonComponents/MainLayout";
import { Router } from "./routes/Routes";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MainLayout>
                <Router />
            </MainLayout>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
