import React from "react";
import { StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Icon } from "native-base";

import ExploreScreen from "./src/screens/explore/ExploreScreen";
import MatchScreen from "./src/screens/match/MatchScreen";

import MessageScreen from "./src/screens/message/MessageScreen";
import ProfileScreen from "./src/screens/profile/ProfileScreen";

const createNavigationIcon = (name, tintColor) => (
  <Icon name={name} style={[styles.icon, { color: tintColor }]} />
);

const App = createBottomTabNavigator(
  {
    EXPLORE: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          createNavigationIcon("ios-search", tintColor)
      }
    },
    MATCHES: {
      screen: MatchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          createNavigationIcon("ios-heart", tintColor)
      }
    },
    CHAT: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          createNavigationIcon("ios-chatbubbles", tintColor)
      }
    },
    PROFILE: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          createNavigationIcon("ios-person", tintColor)
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "rgb(138,43,226)"
    }
  }
);

const styles = StyleSheet.create({
  icon: { fontSize: 18, marginTop: 10 }
});

export default createAppContainer(App);
