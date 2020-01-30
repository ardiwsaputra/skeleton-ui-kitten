import {createAppContainer, createSwitchNavigator} from 'react-navigation';

// import Auth from './AuthNavigator';
import UnAuthStack from './UnAuthNavigator';

const App = createSwitchNavigator({
  App: {
    screen: UnAuthStack,
  },
});

export default createAppContainer(App);
