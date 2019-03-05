import React from 'react';
import styled from 'styled-components';

type ItemContainerProps = {
    children?: import('react').ReactNode;
    hasHeader: boolean;
};

const ItemContainer = styled.div<ItemContainerProps>`
    background: #282a36;
    color: #e1e1dd;
    height: ${props => (props.hasHeader ? `calc(100% - 38px)` : '100%')};
    width: 100%;
`;

const ContentItem = styled.div`
    text-align: center;
`;

const ItemContainerComponent = (props: ItemContainerProps) => {
    return (
        <ItemContainer {...props}>
            <ContentItem>{props.children}</ContentItem>
        </ItemContainer>
    );
};

ItemContainerComponent.defaultProps = {
    hasHeader: true
};

export default ItemContainerComponent;
