import React, { ReactNode } from 'react';
import styled from 'styled-components';

type ItemContainerProps = {
    children?: ReactNode;
};

const ItemContainer = styled.div`
    background: #282a36;
    color: #e1e1dd;
    height: 100%;
    text-align: center;
    width: 100%;
`;

export const ItemContainerComponent = (props: ItemContainerProps) => {
    return <ItemContainer>{props.children}</ItemContainer>;
};
