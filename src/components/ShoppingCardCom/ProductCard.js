import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../../config/colors";
import { ScrollView } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");
function ProductCard(props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginVertical: 10,
          width: "93%",
          height: height / 4.5,
          backgroundColor: "#FFFFFF",
          borderRadius: 8,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 8,
          elevation: 5,
          overflow: "hidden",
          shadowColor: "#000",
          flexDirection: "row",
          borderWidth: 2,
          borderColor: colors.light,
          //   justifyContent: "space-between",
        }}
      >
        <Image
          resizeMode="stretch"
          style={{
            height: "100%",
            width: "40%",
            // alignSelf: "flex-start",
            borderRadius: 8,
          }}
          source={require("../../assets/img1.jpg")}
        />
        <View
          style={{
            width: "60%",
            // alignItems: "center",
            // borderWidth: 1,
            // borderColor: "red",
            paddingHorizontal: 3,
            justifyContent: "space-around",
            margin: 5,
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "left",
              //   alignSelf: "center",
            }}
          >
            Carte graphique RTC 3060 ASUS TUF OC GAMMING
          </Text>
          <Text style={{ fontWeight: "600" }}>630 $</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: 20,
            }}
          >
            <MaterialCommunityIcons name="cart" color="black" size={32} />
            <MaterialCommunityIcons
              style={{ marginLeft: 10 }}
              name="heart-outline"
              color={colors.grey}
              size={32}
            />
          </View>
        </View>
      </View>
      {/* <View style={{}}>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: "100%",
    alignItems: "center",
    // backgroundColor: "#FFF",
  },
});

export default ProductCard;
