import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Button = (props) => {
  const { btnStl, btnTxt, txt, navigation, navigate } = props;
  return (
    <TouchableOpacity
      style={btnStl}
      onPress={() => navigation.replace(navigate)}
    >
      <Text style={btnTxt}>{txt}</Text>
    </TouchableOpacity>
  );
};
//test
const styles = StyleSheet.create({});
export default Button;
