import React, { ReactNode } from 'react';
import styled from 'styled-components';

type StackProps = {
    children?: ReactNode;
};

const Stack = styled.div`
    background: #00bfff;
    width: 100%;
    height: 100%;
`;

export const StackComponent = (props: StackProps) => {
    return <Stack>{props.children}</Stack>;
};
