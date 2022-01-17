import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { MainLayout } from "./commonComponents/MainLayout";
import { configureStore } from "./redux/configureStore";
import { Router } from "./routes/Routes";

const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <MainLayout>
                    <Router />
                </MainLayout>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
