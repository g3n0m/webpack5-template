import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';

import './main.scss';
import './fonts/fonts.scss';

function component(text) {
    const element = document.createElement('h1');
    element.textContent = text;
    return element;
}

document.body.prepend(component('Проект собран на Webpack'));

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
