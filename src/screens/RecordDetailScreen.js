import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Slider from "react-native-slider";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import RecordDetail from "../components/HomeScreenCardCom/RecordDetail";
import colors from "../config/colors";

function RecordDetailScreen({ navigation }) {
  const [val, setVal] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: 10,

          justifyContent: "flex-start",
        }}
      >
        <MaterialIcons name="arrow-back" color={colors.secondary} size={40} />
      </TouchableOpacity>

      <RecordDetail />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
});

export default RecordDetailScreen;
