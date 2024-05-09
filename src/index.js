import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import LogsPage from './LogsPage';
import DataDisplay from './DataDisplay'; // Импортируем компонент DataDisplay

// Используем createRoot из react-dom/client
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');

createRoot(root).render(
    <React.StrictMode>
        <CookiesProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<App route="main" />} />
                    <Route path="/login" element={<App />} />
                    <Route path="/settings" element={<App route="settings" />} />
                    <Route path="/scenes" element={<App route="scenes" />} />
                    <Route path="/rooms" element={<App route="rooms" />} />
                    <Route path="/system-status" element={<App route="system-status" />} />
                    <Route path="/users" element={<App route="users" />} />
                    <Route path="/security" element={<App route="security" />} />
                    <Route path="/logs" element={<LogsPage />} />
                    <Route path="/data-display" element={<DataDisplay />} /> {/* Добавляем новый маршрут для DataDisplay */}
                </Routes>
            </Router>
        </CookiesProvider>
    </React.StrictMode>
);
