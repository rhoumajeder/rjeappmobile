import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

function ProfileScreen(props) {
  const [val, setVal] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
