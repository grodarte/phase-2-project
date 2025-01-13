import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import ReviewSessionApp from './components/challenges/ReviewSessionApp';
import App from './components/challenges/App';

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);
// root.render(<ReviewSessionApp/>)