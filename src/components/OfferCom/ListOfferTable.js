import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import colors from "../../config/colors";
const { width, height } = Dimensions.get("screen");
function ListOfferTable({
  iconName,
  iconColor,
  status,
  userStatus,
  userName,
  rating,
  navigation,
  setConfirmCode,
  confirmCode,
  offerDetail,
}) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [dates, setDates] = useState("yyyy/mm/dd");
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    let dateRes =
      currentDate.toString().slice(11, 15) +
      "/" +
      currentDate.toString().slice(4, 7) +
      "/" +
      currentDate.toString().slice(8, 11);
    setDates(dateRes);
    console.log(currentDate.toString(), dateRes, "currentDate");
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
    console.log(date);
  };

  const showTimepicker = () => {
    showMode("time");
  };
  return (
    <View>
      {/* <View
        style={{
          borderColor: "#DDDDDD",
          borderWidth: 1,
          width: "80%",
          //   marginTop: 20,
          alignSelf: "center",
        }}
      ></View> */}

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("MyOfferScreen", {
            status: status,
            userName: userName,
            rating: rating,
          })
        }
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 5,
          marginLeft: 5,
        }}
      >
        <Image
          style={{ width: 50, height: 50, borderRadius: 20 }}
          source={require("../../assets/profile.png")}
        />
        <View>
          <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
            {userName}
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <AntDesign name="star" color={colors.primary} size={20} />
            <Text>{rating}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {status == "Payment" ? (
        <View style={{ marginHorizontal: 10 }}>
          <View
            style={{
              flexDirection: "row",

              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 4,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "600" }}>
              Date Of Meeting:
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: colors.grey,
                width: "50%",
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 5,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              onPress={showDatepicker}
            >
              <Text style={{ color: colors.grey }}>{dates}</Text>
              <FontAwesome name="calendar" color={colors.grey} size={18} />
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 4,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "600" }}>Address :</Text>

            <TextInput
              placeholder="Enter Meeting Address"
              style={{
                borderWidth: 1,
                borderColor: "grey",
                width: "50%",
                paddingVertical: 3,
                paddingHorizontal: 10,
                borderRadius: 5,
              }}
            />
            <TouchableOpacity
              // onPress={() => setValidate(true)}
              style={{
                borderWidth: 1,
                borderColor: colors.secondary,
                paddingVertical: 8,
                paddingHorizontal: 10,
                borderRadius: 5,
                marginLeft: 5,
              }}
            >
              <Text style={{ fontSize: 12, color: colors.secondary }}>
                Validate{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : status == "Meeting" ? (
        <>
          {offerDetail ? (
            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ color: colors.grey }}>
                Date Of Meeting:2021/9/15 at 23:43
              </Text>
              <View style={{ flexDirection: "row", marginVertical: 5 }}>
                <Text style={{ color: colors.grey }}>
                  Address: 2 rue du paris, Dancy -{" "}
                  <Text style={{ color: "#4CAF50", fontWeight: "bold" }}>
                    Accepted
                  </Text>
                </Text>
                <AntDesign name="checkcircle" color="#4CAF50" size={16} />
              </View>
            </View>
          ) : null}

          <View
            style={{
              flexDirection: "row",

              alignItems: "center",
              justifyContent: "space-around",
              marginVertical: 4,
              marginHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "600" }}>
              Shipment Code: 9895
            </Text>
            <Text style={{ fontWeight: "bold", color: colors.secondary }}>
              Confirmation in Progress
            </Text>
            <AntDesign
              name="questioncircle"
              color={colors.secondary}
              size={16}
            />
          </View>
        </>
      ) : status == "Shipment" ? (
        <View>
          {confirmCode ? (
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 14, fontWeight: "600", marginLeft: 10 }}>
                Delivery Code Confirmed
              </Text>
              <AntDesign name="checkcircle" color="#4CAF50" size={16} />
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                marginVertical: 4,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "600" }}>
                Delivery Code :
              </Text>

              <TextInput
                placeholder="Delivery Code"
                style={{
                  borderWidth: 1,
                  borderColor: "grey",
                  width: "50%",
                  paddingVertical: 3,
                  paddingHorizontal: 10,
                  borderRadius: 5,
                }}
              />
              <TouchableOpacity
                onPress={() => setConfirmCode(true)}
                style={{
                  borderWidth: 1,
                  borderColor: "green",
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  marginLeft: 5,
                }}
              >
                <Text style={{ fontSize: 12, color: "green" }}>Validate</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ) : status == "Delivered" ? (
        <View
          style={{
            flexDirection: "row",

            alignItems: "center",
            justifyContent: "flex-start",
            marginVertical: 4,
            marginLeft: 5,
            marginHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "600" }}>
            Delivery Code Confirmed
          </Text>

          <AntDesign name="checkcircle" color="#4CAF50" size={16} />
        </View>
      ) : null}
      <View
        style={{
          //   borderWidth: 1,
          //   borderColor: colors.grey,
          width: "98%",
          alignSelf: "center",
          marginVertical: height / 100,
          padding: 5,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 8,
          elevation: 3,
          overflow: "hidden",
          shadowColor: "#000",
          borderRadius: 5,
          backgroundColor: "#FFF",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 5,
            width: "95%",
            alignItems: "center",
            // borderWidth: 1,
            // borderColor: "red",
            alignSelf: "flex-end",
          }}
        >
          {/* <Text style={{  }}>Name</Text> */}
          <Text
            style={{
              width: "15%",
              fontSize: 12,
              color: "#909090",
              fontWeight: "600",
            }}
          >
            Name
          </Text>
          <Text
            style={{
              width: "20%",

              fontSize: 12,
              color: "#909090",
              fontWeight: "600",
            }}
          >
            Max quanatity
          </Text>
          <Text
            style={{
              width: "20%",

              fontSize: 12,
              color: "#909090",
              fontWeight: "600",
            }}
          >
            Max Weight
          </Text>
          <Text
            style={{
              width: "20%",

              fontSize: 12,
              color: "#909090",
              fontWeight: "600",
            }}
          >
            Price
          </Text>
          <Text
            style={{
              width: "20%",

              fontSize: 12,
              color: "#909090",
              fontWeight: "600",
            }}
          >
            Status
          </Text>
        </View>
        <View
          style={{
            borderColor: "#DDDDDD",
            borderWidth: 0.5,
            width: "100%",
            //   marginTop: 20,
            alignSelf: "center",
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 5,
          }}
        >
          {/* <Text style={{ color: colors.grey }}>Name</Text> */}

          <MaterialCommunityIcons
            name="chevron-down"
            color={colors.grey}
            size={22}
          />
          {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              //   borderWidth: 1,
              //   borderColor: "red",
              //   width: width / 2.5,
            }}
          > */}
          <Text style={{ color: colors.grey, fontSize: 12 }}>Ipad</Text>
          <Text style={{ color: colors.grey, fontSize: 12 }}>11</Text>
          <Text style={{ color: colors.grey, fontSize: 12 }}>15</Text>
          {status == "Offre Envoyé" ? (
            <TextInput
              placeholder="Price"
              style={{
                width: 60,
                //   paddingHorizontal: 20,
                paddingVertical: 0,
                borderRadius: 3,
                //   height: 20,
                borderWidth: 1,
                fontSize: 10,
                borderColor: colors.grey,
                marginLeft: 20,
              }}
            />
          ) : (
            <Text style={{ color: colors.grey, fontSize: 12 }}>20$</Text>
          )}
          {/* </View> */}

          {status == "Offre Envoyé" ? (
            <View
              style={{
                flexDirection: "row",
                width: 110,
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                // onPress={() => setValidate(true)}
                style={{
                  borderWidth: 1,
                  borderColor: "green",
                  padding: 3,
                  borderRadius: 5,
                  width: 50,
                  height: 25,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 10, color: "green" }}>Accept </Text>
              </TouchableOpacity>
              <TouchableOpacity
                // onPress={() => setValidate(true)}
                style={{
                  borderWidth: 1,
                  borderColor: "#EB575D",
                  padding: 3,
                  borderRadius: 5,
                  width: 50,
                  height: 25,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 10, color: "#EB575D" }}>Reject </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                //   marginLeft: 10,
                width: 80,
                //   borderWidth: 1,
                //   borderColor: "red",
              }}
            >
              <Text style={{ fontSize: 12 }}> Accepted</Text>
              <AntDesign name="checkcircle" color="#4CAF50" size={16} />
            </View>
          )}

          {/* <Text style={{ color: colors.grey, fontSize: 10 }}>15</Text> */}
        </View>
        <View
          style={{
            borderColor: "#DDDDDD",
            borderWidth: 0.5,
            width: "100%",
            //   marginTop: 20,
            alignSelf: "center",
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 5,
          }}
        >
          {/* <Text style={{ color: colors.grey }}>Name</Text> */}

          <MaterialCommunityIcons
            name="chevron-down"
            color={colors.grey}
            size={22}
          />

          <Text style={{ color: colors.grey, fontSize: 12 }}>Ipad</Text>
          <Text style={{ color: colors.grey, fontSize: 12 }}>11</Text>
          <Text style={{ color: colors.grey, fontSize: 12 }}>15</Text>
          {status == "Offre Envoyé" ? (
            <TextInput
              placeholder="Price"
              style={{
                width: 60,
                //   paddingHorizontal: 20,
                paddingVertical: 0,
                borderRadius: 3,
                //   height: 20,
                borderWidth: 1,
                fontSize: 10,
                borderColor: colors.grey,
                marginLeft: 20,
              }}
            />
          ) : (
            <Text style={{ color: colors.grey, fontSize: 12 }}>20$</Text>
          )}

          {status == "Offre Envoyé" ? (
            <View
              style={{
                flexDirection: "row",
                width: 110,
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                // onPress={() => setValidate(true)}
                style={{
                  borderWidth: 1,
                  borderColor: "green",
                  padding: 3,
                  borderRadius: 5,
                  width: 50,
                  height: 25,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 10, color: "green" }}>Accept </Text>
              </TouchableOpacity>
              <TouchableOpacity
                // onPress={() => setValidate(true)}
                style={{
                  borderWidth: 1,
                  borderColor: "#EB575D",
                  padding: 3,
                  borderRadius: 5,
                  width: 50,
                  height: 25,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 10, color: "#EB575D" }}>Reject </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                //   marginLeft: 10,
                width: 80,
                //   borderWidth: 1,
                //   borderColor: "red",
              }}
            >
              <Text style={{ fontSize: 12 }}> Accepted </Text>
              <AntDesign name="checkcircle" color="#4CAF50" size={16} />
            </View>
          )}
          {/* <Text style={{ color: colors.grey, fontSize: 10 }}>15</Text> */}
        </View>
        {/* <View
          style={{
            borderColor: "#DDDDDD",
            borderWidth: 0.5,
            width: "100%",
            //   marginTop: 20,
            alignSelf: "center",
          }}
        ></View> */}
        {status !== "Offre Envoyé" ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 5,
            }}
          >
            {/* <Text style={{ color: colors.grey }}>Name</Text> */}

            <MaterialCommunityIcons
              name="chevron-down"
              color={colors.grey}
              size={22}
            />
            <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
              <Text
                style={{ color: colors.grey, fontSize: 12, marginRight: 10 }}
              >
                Total 40$
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  marginRight: 5,
                  //   marginLeft: 10,
                  width: 80,
                  //   borderWidth: 1,
                  //   borderColor: "red",
                }}
              >
                <Text style={{ fontSize: 12 }}>{userStatus}</Text>
                <AntDesign name={iconName} color={iconColor} size={16} />
              </View>
            </View>
            {/* <Text style={{ color: colors.grey, fontSize: 10 }}>15</Text> */}
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ListOfferTable;
