
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bookt from './screens/bookt';
import Search from './screens/search';
import New from './screens/new';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>
  );
}
}
const tabnavigator =createBottomTabNavigator({
  transaction : {screen:Bookt},
  searchbook :{screen:Search},
  newbook :{screen:New}
})
const AppContainer = createAppContainer(tabnavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
