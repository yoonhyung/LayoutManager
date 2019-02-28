import React, { PureComponent } from 'react';
import { StackComponent } from './components/Stack';
import { RootComponent } from './components/Root';
import { RowOrColumnComponent } from './components/RowOrColumn';
import { SplitterComponent } from './components/Splitter';
import { TapComponent } from './components/Tab';
import { HeaderComponent } from './components/Header';
import { ItemContainerComponent } from './components/ItemContainer';

interface LayoutManagerProps {}
interface LayoutManagerState {}

export default class LayoutManager extends PureComponent<LayoutManagerProps, LayoutManagerState> {
    init() {
        return this.createElement();
    }

    createElement() {
        return (
            <RowOrColumnComponent type="row">
                <StackComponent>
                    <HeaderComponent>
                        <TapComponent title="Explorer" />
                        <TapComponent title="Git" />
                    </HeaderComponent>
                    <ItemContainerComponent>Left Container</ItemContainerComponent>
                </StackComponent>

                <SplitterComponent isVertical={true} />

                <RowOrColumnComponent type="column">
                    <RowOrColumnComponent type="row">
                        <StackComponent>
                            <HeaderComponent>
                                <TapComponent title="LayoutManager.tsx" />
                                <TapComponent title="Stack.tsx" />
                            </HeaderComponent>
                            <ItemContainerComponent>Center Container</ItemContainerComponent>
                        </StackComponent>

                        <SplitterComponent isVertical={true} />

                        <StackComponent>
                            <ItemContainerComponent>Right Container</ItemContainerComponent>
                        </StackComponent>
                    </RowOrColumnComponent>

                    <SplitterComponent isVertical={false} />

                    <StackComponent>
                        <HeaderComponent>
                            <TapComponent title="Console" />
                            <TapComponent title="Output" />
                            <TapComponent title="Debug" />
                        </HeaderComponent>
                        <ItemContainerComponent>Bottom Container</ItemContainerComponent>
                    </StackComponent>
                </RowOrColumnComponent>
            </RowOrColumnComponent>
        );
    }

    render() {
        return <RootComponent>{this.init()}</RootComponent>;
    }
}
