import React from 'react';
import styled from 'styled-components';

type HeaderProps = {
    children?: import('react').ReactNode;
};

type HeaderState = {};

const HeaderUl = styled.ul`
    background: #191a21;
    border-bottom: 1px solid #191a21;
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

const Header = (props: HeaderProps) => {
    return <HeaderUl>{props.children}</HeaderUl>;
};

export default Header;
