import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../../config/colors";
const { width, height } = Dimensions.get("screen");
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import ListOfferTable from "./ListOfferTable";

const OfferCard = ({
  toggleCheckBox1,
  toggleCheckBox2,
  toggleCheckBox3,
  toggleCheckBox4,
  toggleCheckBox5,
  toggleCheckBox6,
  validate,
  setValidate,
  status,
  userName,
  rating,
  navigation,
}) => {
  const [confirmCode, setConfirmCode] = useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        marginVertical: height / 100,
        width: "95%",
        alignSelf: "center",
        // height: height / 4,
        backgroundColor: "#F7F8FB",
        borderRadius: 8,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 5,
        overflow: "hidden",
        shadowColor: "#000",
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
          Sunday, 31 August 2021
        </Text>
        <MaterialCommunityIcons
          name="car-hatchback"
          color="dodgerblue"
          size={32}
        />

        <View style={{ marginRight: -20 }}>
          <Text
            style={{
              color: colors.primary,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            16,00 $
          </Text>
          <Text
            style={{
              color: colors.primary,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            5 Kg
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 7,
        }}
      >
        <View
          style={{
            //   flex: 0.6,
            margin: height / 110,
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
                height: height / 20,
                width: 3,
                marginLeft: 8,
              }}
            />
            <MaterialCommunityIcons
              name="circle-outline"
              color={colors.primary}
              size={20}
            />
          </View>
          <View style={{ marginLeft: 2, justifyContent: "space-between" }}>
            <Text
              style={{
                color: colors.primary,
                fontWeight: "bold",
                fontSize: 16,
                // marginTop: -2,
              }}
            >
              Chilly-Mazarin
            </Text>
            <Text
              style={{
                color: colors.primary,
                fontWeight: "bold",
                fontSize: 16,
                // marginTop: 34,
              }}
            >
              Wambrechies
            </Text>
          </View>
        </View>
        <View
          style={{
            //   flex: 0.4,
            // margin: 10,
            flexDirection: "row",
            // justifyContent: "flex-start",
            // alignItems: "flex-start",
          }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 20 }}
            source={require("../../assets/profile.png")}
          />
          <View>
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              Celine
            </Text>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <AntDesign name="star" color={colors.primary} size={20} />
              <Text>4.5</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          borderColor: "#DDDDDD",
          borderWidth: 1,
          width: "80%",
          //   marginTop: 20,
          alignSelf: "center",
        }}
      ></View>

      {toggleCheckBox1 && toggleCheckBox2 == false ? (
        // toggleCheckBox2 == true &&
        // toggleCheckBox3 == false
        // <ListOfferTable
        //   iconName="questioncircle"
        //   iconColor="dodgerblue"
        //   status="Offer Sent"
        // />
        <ListOfferTable
          iconName="questioncircle"
          iconColor="dodgerblue"
          status={status}
          userName={userName}
          rating={rating}
          navigation={navigation}
        />
      ) : null}

      {toggleCheckBox1 && toggleCheckBox2 && toggleCheckBox3 == false ? (
        <ListOfferTable
          iconName="questioncircle"
          iconColor="dodgerblue"
          status={status}
          userName={userName}
          rating={rating}
          userStatus="Waiting For Paiment"
          navigation={navigation}
        />
      ) : null}

      {toggleCheckBox1 &&
      toggleCheckBox2 &&
      toggleCheckBox3 == true &&
      validate == false ? (
        <View style={{ marginVertical: 5 }}>
          <ListOfferTable
            iconName="checkcircle"
            iconColor="#4CAF50"
            status={status}
            userName={userName}
            rating={rating}
            userStatus="Payese"
            navigation={navigation}
            confirmCode={confirmCode}
            setConfirmCode={setConfirmCode}
            offerDetail={true}
          />
        </View>
      ) : null}

      {validate && toggleCheckBox4 == false ? (
        <View style={{ marginVertical: 5 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              // borderWidth: 1,
              // borderColor: "blue",
              //   width: width / 1.7,
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "600" }}>
              Date Of Meeting :{" "}
            </Text>

            <Text numberOfLines={1} style={{ padding: 5 }}>
              10/11/2021
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",

              alignItems: "center",
              marginVertical: 5,
              marginLeft: 10,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "600" }}>Address : </Text>
            <Text
              numberOfLines={1}
              style={{
                padding: 5,
              }}
            >
              3, Rue de paris, 75013, France
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              // borderWidth: 1,
              // borderColor: "blue",
              //   width: width / 2,
              alignItems: "center",
              marginVertical: 5,
              marginLeft: 10,
            }}
          >
            {/* <Text>Accept</Text> */}

            <Text style={{ color: colors.secondary, fontWeight: "600" }}>
              Waiting For Accepting
            </Text>
            <AntDesign
              name="questioncircle"
              color={colors.secondary}
              size={18}
            />
          </View>
          <ListOfferTable
            iconName="checkcircle"
            iconColor="#4CAF50"
            status={status}
            userName={userName}
            rating={rating}
            userStatus="Payee"
            navigation={navigation}
          />
        </View>
      ) : null}
      {toggleCheckBox1 &&
      toggleCheckBox2 == true &&
      toggleCheckBox3 == true &&
      toggleCheckBox4 == true &&
      toggleCheckBox5 == false &&
      validate == true ? (
        <View style={{ marginVertical: 5 }}>
          <ListOfferTable
            iconName="checkcircle"
            iconColor="#4CAF50"
            status={status}
            userName={userName}
            rating={rating}
            userStatus="Payee"
            navigation={navigation}
          />
        </View>
      ) : null}

      {toggleCheckBox1 &&
      toggleCheckBox2 == true &&
      toggleCheckBox3 == true &&
      toggleCheckBox4 == true &&
      toggleCheckBox5 == true &&
      toggleCheckBox6 == false &&
      validate == true ? (
        <View style={{ marginVertical: 10 }}>
          <ListOfferTable
            iconName="checkcircle"
            iconColor="#4CAF50"
            status={status}
            userName={userName}
            rating={rating}
            userStatus="Payee"
            navigation={navigation}
          />
        </View>
      ) : null}

      {toggleCheckBox1 &&
      toggleCheckBox2 == true &&
      toggleCheckBox3 == true &&
      toggleCheckBox4 == true &&
      toggleCheckBox5 == true &&
      toggleCheckBox6 == true &&
      validate == true ? (
        <View style={{ marginVertical: 5 }}>
          <ListOfferTable
            iconName="checkcircle"
            iconColor="#4CAF50"
            status={status}
            userName={userName}
            rating={rating}
            userStatus="Payee"
            navigation={navigation}
          />
        </View>
      ) : null}
    </ScrollView>
  );
};

export default OfferCard;
