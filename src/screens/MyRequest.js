import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import colors from "../config/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CheckboxCondition from "../components/CheckboxCom/CheckboxCondition";
import ReqCard from "../components/RequestCom/ReqCard";
const { width, height } = Dimensions.get("screen");

function MyRequest({ navigation, route }) {
  const { status, userName, rating } = route.params;
  const [toggleCheckBox1, setToggleCheckBox1] = useState(true);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
  const [toggleCheckBox4, setToggleCheckBox4] = useState(false);
  const [toggleCheckBox5, setToggleCheckBox5] = useState(false);
  const [toggleCheckBox6, setToggleCheckBox6] = useState(false);
  const [validate, setValidate] = useState(false);
  const [confirmCode, setConfirmCode] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  // const [offerCard, setOfferCard] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // margin: 10,

            margin: height / 100,

            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="arrow-back"
              color={colors.secondary}
              size={40}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 20,
              fontWeight: "600",
              fontSize: 22,
              color: colors.grey,
            }}
          >
            My Request
          </Text>
        </View>
        <View
          style={{
            borderColor: "#DDDDDD",
            borderWidth: 1,
            width: "90%",
            // marginTop: 20,
            alignSelf: "center",
          }}
        ></View>
        <ScrollView>
          <CheckboxCondition
            toggleCheckBox1={toggleCheckBox1}
            setToggleCheckBox1={setToggleCheckBox1}
            toggleCheckBox2={toggleCheckBox2}
            setToggleCheckBox2={setToggleCheckBox2}
            toggleCheckBox3={toggleCheckBox3}
            setToggleCheckBox3={setToggleCheckBox3}
            toggleCheckBox4={toggleCheckBox4}
            setToggleCheckBox4={setToggleCheckBox4}
            toggleCheckBox5={toggleCheckBox5}
            setToggleCheckBox5={setToggleCheckBox5}
            toggleCheckBox6={toggleCheckBox6}
            setToggleCheckBox6={setToggleCheckBox6}
            status={status}
            setValidate={setValidate}
            validate={validate}
          />
          <View style={{ flex: 1 }}>
            <ReqCard
              toggleCheckBox1={toggleCheckBox1}
              toggleCheckBox2={toggleCheckBox2}
              toggleCheckBox3={toggleCheckBox3}
              toggleCheckBox4={toggleCheckBox4}
              toggleCheckBox5={toggleCheckBox5}
              toggleCheckBox6={toggleCheckBox6}
              setValidate={setValidate}
              validate={validate}
              status={status}
              userName={userName}
              rating={rating}
              navigation={navigation}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#FFF",
  },
});

export default MyRequest;
