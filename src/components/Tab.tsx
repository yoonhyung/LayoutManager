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

const Tab = styled.li<{ isActive: boolean }>`
    background: ${props => (props.isActive ? '#008000' : '#282a36')};
    border-right: 1px solid #191a21;
    color: #e1e1dd;
    cursor: pointer;
    min-width: fit-content;
    padding: 10px;
`;

export const TapComponent = (props: TabProps) => {
    const { title, ...rest } = props;
    return (
        <Tab title={title} {...rest}>
            <span>{title}</span>
        </Tab>
    );
};

TapComponent.defaultProps = defaultProps;
