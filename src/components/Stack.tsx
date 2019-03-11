import React, { Component } from 'react';
import styled from 'styled-components';

type StackProps = {
    children?: import('react').ReactNode;
    height: string;
    width: string;
};

const StackDiv = styled.div<StackProps>`
    background: #00bfff;
    flex: ${props => (props.width ? `0 0 ${props.width}px` : 'auto')};
    height: ${props => (props.height ? `${props.height}px` : '100%')};
`;

const defaultProps = {
    hasHeader: true,
    height: '',
    width: ''
};

class Stack extends Component<StackProps> {
    static defaultProps = defaultProps;

    render() {
        const { children } = this.props;

        return <StackDiv {...this.props}>{children}</StackDiv>;
    }
}

export default Stack;
