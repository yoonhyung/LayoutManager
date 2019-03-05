import React, { PureComponent } from 'react';
import HeaderComponent from './components/Header';
import ItemContainerComponent from './components/ItemContainer';
import RootComponent from './components/Root';
import RowOrColumnComponent from './components/RowOrColumn';
import SplitterComponent from './components/Splitter';
import StackComponent from './components/Stack';
import TapComponent from './components/Tab';

type LayoutManagerProps = {};
type LayoutManagerState = {};

export default class LayoutManager extends PureComponent<LayoutManagerProps, LayoutManagerState> {
    init() {
        return this.createElement();
    }

    createElement() {
        return (
            <RowOrColumnComponent type="row">
                <StackComponent width="300">
                    <HeaderComponent>
                        <TapComponent title="Explorer" isActive={true} />
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
                                <TapComponent title="Stack.tsx" isActive={true} />
                            </HeaderComponent>
                            <ItemContainerComponent>Center Container</ItemContainerComponent>
                        </StackComponent>

                        <SplitterComponent isVertical={true} />

                        <StackComponent width="300">
                            <ItemContainerComponent hasHeader={false}>Right Container</ItemContainerComponent>
                        </StackComponent>
                    </RowOrColumnComponent>

                    <SplitterComponent isVertical={false} />

                    <StackComponent height="300">
                        <HeaderComponent>
                            <TapComponent title="Problem" />
                            <TapComponent title="Console" />
                            <TapComponent title="Output" isActive={true} />
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
