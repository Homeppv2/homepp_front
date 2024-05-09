import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import {CookiesProvider} from "react-cookie";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App route={"main"}/>
    },
    {
        path: "/login",
        element: <App/>
    },
    {
        path: "/settings",
        element: <App route={"settings"}/>
    },
    {
        path: "/scenes",
        element: <App route={"scenes"}/>
    },
    {
        path: "/rooms",
        element: <App route={"rooms"}/>
    },
    {
        path: "/system-status",
        element: <App route={"system-status"}/>
    },
    {
        path: "/users",
        element: <App route={"users"}/>
    },
    {
        path: "/security",
        element: <App route={"security"}/>
    },
    {
        path: "/settings",
        element: <App route={"settings"}/>
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
