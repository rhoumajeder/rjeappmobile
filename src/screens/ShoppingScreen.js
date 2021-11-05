import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import colors from "../config/colors";
import ProductCart from "../components/ShoppingCardCom/ProductCard";
const { width, height } = Dimensions.get("screen");
function ShoppingScreen(props) {
  const [filter, setFilter] = useState(false);
  const [clickFilter1, setClickFilter1] = useState(false);
  const [clickFilter2, setClickFilter2] = useState(false);
  const [clickFilter3, setClickFilter3] = useState(false);

  return (
    <>
      {filter == false ? (
        <SafeAreaView style={styles.container}>
          <View
            style={{
              marginTop: 20,
              width: "90%",
              height: 60,
              backgroundColor: "#EDEDED",
              //   alignSelf: "center",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: 20,
            }}
          >
            <MaterialIcons name="search" color={colors.secondary} size={32} />
            <TextInput
              style={{
                width: "80%",
                borderBottomWidth: 1,
                borderBottomColor: "#DDDDDD",
                marginBottom: "3%",
              }}
            />
          </View>

          <View
            style={{
              borderColor: "#DDDDDD",
              borderWidth: 1,
              width: "90%",
              marginTop: 20,
            }}
          ></View>
          <ScrollView showsVerticalScrollIndicator={false} style={{}}>
            <View style={{ paddingBottom: "20%" }}>
              <ProductCart />
              <ProductCart />
              <ProductCart />
              <ProductCart />
            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={() => setFilter(true)}
            style={{
              position: "absolute",
              bottom: 20,
              backgroundColor: colors.secondary,
              width: width / 3.5,
              padding: 15,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
              Filter
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      ) : (
        <SafeAreaView
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFF",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setClickFilter1(!clickFilter1);
            }}
            style={{
              marginVertical: 10,
              width: "90%",
              // height: height / 4,
              backgroundColor: "#F7F8FB",
              borderColor: clickFilter1 ? colors.secondary : "#D3D3D3",
              borderWidth: 2,
              borderRadius: 8,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 8,
              elevation: 5,
              overflow: "hidden",
              shadowColor: "#000",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: width / 1, height: height / 6 }}
              source={require("../assets/amazon.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setClickFilter2(!clickFilter2)}
            style={{
              marginVertical: 10,
              width: "90%",
              // height: height / 4,
              borderColor: clickFilter2 ? colors.secondary : "#D3D3D3",
              borderWidth: 2,

              backgroundColor: "#F7F8FB",
              borderRadius: 5,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 8,
              elevation: 5,
              overflow: "hidden",
              shadowColor: "#000",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: width / 2.5, height: height / 6 }}
              source={require("../assets/ebay.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setClickFilter3(!clickFilter3)}
            style={{
              marginVertical: 10,
              width: "90%",
              // height: height / 4,
              borderColor: clickFilter3 ? colors.secondary : "#D3D3D3",
              borderWidth: 2,

              backgroundColor: "#F7F8FB",
              borderRadius: 8,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 8,
              elevation: 5,
              overflow: "hidden",
              shadowColor: "#000",
              // marginLeft: "5%",
              // alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: width / 2, height: height / 6 }}
              source={require("../assets/cdisc.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFilter(false)}
            style={{
              // position: "absolute",

              bottom: 10,
              borderWidth: 2,
              borderColor: colors.secondary,
              marginVertical: 20,
              alignSelf: "center",
              width: width / 2,
              alignItems: "center",
              borderRadius: 10,
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <FontAwesome name="search" color={colors.secondary} size={28} />
            <Text style={{ color: colors.secondary, marginHorizontal: 10 }}>
              RECHERCHER
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});

export default ShoppingScreen;
