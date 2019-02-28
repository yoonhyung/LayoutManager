import React, { ReactNode } from 'react';
import styled from 'styled-components';

type HeaderProps = {
    children?: ReactNode;
};

type HeaderState = {};

const Header = styled.ul`
    background: #191a21;
    border-bottom: 1px solid #191a21;
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: 100%;
`;

export const HeaderComponent = (props: HeaderProps) => {
    return <Header>{props.children}</Header>;
};
