import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import RootNavigator from './src/navigators/RootNavigator';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {default as appTheme} from './src/styles/custom-theme.json';
import {default as customMapping} from './src/styles/custom-mapping.json';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
]);

const theme = {...lightTheme, ...appTheme};

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider
          mapping={mapping}
          customMapping={customMapping}
          theme={theme}>
          <Provider store={store}>
            <RootNavigator />
          </Provider>
        </ApplicationProvider>
      </React.Fragment>
    );
  }
}
