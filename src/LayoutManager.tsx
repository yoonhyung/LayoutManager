import React, { PureComponent } from 'react';
import Header from './components/Header';
import ItemContainer from './components/ItemContainer';
import RootComponent from './components/Root';
import RowOrColumn from './components/RowOrColumn';
import Stack from './components/Stack';
import Tap from './components/Tab';

type LayoutManagerProps = {};
type LayoutManagerState = {};

export default class LayoutManager extends PureComponent<LayoutManagerProps, LayoutManagerState> {
    init() {
        return this.createElement();
    }

    createElement() {
        return (
            <RowOrColumn type="row" size={300} borderWidth={2}>
                <Stack>
                    <Header>
                        <Tap title="Explorer" isActive={true} />
                        <Tap title="Git" />
                    </Header>
                    <ItemContainer>Left Container</ItemContainer>
                </Stack>

                <RowOrColumn type="column" primary="second" size={300} borderWidth={2}>
                    <RowOrColumn type="row" primary="second" size={300} borderWidth={2}>
                        <Stack>
                            <Header>
                                <Tap title="LayoutManager.tsx" />
                                <Tap title="Stack.tsx" isActive={true} />
                            </Header>
                            <ItemContainer>Center Container</ItemContainer>
                        </Stack>

                        <Stack>
                            <ItemContainer hasHeader={false}>Right Container</ItemContainer>
                        </Stack>
                    </RowOrColumn>

                    <Stack>
                        <Header>
                            <Tap title="Problem" />
                            <Tap title="Console" />
                            <Tap title="Output" isActive={true} />
                            <Tap title="Debug" />
                        </Header>
                        <ItemContainer>Bottom Container</ItemContainer>
                    </Stack>
                </RowOrColumn>
            </RowOrColumn>
        );
    }

    render() {
        return <RootComponent>{this.init()}</RootComponent>;
    }
}
