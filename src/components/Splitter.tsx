import React, { Component } from 'react';
import styled from 'styled-components';

type SplitterProps = {
    borderWidth: number;
    resizer: boolean;
    split: string;
    onMouseDown: (event: any) => void;
    onMouseMove: (event: any) => void;
    onMouseUp: (event: any) => void;
};

const defaultProps = {
    borderWidth: 3,
    split: 'vertical',
    resizer: true
};

const SplitterDiv = styled.div<SplitterProps>`
    background: #ff1493;
    cursor: ${props => (props.split === 'vertical' ? 'w-resize' : 'n-resize')};
    flex: none;
    height: ${props => (props.split === 'vertical' ? '100%' : `${props.borderWidth}px`)};
    width: ${props => (props.split === 'vertical' ? `${props.borderWidth}px` : '100%')};
`;

class Splitter extends Component<SplitterProps> {
    static defaultProps = defaultProps;

    onMouseDown = (event: any) => {
        this.props.onMouseDown(event);
    };

    onMouseMove = (event: any) => {
        this.props.onMouseMove(event);
    };

    onMouseUp = (event: any) => {
        this.props.onMouseUp(event);
    };

    render() {
        const splitterProps = {
            ...this.props,
            onMouseDown: this.onMouseDown,
            onMouseMove: this.onMouseMove,
            onMouseUp: this.onMouseUp
        };

        return <SplitterDiv {...splitterProps} />;
    }
}

export default Splitter;
