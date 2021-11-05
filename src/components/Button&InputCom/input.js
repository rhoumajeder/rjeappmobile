import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import colors from "../../config/colors";

const InputField = (props) => {
  const { placeholder, type, secureTextEntry, value } = props;
  return (
    <TextInput
      value={value}
      keyboardType={type}
      secureTextEntry={secureTextEntry}
      style={styles.fieldStl}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  fieldStl: {
    backgroundColor: colors.light,
    padding: 20,
    borderRadius: 18,
    fontSize: 18,
    marginVertical: 10,
    width: "90%",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 5,

    shadowColor: "#000",
  },
});
export default InputField;
