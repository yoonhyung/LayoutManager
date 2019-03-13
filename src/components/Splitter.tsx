import React, { Component } from 'react';
import styled from 'styled-components';

type SplitterProps = {
    borderSize: number;
    resizer: boolean;
    split: string;
    onMouseDown: (event: any) => void;
    onMouseMove: (event: any) => void;
    onMouseUp: (event: any) => void;
};

const defaultProps = {
    borderSize: 3,
    split: 'vertical',
    resizer: true
};

const SplitterDiv = styled.div<SplitterProps>`
    cursor: ${props => (props.split === 'vertical' ? 'col-resize' : 'row-resize')};
    flex: none;
`;

const InnerSplitter = styled.div<SplitterProps>`
    background: #ff1493;
    height: ${props => (props.split === 'vertical' ? '100%' : `${props.borderSize}px`)};
    width: ${props => (props.split === 'vertical' ? `${props.borderSize}px` : '100%')};
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

        return (
            <SplitterDiv {...splitterProps}>
                <InnerSplitter {...this.props} />
            </SplitterDiv>
        );
    }
}

export default Splitter;
