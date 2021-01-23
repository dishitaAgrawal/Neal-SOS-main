import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { AppStackNavigator } from "./AppStackNavigator";
import BookRequestScreen from "../screens/BookRequestScreen";

export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/request-list.png")}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: "Home",
    },
  },
  AddEmerContacts: {
    screen: AddEmerContacts,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/request-book.png")}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: "Emergency Contacts",
    },
  },
});
