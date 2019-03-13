import React from 'react';
import styled from 'styled-components';

type RootProps = {
    children?: import('react').ReactNode;
};

const Root = styled.div`
    background: #282a36;
    display: flex;
    height: 100%;
    width: 100%;
`;

const RootComponent = (props: RootProps) => {
    return <Root>{props.children}</Root>;
};

export default RootComponent;
