import './bootstrap.js';
import '../css/app.css'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './app.jsx';

const root = createRoot(document.getElementById('app'));

root.render(
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
)