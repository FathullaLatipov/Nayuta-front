import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './components/context/home-context';
import ScrollToTop from './components/scrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <UserContextProvider>
            <ScrollToTop />
            <App />
        </UserContextProvider>
    </BrowserRouter>
);
