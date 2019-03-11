import React from 'react';
import styled from 'styled-components';

type ItemContainerProps = {
    children?: import('react').ReactNode;
    hasHeader: boolean;
};

const ItemContainerDiv = styled.div<ItemContainerProps>`
    background: #282a36;
    color: #e1e1dd;
    height: ${props => (props.hasHeader ? `calc(100% - 38px)` : '100%')};
    width: 100%;
`;

const ContentItemDiv = styled.div`
    text-align: center;
`;

const ItemContainer = (props: ItemContainerProps) => {
    return (
        <ItemContainerDiv {...props}>
            <ContentItemDiv>{props.children}</ContentItemDiv>
        </ItemContainerDiv>
    );
};

ItemContainer.defaultProps = {
    hasHeader: true
};

export default ItemContainer;
