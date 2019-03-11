import React, { Component, createRef } from 'react';
import styled from 'styled-components';

type PaneProps = {
    children?: import('react').ReactNode;
    split: string;
    size?: number | string | undefined;
};

const PaneDiv = styled.div<PaneProps>`
    flex: 1;
`;

const defaultProps = {
    split: 'vertical'
};

class Pane extends Component<PaneProps> {
    static defaultProps = defaultProps;

    paneRef = createRef<HTMLDivElement>();

    render() {
        const { children, size, split } = this.props;
        let style = undefined;

        if (size !== undefined) {
            if (split === 'vertical') {
                style = {
                    flex: 'none',
                    width: size
                };
            } else {
                style = {
                    flex: 'none',
                    height: size
                };
            }
        }

        return (
            <PaneDiv ref={this.paneRef} style={style} {...this.props}>
                {children}
            </PaneDiv>
        );
    }
}

export default Pane;
