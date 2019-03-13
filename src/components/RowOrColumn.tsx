import React, { Component, Children, createRef } from 'react';
import Pane from './Pane';
import Splitter from './Splitter';
import styled from 'styled-components';
import { unFocus } from '../utils/utils';

type RowOrColumnProps = {
    allowDock: boolean;
    allowResize: boolean;
    borderSize?: number;
    children?: import('react').ReactNode;
    dockThereholdSize: number;
    type: 'row' | 'column';
    primary?: 'first' | 'second';
    size?: number | string | undefined;
};

type RowOrColumnState = {
    active: boolean;
    firstPaneSize: number | string | undefined;
    secondPaneSize: number | string | undefined;
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
    allowDock: true,
    allowResize: true,
    borderSize: 2,
    dockThereholdSize: 20,
    type: 'row',
    primary: 'first'
};

const getInitializeState = (props: RowOrColumnProps): RowOrColumnState => {
    return {
        active: false,
        firstPaneSize: props.size || undefined,
        secondPaneSize: props.size || undefined
    };
};

class RowOrColumn extends Component<RowOrColumnProps, RowOrColumnState> {
    static defaultProps = defaultProps;

    rowOrColumnRef = createRef<HTMLDivElement>();
    firstPaneRef = createRef<Pane>();
    secondPaneRef = createRef<Pane>();

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
            this.updateSize(event);
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

    getRowOrColumnInstance = () => {
        return this.rowOrColumnRef.current;
    };

    getFirstPaneInstance = () => {
        return this.firstPaneRef.current.getInstance();
    };

    getSecondPaneInstance = () => {
        return this.secondPaneRef.current.getInstance();
    };

    updateSize = (event: any) => {
        const { clientX, clientY } = event;
        const { allowDock, borderSize, dockThereholdSize } = this.props;
        const rowOrColumnPosition = this.getRowOrColumnInstance().getBoundingClientRect();
        const currentSize = this.isRow() ? clientX : clientY;
        const maxSize = (this.isRow() ? rowOrColumnPosition.right : rowOrColumnPosition.height) - borderSize;

        unFocus(document, window);

        if (this.isPrimaryFirst()) {
            const targetSize = allowDock ? (currentSize <= dockThereholdSize ? 0 : currentSize) : currentSize;
            const resizedSize = targetSize >= maxSize ? maxSize : targetSize;

            this.setState({
                firstPaneSize: resizedSize
            });
        } else {
            const caculatedSize = maxSize - currentSize;
            const targetSize = allowDock ? (caculatedSize <= dockThereholdSize ? 0 : caculatedSize) : caculatedSize;
            const resizedSize = targetSize >= maxSize ? maxSize : targetSize;

            this.setState({
                secondPaneSize: resizedSize
            });
        }
    };

    convertArrayChildren(children: import('react').ReactNode) {
        return Children.toArray(children);
    }

    isPrimaryFirst = () => {
        const { primary } = this.props;

        return primary === 'first';
    };

    isRow = () => {
        const { type } = this.props;

        return type === 'row';
    };

    render() {
        const { borderSize, children } = this.props;
        const { firstPaneSize, secondPaneSize } = this.state;
        const childrenComponent = this.convertArrayChildren(children);

        const RowOrColumn = this.isRow() ? RowDiv : ColumnDiv;
        const split = this.isRow() ? 'vertical' : 'horizontal';

        const splitterProps = {
            borderSize,
            split,
            onMouseDown: this.onMouseDown,
            onMouseMove: this.onMouseMove,
            onMouseUp: this.onMouseUp
        };

        const firstPaneProps = {
            split,
            ref: this.firstPaneRef,
            size: this.isPrimaryFirst() ? firstPaneSize : undefined
        };

        const secondPaneProps = {
            split,
            ref: this.secondPaneRef,
            size: this.isPrimaryFirst() ? undefined : secondPaneSize
        };

        return (
            <RowOrColumn ref={this.rowOrColumnRef}>
                <Pane {...firstPaneProps}>{childrenComponent[0] || null}</Pane>

                <Splitter {...splitterProps} />

                <Pane {...secondPaneProps}>{childrenComponent[1] || null}</Pane>
            </RowOrColumn>
        );
    }
}

export default RowOrColumn;
