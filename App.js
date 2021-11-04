/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from "react";
import { StatusBar, StyleSheet, LogBox, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/config/Navigation";

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    LogBox.ignoreLogs(["Possible Unhandled Promise Rejection"]);
  }, []);
  return (
    <>
      <View>
        {Platform.OS === "ios" ? (
          <StatusBar barStyle="dark-content" />
        ) : (
          <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
        )}
      </View>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
