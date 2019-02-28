import React, { ReactNode } from 'react';
import styled from 'styled-components';

type HeaderProps = {
    children?: ReactNode;
};

type HeaderState = {};

const Header = styled.ul`
    background: #696969;
    display: flex;
    height: 36px;
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: 100%;
`;

export const HeaderComponent = (props: HeaderProps) => {
    return <Header>{props.children}</Header>;
};
