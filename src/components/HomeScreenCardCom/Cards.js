import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../../config/colors";
const { width, height } = Dimensions.get("screen");
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Cards = ({
  car,
  plane,
  propFirst,
  navigation,
  date,
  Vehical,
  price,
  weight,
  from,
  to,
  source,
  name,
  ratting,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("RecordDetailScreen")}
      style={{
        flex: 1,
        marginVertical: 10,
        width: "95%",
        // height: height / 4,
        backgroundColor: "#F7F8FB",
        borderRadius: 8,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 5,
        overflow: "hidden",
        shadowColor: "#000",
        // marginLeft: "5%",
        alignSelf: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 14, marginLeft: 10 }}>
          {date}
        </Text>

        {propFirst ? (
          <MaterialCommunityIcons
            name="car-hatchback"
            color="dodgerblue"
            size={32}
          />
        ) : (
          <FontAwesome name={Vehical} color="dodgerblue" size={32} />
        )}

        <View style={{ marginRight: -20 }}>
          <Text
            style={{
              color: colors.primary,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            {price?price+' $':'0 $'}
          </Text>
          <Text
            style={{
              color: colors.primary,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            {weight?weight+' Kg':'0 Kg'}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.6,
          margin: 10,
          flexDirection: "row",
        }}
      >
        <View>
          <MaterialCommunityIcons
            name="circle-outline"
            color={colors.primary}
            size={20}
          />
          <View
            style={{
              backgroundColor: colors.primary,
              height: 40,
              width: 3,
              marginLeft: 9,
            }}
          />
          <MaterialCommunityIcons
            name="circle-outline"
            color={colors.primary}
            size={20}
          />
        </View>
        <View style={{ marginLeft: 2 }}>
          <Text
            style={{
              color: colors.primary,
              fontWeight: "bold",
              fontSize: 16,
              marginTop: -2,
            }}
          >
            {from}
          </Text>
          <Text
            style={{
              color: colors.primary,
              fontWeight: "bold",
              fontSize: 16,
              marginTop: 34,
            }}
          >
            {to}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.4,
          margin: 10,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Image
          style={{ width: 50, height: 50, borderRadius: 20 }}
          source={require("../../assets/profile.png")}
        />
        <View>
          <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
            {name}
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <AntDesign name="star" color={colors.primary} size={20} />
            <Text>{ratting?ratting:' 4.5'}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;
