import React from 'react';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import HomeScreen from '../screens/auth/Home';
import UsersScreen from '../screens/auth/UserScreen';
import OrdersScreen from '../screens/auth/OrderScreen';

const TabBarComponent = ({navigation}) => {
  const onSelect = index => {
    const selectedTabRoute = navigation.state.routes[index];
    navigation.navigate(selectedTabRoute.routeName);
  };

  return (
    <SafeAreaView>
      <BottomNavigation
        selectedIndex={navigation.state.index}
        onSelect={onSelect}>
        <BottomNavigationTab title="HOME" />
        <BottomNavigationTab title="ORDERS" />
        <BottomNavigationTab title="USERS" />
      </BottomNavigation>
    </SafeAreaView>
  );
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Users: UsersScreen,
    Orders: OrdersScreen,
  },
  {
    tabBarComponent: TabBarComponent,
  },
);

const UnAuthStack = createStackNavigator(
  {
    BottomStack: {
      screen: TabNavigator,
      navigationOptions: {
        cardStack: {
          gesturesEnabled: false,
        },
      },
    },
    headerMode: 'none',
  },
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        cardStack: {
          gesturesEnabled: false,
        },
      },
    },
    headerMode: 'none',
  },
);

export default createAppContainer(UnAuthStack);
