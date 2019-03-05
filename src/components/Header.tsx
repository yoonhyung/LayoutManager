import React from 'react';
import styled from 'styled-components';

type HeaderProps = {
    children?: import('react').ReactNode;
};

type HeaderState = {};

const Header = styled.ul`
    background: #191a21;
    border-bottom: 1px solid #191a21;
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

const HeaderComponent = (props: HeaderProps) => {
    return <Header>{props.children}</Header>;
};

export default HeaderComponent;
