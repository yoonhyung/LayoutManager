import React, { ReactNode } from 'react';
import styled from 'styled-components';

type ItemContainerProps = {
    children?: ReactNode;
};

const ItemContainer = styled.div`
    background: '#daa520';
    height: 100%;
    width: 100%;
`;

export const ItemContainerComponent = (props: ItemContainerProps) => {
    return <ItemContainer>{props.children}</ItemContainer>;
};
