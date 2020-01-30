import React, {Component} from 'react';
import {SafeAreaView} from 'react-navigation';
import {
  Layout,
  Text,
  TopNavigation,
  Divider,
  Button,
  Icon,
} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

export const FacebookIcon = style => <Icon name="facebook" {...style} />;

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <TopNavigation title="MyApp" alignment="center" />
        <Divider />
        <Layout style={styles.container}>
          <Text style={styles.textSubTitle}>Login Success</Text>
          <Text style={styles.textTitle}>Hello World</Text>
          <Button icon={FacebookIcon}>Login with Facebook</Button>
        </Layout>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  textSubTitle: {
    fontSize: 14,
    marginBottom: '10%',
    textAlign: 'center',
  },
});
