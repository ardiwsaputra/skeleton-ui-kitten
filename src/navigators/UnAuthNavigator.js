import React from 'react';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
} from '@ui-kitten/components';
import HomeScreen from '../screens/auth/Home';

const UsersScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1">USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1">ORDERS</Text>
  </Layout>
);

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
        <BottomNavigationTab title="USERS" />
        <BottomNavigationTab title="ORDERS" />
        <BottomNavigationTab title="HOME" />
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
