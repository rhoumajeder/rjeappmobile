import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Modal from "react-native-modal";
const ActivityInd = (props) => {
  const { visible, label } = props;
  return (
    <>
      <Modal isVisible={visible}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator
            size="large"
            color={"#fff"}
            style={{ margin: "10%" }}
          />
          <Text style={{ color: "#fff", fontSize: 15 }}>{label}</Text>
        </View>
      </Modal>
    </>
  );
};
export default ActivityInd;
