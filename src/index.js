import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import App from "./App";
import LoginPage from "./pages/LoginPage/LoginPage";
import {CookiesProvider} from "react-cookie";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App child={MainPage} route={"main"}/>
    },
    {
        path: "/login",
        element: <App child={LoginPage}/>
    },
    {
        path: "/settings",
        element: <App child={SettingsPage} route={"settings"}/>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CookiesProvider>
            <RouterProvider router={router}/>
        </CookiesProvider>
    </React.StrictMode>
);
