/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SWRConfig} from 'swr';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import swrConfig from './swr-config';
import {TradeProvider} from './contexts/trade-context';
import Tabs from './navigation/tabs';

function App(): JSX.Element {
  return (
    <TradeProvider>
      <SafeAreaProvider>
        <SWRConfig value={swrConfig}>
          <GestureHandlerRootView style={{flex: 1}}>
            <NavigationContainer>
              <Tabs />
            </NavigationContainer>
          </GestureHandlerRootView>
        </SWRConfig>
      </SafeAreaProvider>
    </TradeProvider>
  );
}

export default App;
