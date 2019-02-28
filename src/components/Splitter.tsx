import React from 'react';
import styled from 'styled-components';

type SplitterProps = {
    borderWidth: number;
    draggable: boolean;
    isVertical: boolean;
};

const Splitter = styled.div<SplitterProps>`
    background: #ff1493;
    cursor: ${props => (props.isVertical ? 'w-resize' : 'n-resize')};
    flex: none;
    height: ${props => (props.isVertical ? '100%' : `${props.borderWidth}px`)};
    width: ${props => (props.isVertical ? `${props.borderWidth}px` : '100%')};
`;

export const SplitterComponent = (props: SplitterProps) => {
    return <Splitter {...props} />;
};

SplitterComponent.defaultProps = {
    borderWidth: 5,
    draggable: true,
    isVertical: true
};
