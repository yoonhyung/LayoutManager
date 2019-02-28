import React, { ReactNode } from 'react';
import styled from 'styled-components';

type RootProps = {
    children?: ReactNode;
};

const Root = styled.div`
    background: #f0f0f0;
    display: flex;
    height: 100%;
    width: 100%;
`;

export const RootComponent = (props: RootProps) => {
    return <Root>{props.children}</Root>;
};
