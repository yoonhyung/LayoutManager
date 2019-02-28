import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import LayoutManager from './LayoutManager';

const GlobalStyle = createGlobalStyle`
    html,
    body,
    #root {
        height: 100%;
        margin: 0;
        width: 100%;
    }
`;

render(
    <>
        <LayoutManager />
        <GlobalStyle />
    </>,
    document.getElementById('root')
);
