import React, { useState } from "react";
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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ListOfferPropositionTable from "./ListOfferPropositionTable";

const ListOfferCardProposition = ({
  car,
  plane,
  propFirst,
  navigation,
  cardOfferStatus,
  cardOfferStatusNumber,
  cardOfferMainStatus,
}) => {
  const [confirmCode, setConfirmCode] = useState(false);

  return (
    <View
      //   onPress={() => navigation.navigate("RecordDetailScreen")}
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
          Sunday, 31 August 2021
        </Text>
        {/* <MaterialCommunityIcons
          name="car-hatchback"
          color="dodgerblue"
          size={32}
        /> */}
        {propFirst ? (
          <MaterialCommunityIcons
            name="car-hatchback"
            color="dodgerblue"
            size={32}
          />
        ) : (
          <FontAwesome name="plane" color="dodgerblue" size={32} />
        )}
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
            alignSelf: "flex-end",
            flexDirection: "row",
            marginBottom: 10,
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

      <View style={{ margin: 10 }}>
        {cardOfferMainStatus == "card one" && (
          <>
            <ListOfferPropositionTable
              iconName="questioncircle"
              iconColor="dodgerblue"
              status="Offre Envoyé"
              userName="Gullaume"
              rating={3.5}
              navigation={navigation}
              confirmCode={confirmCode}
              setConfirmCode={setConfirmCode}
            />
          </>
        )}

        {cardOfferMainStatus == "card two" && (
          <>
            <ListOfferPropositionTable
              iconName="questioncircle"
              iconColor="dodgerblue"
              status="Offre Accepted"
              userStatus="Waiting For Paiment"
              userName="Umair"
              rating={4.6}
              navigation={navigation}
              confirmCode={confirmCode}
              setConfirmCode={setConfirmCode}
            />
          </>
        )}
        {cardOfferMainStatus == "card three" && (
          <>
            <ListOfferPropositionTable
              iconName="checkcircle"
              iconColor="#4CAF50"
              status="Payment"
              userName="Noman"
              rating={3.8}
              navigation={navigation}
              confirmCode={confirmCode}
              setConfirmCode={setConfirmCode}
            />
          </>
        )}
        {cardOfferMainStatus == "card four" && (
          <>
            <ListOfferPropositionTable
              iconName="checkcircle"
              iconColor="#4CAF50"
              status="Meeting"
              userName="Noman"
              rating={3.8}
              navigation={navigation}
              confirmCode={confirmCode}
              setConfirmCode={setConfirmCode}
            />
          </>
        )}
        {cardOfferMainStatus == "card five" && (
          <>
            <ListOfferPropositionTable
              iconName="checkcircle"
              iconColor="#4CAF50"
              status="Shipment"
              userName="Noman"
              rating={3.8}
              navigation={navigation}
              confirmCode={confirmCode}
              setConfirmCode={setConfirmCode}
            />
          </>
        )}
        {cardOfferMainStatus == "card six" && (
          <>
            <ListOfferPropositionTable
              iconName="checkcircle"
              iconColor="#4CAF50"
              status="Delivered"
              userName="Noman"
              rating={3.8}
              navigation={navigation}
              confirmCode={confirmCode}
              setConfirmCode={setConfirmCode}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default ListOfferCardProposition;
