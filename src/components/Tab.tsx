import React from 'react';
import styled from 'styled-components';

type TabProps = {
    draggable: boolean;
    isActive: boolean;
    isCloasble: boolean;
    title: string;
};

const defaultProps = {
    draggable: true,
    isActive: false,
    isCloasble: true,
    title: 'Unnamed'
};

const TabLi = styled.li<{ isActive: boolean }>`
    background: ${props => (props.isActive ? '#282a36' : '#21222c')};
    border-right: 1px solid #191a21;
    color: #e1e1dd;
    cursor: pointer;
    min-width: fit-content;
    padding: 10px;
`;

const Tap = (props: TabProps) => {
    const { title, ...rest } = props;

    return (
        <TabLi title={title} {...rest}>
            <span>{title}</span>
        </TabLi>
    );
};

Tap.defaultProps = defaultProps;

export default Tap;
