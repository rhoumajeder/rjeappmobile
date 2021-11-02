import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../config/colors";
function CategoriesTable({ categoryName, subCategories }) {
  const [checkOne, setCheckOne] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);
  const [checkThree, setCheckThree] = useState(false);
  const [inpValue, setInpValue] = useState("");
  const [searchField, setSearchField] = useState("");

  const arr = [
    [checkOne, setCheckOne],
    [checkTwo, setCheckTwo],
    [checkThree, setCheckThree],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "97%",
          alignSelf: "center",
          backgroundColor: "white",
          borderRadius: 5,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 8,
          elevation: 5,
          shadowColor: "#000",
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            backgroundColor: "#2196f3",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            {categoryName}
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "60%",
              backgroundColor: "orange",
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: 17,
              backgroundColor: "#42a6f5",
            }}
          >
            <Icon name="search" size={25} color="#fff" />
            <TextInput
              value={searchField}
              onChangeText={(e) => setSearchField(e)}
              placeholder="Search"
              style={{
                backgroundColor: "red",
                height: 40,
                width: "85%",
                borderRadius: 17,
                backgroundColor: "#42a6f5",
              }}
              //   onChangeText={(text) => setInpValue(text)}
            />
          </View>
        </View>
        <View
          style={{
            width: "85%",
            paddingHorizontal: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignSelf: "flex-end",
            paddingVertical: 5,
          }}
        >
          <Text style={{ fontSize: 12 }}>Name</Text>
          <Text style={{ fontSize: 12 }}>Max quantity</Text>
          <Text style={{ fontSize: 12 }}>Max Weight</Text>
          <Text style={{ fontSize: 12 }}>Price</Text>
        </View>
        {subCategories
          .filter((name) => {
            return name.toLowerCase().indexOf(searchField.toLowerCase()) >= 0;
          })
          .map((v, i) => {
            return (
              <View key={i}>
                <View
                  style={{
                    borderBottomColor: "lightgrey",
                    borderBottomWidth: 1,
                  }}
                ></View>
                <View
                  style={{
                    width: "100%",
                    paddingHorizontal: 2,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 5,
                    alignItems: "center",
                  }}
                >
                  <CheckBox
                    tintColors={{ true: "#2196f3" }}
                    disabled={false}
                    value={arr[i][0]}
                    onValueChange={(newValue) => arr[i][1](newValue)}
                  />
                  <Text style={{ fontSize: 12, width: "20%" }}>{v}</Text>
                  <TextInput
                    placeholder="2"
                    placeholderTextColor="#000"
                    style={{
                      borderWidth: 1,
                      borderColor: "lightgrey",
                      width: "20%",
                      height: 35,
                      fontSize: 12,
                      borderRadius: 3,
                    }}
                  />

                  <TextInput
                    placeholder="1"
                    placeholderTextColor="#000"
                    style={{
                      borderWidth: 1,
                      borderColor: "lightgrey",
                      width: "20%",
                      height: 35,
                      fontSize: 12,
                      borderRadius: 3,
                    }}
                  />
                  <TextInput
                    placeholder="4"
                    placeholderTextColor="#000"
                    style={{
                      borderWidth: 1,
                      borderColor: "lightgrey",
                      width: "20%",
                      height: 35,
                      fontSize: 12,
                      borderRadius: 3,
                    }}
                  />
                </View>
              </View>
            );
          })}

        <View
          style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1 }}
        ></View>
        <View style={{ paddingHorizontal: 10 }}>
          <View
            style={{
              flexDirection: "row",
              width: 80,
              justifyContent: "space-between",
              marginVertical: 5,
              alignSelf: "flex-end",
            }}
          >
            <View
              style={{
                width: 20,
                borderRadius: 20,
                borderColor: "lightgrey",
                borderWidth: 1,
              }}
            >
              <Icon name="chevron-left" size={20} color="grey" />
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#2196f3",
                width: 20,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#e0efff",
              }}
            >
              <Text>1</Text>
            </View>
            <View
              style={{
                width: 20,
                borderRadius: 20,
                borderColor: "lightgrey",
                borderWidth: 1,
              }}
            >
              <Icon
                name="chevron-right"
                size={20}
                color="grey"
                // style={{ width: "10%" }}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
});

export default CategoriesTable;
