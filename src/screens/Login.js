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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from "../config/colors";
const { width, height } = Dimensions.get("screen");
const Login = ({ navigation }) => {
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
        <Button
          btnStl={styles.btnStl}
          btnTxt={styles.btnTxt}
          txt="Log In"
          navigate="Publier"
          navigation={navigation}
        />
        <View style={{ width: "90%", marginTop: 20 }}>
          {/* <TouchableOpacity> */}
          <Text
            style={{
              color: colors.secondary,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Forget password
          </Text>
          {/* </TouchableOpacity> */}
          <Text
            style={{
              color: colors.primary,
              fontSize: 18,
              marginVertical: 5,
              fontWeight: "bold",
            }}
          >
            Not yet a member?
          </Text>

          {/* <TouchableOpacity> */}
          <TouchableOpacity onPress={() => navigation.navigate("signupscreen")}>
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
          {/* </TouchableOpacity> */}
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
export default Login;
