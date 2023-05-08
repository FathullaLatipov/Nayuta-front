import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './components/context/home-context';
import ScrollToTop from './components/scrollToTop';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Helmet>
        <title>Nayuta </title>
        <meta
        name='description'
        content='Get info about Nayuta Credit Bank'
        />
        <meta 
        name='keywords' content='Bank, Nayuta, Credit, Calculate, Calculator'/>
    </Helmet>
        <UserContextProvider>
            <ScrollToTop />
            <App />
        </UserContextProvider>
    </BrowserRouter>
);
