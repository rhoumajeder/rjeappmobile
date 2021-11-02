import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from "../../config/colors";

const { width, height } = Dimensions.get("screen");
function CheckboxCondition({
  toggleCheckBox1,
  setToggleCheckBox1,
  toggleCheckBox2,
  setToggleCheckBox2,
  toggleCheckBox3,
  setToggleCheckBox3,
  toggleCheckBox4,
  setToggleCheckBox4,
  toggleCheckBox5,
  setToggleCheckBox5,
  toggleCheckBox6,
  setToggleCheckBox6,
  status,
  setValidate,
  validate,
}) {
  useEffect(() => {
    if (status == "Offre Envoyé") setToggleCheckBox1(true);
    else if (status == "Offre Accepted") {
      setToggleCheckBox2(true);
    } else if (status == "Payment") {
      setToggleCheckBox2(true);

      setToggleCheckBox3(true);
    } else if (status == "Meeting") {
      setToggleCheckBox2(true);
      setToggleCheckBox3(true);
      setToggleCheckBox4(true);
      // setValidate(true);
    } else if (status == "Shipment") {
      setToggleCheckBox2(true);
      setToggleCheckBox3(true);
      setToggleCheckBox4(true);
      setToggleCheckBox5(true);

      // setValidate(true);
    } else if (status == "Delivered") {
      setToggleCheckBox2(true);
      setToggleCheckBox3(true);
      setToggleCheckBox4(true);
      setToggleCheckBox5(true);
      setToggleCheckBox6(true);

      // setValidate(true);
    }
  }, []);
  return (
    <>
      <View
        style={{
          width: "98%",
          alignSelf: "center",
          marginTop: height / 100,
          // height: height / /4,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            tintColors={{ true: colors.secondary }}
            disabled={true}
            // disabled={toggleCheckBox2 ? true : false}
            value={toggleCheckBox1}
            onValueChange={(newValue) => {
              setToggleCheckBox1(newValue);
            }}
          />
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Offer Sent</Text>
        </View>
        <View
          style={{
            backgroundColor: toggleCheckBox1 ? colors.secondary : "#E9E7E7",
            height: height / 40,
            width: 5,
            marginLeft: 13,
            marginVertical: -7,
            // alignItems: "center",
            // alignSelf: "flex-start",
            // borderWidth: 1,
            // borderColor: "red",
          }}
        ></View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            tintColors={{ true: colors.secondary }}
            disabled={true}
            // disabled={toggleCheckBox1 ? (toggleCheckBox3 ? true : false) : true}
            value={toggleCheckBox2}
            onValueChange={(newValue) => setToggleCheckBox2(newValue)}
          />
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Offer Accepted
          </Text>
        </View>
        <View
          style={{
            backgroundColor: toggleCheckBox2 ? colors.secondary : "#E9E7E7",
            height: height / 40,
            width: 5,
            marginLeft: 13,
            marginVertical: -7,
          }}
        ></View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            tintColors={{ true: colors.secondary }}
            disabled={true}
            // disabled={toggleCheckBox2 ? (toggleCheckBox4 ? true : false) : true}
            value={toggleCheckBox3}
            disabled={true}
            onValueChange={(newValue) => setToggleCheckBox3(newValue)}
          />
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Payment</Text>
        </View>
        <View
          style={{
            backgroundColor: toggleCheckBox3 ? colors.secondary : "#E9E7E7",
            height: height / 40,

            width: 5,
            marginLeft: 13,
            marginVertical: -7,
          }}
        ></View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            tintColors={{ true: colors.secondary }}
            disabled={true}
            // disabled={toggleCheckBox3 ? (toggleCheckBox5 ? true : false) : true}
            value={toggleCheckBox4}
            onValueChange={(newValue) => setToggleCheckBox4(newValue)}
          />
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Meeting</Text>
        </View>
        <View
          style={{
            backgroundColor: toggleCheckBox4 ? colors.secondary : "#E9E7E7",
            height: height / 40,

            width: 5,
            marginLeft: 13,
            marginVertical: -7,
          }}
        ></View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            tintColors={{ true: colors.secondary }}
            disabled={true}
            // disabled={toggleCheckBox4 ? (toggleCheckBox6 ? true : false) : true}
            value={toggleCheckBox5}
            onValueChange={(newValue) => setToggleCheckBox5(newValue)}
          />
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Shipment</Text>
        </View>
        <View
          style={{
            backgroundColor: toggleCheckBox5 ? colors.secondary : "#E9E7E7",
            height: height / 40,
            width: 5,
            marginLeft: 13,
            marginVertical: -7,
          }}
        ></View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            tintColors={{ true: colors.secondary }}
            // disabled={toggleCheckBox4 ? !toggleCheckBox5 : true}
            disabled={true}
            value={toggleCheckBox6}
            onValueChange={(newValue) => setToggleCheckBox6(newValue)}
          />
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Delivered</Text>
        </View>
      </View>

      <View
        style={{
          borderColor: "#DDDDDD",
          borderBottomWidth: width / 40,
          width: "95%",
          marginTop: height / 100,
          alignSelf: "center",
        }}
      ></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default CheckboxCondition;
