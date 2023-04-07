import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import App from "./App";
import LoginPage from "./pages/LoginPage/LoginPage";
import {CookiesProvider} from "react-cookie";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App child={MainPage}/>
    },
    {
        path: "/login",
        element: <App child={LoginPage}/>
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
