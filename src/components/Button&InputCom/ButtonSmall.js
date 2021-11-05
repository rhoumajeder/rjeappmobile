import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";

const Buttons = (props) => {
  const { btnStl, btnTxt, txt, navigation, navigate, onPress, btnSmall } =
    props;
  return (
    <>
      {btnSmall === true ? (
        <TouchableOpacity style={btnStl} onPress={onPress}>
          <Text style={btnTxt}>{txt}</Text>
        </TouchableOpacity>
      ) : null}
    </>
  );
};
export default Buttons;
