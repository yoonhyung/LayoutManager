import React, { Component, Children, createRef } from 'react';
import Pane from './Pane';
import Splitter from './Splitter';
import styled from 'styled-components';

type RowOrColumnProps = {
    allowResize: boolean;
    borderWidth?: number;
    children?: import('react').ReactNode;
    type: 'row' | 'column';
    primary?: 'first' | 'second';
    size?: number | string | undefined;
};

type RowOrColumnState = {
    active: boolean;
    pane1Size: number | string | undefined;
    pane2Size: number | string | undefined;
};

const RowDiv = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    height: 100%;
    overflow: hidden;
`;

const ColumnDiv = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    width: 100%;
`;

const defaultProps = {
    allowResize: true,
    borderWidth: 3,
    type: 'row',
    primary: 'first'
};

const unFocus = (document: any, window: any) => {
    if (document.selection) {
        document.selection.empty();
    } else {
        try {
            window.getSelection().removeAllRanges();
            // eslint-disable-next-line no-empty
        } catch (e) {}
    }
};

const getInitializeState = (props: RowOrColumnProps) => {
    return {
        active: false,
        pane1Size: props.size || undefined,
        pane2Size: props.size || undefined
    };
};

class RowOrColumn extends Component<RowOrColumnProps, RowOrColumnState> {
    static defaultProps = defaultProps;

    rowOrColumnRef = createRef<HTMLDivElement>();
    pane1Ref = createRef<Pane>();
    pane2Ref = createRef<Pane>();

    state = getInitializeState(this.props);

    componentDidMount() {
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    }

    onMouseUp = () => {
        const { allowResize } = this.props;
        const { active } = this.state;

        if (allowResize && active) {
            this.setState({
                active: false
            });
        }
    };

    onMouseMove = (event: any) => {
        const { allowResize } = this.props;
        const { active } = this.state;

        if (allowResize && active) {
            this.getSizeUpdate(event);
        }
    };

    onMouseDown = () => {
        const { allowResize } = this.props;

        unFocus(document, window);

        if (allowResize) {
            this.setState({
                active: true
            });
        }
    };

    getSizeUpdate = (event: any) => {
        const { type, primary } = this.props;
        const { clientX, clientY } = event;
        const dockingThresholdValue = 20;

        unFocus(document, window);

        if (primary === 'first') {
            const resizedWidth = clientX <= dockingThresholdValue ? 0 : clientX;
            const resizedHeight = clientY <= dockingThresholdValue ? 0 : clientY;

            this.setState({
                pane1Size: type === 'row' ? resizedWidth : resizedHeight
            });
        } else {
            const { innerWidth, innerHeight } = window;

            const resizedWidth = innerWidth - clientX <= dockingThresholdValue ? 0 : innerWidth - clientX;
            const resizedHeight = innerHeight - clientY <= dockingThresholdValue ? 0 : innerHeight - clientY;

            this.setState({
                pane2Size: type === 'row' ? resizedWidth : resizedHeight
            });
        }
    };

    convertArrayChildren(children: import('react').ReactNode) {
        return Children.toArray(children);
    }

    render() {
        const { borderWidth, children, primary, type } = this.props;
        const { pane1Size, pane2Size } = this.state;
        const childrenComponent = this.convertArrayChildren(children);

        let RowOrColumn = null;
        let split = null;

        if (type === 'row') {
            RowOrColumn = RowDiv;
            split = 'vertical';
        } else {
            RowOrColumn = ColumnDiv;
            split = 'horizontal';
        }

        const splitterProps = {
            borderWidth,
            split,
            onMouseDown: this.onMouseDown,
            onMouseMove: this.onMouseMove,
            onMouseUp: this.onMouseUp
        };

        const pane1Props = {
            size: primary === 'first' ? pane1Size : undefined,
            split
        };

        const pane2Props = {
            size: primary === 'second' ? pane2Size : undefined,
            split
        };

        return (
            <RowOrColumn ref={this.rowOrColumnRef}>
                <Pane ref={this.pane1Ref} {...pane1Props}>
                    {childrenComponent[0]}
                </Pane>

                <Splitter {...splitterProps} />

                <Pane ref={this.pane2Ref} {...pane2Props}>
                    {childrenComponent[1]}
                </Pane>
            </RowOrColumn>
        );
    }
}

export default RowOrColumn;
