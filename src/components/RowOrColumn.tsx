import React from 'react';
import styled from 'styled-components';

type RowOrColumnProps = {
    type: string;
    children?: import('react').ReactNode;
};

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const defaultProps = {
    type: 'row'
};

const RowOrColumnComponent = (props: RowOrColumnProps) => {
    return props.type === 'row' ? <Row>{props.children}</Row> : <Column>{props.children}</Column>;
};

RowOrColumnComponent.defaultProps = defaultProps;

export default RowOrColumnComponent;
