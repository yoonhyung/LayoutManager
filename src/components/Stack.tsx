import React from 'react';
import styled from 'styled-components';

type StackProps = {
    children?: import('react').ReactNode;
    isShow: boolean;
    height: string;
    width: string;
};

const Stack = styled.div<StackProps>`
    background: #00bfff;
    display: ${props => (props.isShow ? 'block' : 'none')}
    flex: ${props => (props.width ? `0 0 ${props.width}px` : 'auto')};
    height: ${props => (props.height ? `${props.height}px` : '100%')};
`;

const StackComponent = (props: StackProps) => {
    return <Stack {...props}>{props.children}</Stack>;
};

StackComponent.defaultProps = {
    hasHeader: true,
    isShow: true,
    height: '',
    width: ''
};

export default StackComponent;
