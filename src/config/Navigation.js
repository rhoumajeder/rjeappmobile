import React from "react";
import { View, StyleSheet } from "react-native";
import LoginScreen from "../screens/Login";
import SignupScreen from "../screens/Signup";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ShoppingScreen from "../screens/ShoppingScreen";
import MyRequest from "../screens/MyRequest";
import MyOffer from "../screens/MyOffer";
import Publier from "../screens/Publier";
import ProfileScreen from "../screens/ProfileScreen";
import RecordDetailScreen from "../screens/RecordDetailScreen";
import ListOfferScreen from "../screens/ListOfferScreen";
import ListRequestScreen from "../screens/ListRequestScreen";
import MyOfferProposition from "../screens/MyOfferProposition";
import MyRequestProposition from "../screens/MyRequestProposition";
import check from "../screens/check";
// import colors from './colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const PublisherStack = (props) => (
  <Stack.Navigator
    // initialRouteName=""
    screenOptions={{
      headerBackTitle: "",
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name="loginscreen" component={LoginScreen} />
    <Stack.Screen name="signupscreen" component={SignupScreen} />
    <Stack.Screen name="Publier" component={Publier} />
  </Stack.Navigator>
);

const Navigation = (props) => (
  <Stack.Navigator
    initialRouteName="BottomTabNavigator"
    screenOptions={{
      headerBackTitle: "",
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name="HomeScreen" component={BottomTabNavigator} />
    <Stack.Screen name="RecordDetailScreen" component={RecordDetailScreen} />
    <Stack.Screen name="MyOfferScreen" component={MyOffer} />
    <Stack.Screen name="MyOfferProposition" component={MyOfferProposition} />
    <Stack.Screen
      name="MyRequestProposition"
      component={MyRequestProposition}
    />
    <Stack.Screen name="ListOfferScreen" component={ListOfferScreen} />

    <Stack.Screen name="MyRequestScreen" component={MyRequest} />
  </Stack.Navigator>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator // initialRouteName=""
      screenOptions={{
        headerBackTitle: "",
        headerShown: false,
        tabBarActiveTintColor: "#00aff5",
        tabBarHideOnKeyboard: true,
        style: {
          position: "absolute",
        },
      }}
    >
      <Tab.Screen
        name="HomeScreena"
        component={HomeScreen}
        options={{
          tabBarLabel: "Rechercher",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="PublisherStack"
        component={PublisherStack}
        options={{
          tabBarLabel: "CreateRecord",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="pluscircleo" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyOffer"
        component={ListOfferScreen}
        options={{
          tabBarLabel: "My Offers",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="notification" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyRequest"
        component={ListRequestScreen}
        options={{
          tabBarLabel: "My Request",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="notification-clear-all"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ShoppingScreen"
        component={ShoppingScreen}
        options={{
          tabBarLabel: "Shopping",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export { Navigation, BottomTabNavigator };
