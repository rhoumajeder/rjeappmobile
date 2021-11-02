import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Platform,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import InputField from "../components/Button&InputCom/input";
import Button from "../components/Button&InputCom/Button";
import colors from "../config/colors";
const { width, height } = Dimensions.get("screen");
const SignUp = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#FFF" }}>
      <SafeAreaView style={styles.container}>
        <View style={{ width: "80%", marginLeft: "-10%" }}>
          <Text style={styles.headerText}>Renseignes vos identifiants</Text>
        </View>
        <InputField
          placeholder="Email"
          type="email-address"
          secureTextEntry={false}
        />
        <InputField placeholder="password" secureTextEntry={true} />
        <InputField
          placeholder="Phone Number"
          type="number-pad"
          secureTextEntry={false}
        />
        <Button
          btnStl={styles.btnStl}
          btnTxt={styles.btnTxt}
          txt="Register"
          navigate="Publier"
          navigation={navigation}
        />
        <View style={{ width: "90%", marginTop: 20 }}>
          <Text
            style={{
              color: colors.primary,
              fontSize: 18,
              marginVertical: 5,
              fontWeight: "bold",
            }}
          >
            Already a member?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("loginscreen")}>
            <Text
              style={{
                color: colors.secondary,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Inscription
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: height / 7,
    backgroundColor: "#FFF",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#054752",
    textAlign: "left",
  },
  btnStl: {
    marginTop: 10,
    width: "50%",
    borderWidth: 2,
    borderColor: "#054752",
    height: 60,
    justifyContent: "center",
    borderRadius: 7,
  },
  btnTxt: { fontSize: 18, color: "#054752", textAlign: "center" },
  backIcon: { margin: 20 },
});
export default SignUp;
