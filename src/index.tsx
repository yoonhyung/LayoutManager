import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import LayoutManager from './LayoutManager';

const GlobalStyle = createGlobalStyle`
    html,
    body,
    #root {
        font-family: Segoe WPC,Segoe UI,Malgun Gothic,Dotom,sans-serif;
        font-size: 13px;
        height: 100%;
        margin: 0;
        overflow: hidden;
        width: 100%;
    }
`;

render(
    <>
        <LayoutManager />
        <GlobalStyle />
    </>,
    document.getElementById('root') as HTMLElement
);
