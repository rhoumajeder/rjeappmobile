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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import colors from "../../config/colors";
const { width, height } = Dimensions.get("screen");
function ListReqPropositionTable({
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
  showSecondOption,
  validate,
  setValidate,
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
            justifyContent: "space-around",
            paddingVertical: 5,
            width: "85%",
            alignItems: "center",
            // borderWidth: 1,
            // borderColor: "red",
            alignSelf: "flex-end",
          }}
        >
          {/* <Text style={{  }}>Name</Text> */}
          <Text
            style={{
              //   width: "15%",
              fontSize: 12,
              color: "#909090",
              fontWeight: "600",
            }}
          >
            Name
          </Text>
          <Text
            style={{
              //   width: "20%",

              fontSize: 12,
              color: "#909090",
              fontWeight: "600",
            }}
          >
            quanatity
          </Text>
          <Text
            style={{
              //   width: "20%",

              fontSize: 12,
              color: "#909090",
              fontWeight: "600",
            }}
          >
            Weight
          </Text>
          <Text
            style={{
              //   width: "20%",

              fontSize: 12,
              color: "#909090",
              fontWeight: "600",
            }}
          >
            Price
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
            width: "90%",
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
          <Text style={{ color: colors.grey, fontSize: 12 }}>15</Text>
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
            width: "90%",
          }}
        >
          <MaterialCommunityIcons
            name="chevron-down"
            color={colors.grey}
            size={22}
          />

          <Text style={{ color: colors.grey, fontSize: 12 }}>Ipad</Text>
          <Text style={{ color: colors.grey, fontSize: 12 }}>11</Text>
          <Text style={{ color: colors.grey, fontSize: 12 }}>15</Text>
          <Text style={{ color: colors.grey, fontSize: 12 }}>15</Text>
        </View>
      </View>

      <>
        <View
          style={{
            borderColor: "#DDDDDD",
            borderWidth: 1,
            width: "80%",
            //   marginTop: 20,
            alignSelf: "center",
          }}
        ></View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("MyRequestProposition", {
              status: status,
              userName: userName,
              rating: rating,
            })
          }
          style={{
            flexDirection: "row",
            justifyContent:
              status == "Offre Envoyé" ? "flex-start" : "flex-start",
            marginVertical: height / 100,
            marginHorizontal: 5,
            alignItems: "center",
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 20 }}
              source={require("../../assets/profile.png")}
            />
            <Text style={{ fontSize: 14 }}>Unknown</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialIcons name="star" color={colors.grey} size={16} />
              <MaterialIcons name="star" color={colors.grey} size={16} />
              <MaterialIcons name="star-half" color={colors.grey} size={16} />
              <MaterialIcons
                name="star-outline"
                color={colors.grey}
                size={16}
              />
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 12 }}>26/5/2021</Text>
            </View>
          </View>

          <View style={{ marginLeft: 30 }}>
            <View
              style={{
                //   borderWidth: 1,
                //   borderColor: "red",
                width: width / 3,
                height: height / 12,
                //   borderRadius: 8,
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 8,
                elevation: 10,
                overflow: "hidden",
                shadowColor: "lightgrey",
                borderRadius: 5,
                backgroundColor: "#FFF",
                alignItems: "flex-start",
                padding: 2,
                justifyContent: "center",
                // marginLeft: status !== "Offre Envoyé" ? 10 : null,
                // marginLeft: 20,
                borderColor: "lightgrey",
                borderWidth: 1,
              }}
            >
              <Text
                style={{ fontSize: 13, fontWeight: "600", textAlign: "center" }}
              >
                Description
              </Text>
              <Text
                style={{ fontSize: 10, color: colors.grey }}
                numberOfLines={2}
              >
                Lorem ipsum dolor sit amet consectetur
              </Text>
            </View>
            {status == "Offre Envoyé" ? (
              <View
                style={{
                  flexDirection: "row",
                  //   width: 110,
                  justifyContent: "space-between",
                  marginVertical: 10,
                  // borderWidth: 1,
                  // borderColor: "red",
                }}
              >
                <Text>
                  Waiting For Accepting
                  <AntDesign
                    name="questioncircle"
                    color={colors.secondary}
                    size={13}
                  />
                </Text>
              </View>
            ) : null}
          </View>
        </TouchableOpacity>

        {status == "Offre Accepted" ? (
          <View
            style={{
              flexDirection: "row",
              marginVertical: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "grey",
                fontWeight: "bold",
                fontSize: 12,
                marginHorizontal: 5,
              }}
            >
              Accepted
            </Text>
            <AntDesign name="checkcircle" color="#4CAF50" size={14} />
            <Text
              style={{
                color: colors.secondary,
                fontSize: 12,
                marginHorizontal: 5,
              }}
            >
              {userStatus}
            </Text>

            <AntDesign
              name="questioncircle"
              color={colors.secondary}
              size={13}
            />
          </View>
        ) : status == "Payment" ? (
          <View style={{ marginHorizontal: 10 }}>
            {validate ? (
              <View
                style={{
                  flexDirection: "row",
                  marginVertical: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "grey",
                    fontWeight: "bold",
                    fontSize: 12,
                    marginHorizontal: 5,
                  }}
                >
                  Paid
                </Text>
                <AntDesign name="checkcircle" color="#4CAF50" size={14} />
                <Text
                  style={{
                    color: "grey",
                    fontSize: 12,
                    marginHorizontal: 5,
                  }}
                >
                  Waiting For Accepting Address Meeting
                </Text>
                <Text style={{ color: colors.secondary, fontSize: 12 }}>
                  In Progress
                </Text>
                <AntDesign
                  name="questioncircle"
                  color={colors.secondary}
                  size={13}
                />
              </View>
            ) : (
              <>
                <View
                  style={{
                    flexDirection: "row",

                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 4,
                  }}
                >
                  {showSecondOption ? (
                    <>
                      <Text>Paid</Text>

                      <AntDesign name="checkcircle" color="#4CAF50" size={14} />
                    </>
                  ) : null}
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
                    <FontAwesome
                      name="calendar"
                      color={colors.grey}
                      size={18}
                    />
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
                  <Text style={{ fontSize: 14, fontWeight: "600" }}>
                    Address :
                  </Text>

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
                    onPress={() => setValidate(true)}
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
                      Validate
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        ) : status == "Meeting" ? (
          <>
            <View
              style={{
                flexDirection: "row",
                marginVertical: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "grey",
                  fontSize: 12,
                  marginHorizontal: 5,
                }}
              >
                Shipment Code: 9895 -
              </Text>
              <Text style={{ color: colors.secondary, fontSize: 12 }}>
                Confirmation In Progress
              </Text>
              <AntDesign
                name="questioncircle"
                color={colors.secondary}
                size={13}
              />
            </View>
          </>
        ) : status == "Shipment" ? (
          <>
            {confirmCode ? (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    // marginVertical: 10,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginLeft: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "grey",
                      fontWeight: "bold",
                      fontSize: 12,
                    }}
                  >
                    Delivery Code : 6586
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                  <Text
                    style={{
                      color: "grey",
                      fontWeight: "bold",
                      fontSize: 12,
                    }}
                  >
                    Accepted
                  </Text>
                  <AntDesign name="checkcircle" color="#4CAF50" size={14} />
                  <Text
                    style={{
                      color: "grey",
                      fontSize: 12,
                      marginHorizontal: 5,
                    }}
                  >
                    Shipment Confirmation
                  </Text>
                </View>
                {showSecondOption ? (
                  <View
                    style={{
                      alignItems: "flex-start",
                      justifyContent: "center",
                      marginLeft: 10,
                    }}
                  >
                    <Text style={{ color: colors.grey, fontSize: 12 }}>
                      Date Of Meeting: 2021/9/15 at 23:43
                    </Text>
                    <Text style={{ color: colors.grey, fontSize: 12 }}>
                      Address: 2 rue du paris, Drancy - activated
                      <Text style={{ color: "#4CAF50", fontSize: 12 }}>
                        Accepted
                      </Text>
                      <AntDesign name="checkcircle" color="#4CAF50" size={14} />
                    </Text>
                  </View>
                ) : null}
              </>
            ) : (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    marginVertical: 10,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginLeft: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "grey",
                      fontSize: 12,
                      marginHorizontal: 5,
                    }}
                  >
                    Delivery Code :
                  </Text>
                  {/* <Text style={{ color: colors.secondary, fontSize: 12 }}>
            In Progress
          </Text> */}
                  {/* <AntDesign
                name="questioncircle"
                color={colors.secondary}
                size={13}
              /> */}
                  <TextInput
                    placeholder="Delivery Code"
                    style={{
                      borderWidth: 1,
                      borderColor: "grey",
                      padding: 0,
                      paddingHorizontal: 10,
                      width: 130,
                      borderRadius: 5,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => setConfirmCode(true)}
                    style={{
                      borderWidth: 1,
                      borderColor: "#4CAF50",
                      padding: 3,
                      borderRadius: 5,
                      width: 50,
                      height: 25,
                      alignItems: "center",
                      marginLeft: 10,
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 10, color: "#4CAF50" }}>
                      Validate
                    </Text>
                  </TouchableOpacity>
                </View>
                {showSecondOption ? (
                  <View
                    style={{
                      // alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 10,
                    }}
                  >
                    <Text style={{ color: colors.grey, fontSize: 12 }}>
                      Date Of Meeting: 2021/9/15 at 23:43
                    </Text>
                    <Text style={{ color: colors.grey, fontSize: 12 }}>
                      Address: 2 rue du paris, Drancy - activated
                      <Text style={{ color: "#4CAF50", fontSize: 12 }}>
                        Accepted
                      </Text>
                      <AntDesign name="checkcircle" color="#4CAF50" size={14} />
                    </Text>
                  </View>
                ) : null}
              </>
            )}
          </>
        ) : status == "Delivered" ? (
          <>
            <View
              style={{
                flexDirection: "row",
                marginVertical: 10,
                alignItems: "center",
                justifyContent: "flex-start",
                marginLeft: 10,
              }}
            >
              <Text style={{ color: colors.grey, fontSize: 12, marginLeft: 5 }}>
                Delivery Code Confirmed
              </Text>
              <AntDesign name="checkcircle" color="#4CAF50" size={14} />

              {/* <AntDesign
            name="questioncircle"
            color={colors.secondary}
            size={13}
          /> */}
            </View>
            {showSecondOption ? (
              <View
                style={{
                  alignItems: "flex-start",
                  justifyContent: "center",
                  marginLeft: 10,
                }}
              >
                <Text style={{ color: colors.grey, fontSize: 12 }}>
                  delivery{" "}
                  <AntDesign name="checkcircle" color="#4CAF50" size={14} />
                </Text>
                <Text style={{ color: colors.grey, fontSize: 12 }}>
                  Date Of Meeting: 2021/9/15 at 23:43
                </Text>
                <Text style={{ color: colors.grey, fontSize: 12 }}>
                  Address: 2 rue du paris, Drancy - activated
                  <Text style={{ color: "#4CAF50", fontSize: 12 }}>
                    Accepted
                  </Text>
                  <AntDesign name="checkcircle" color="#4CAF50" size={14} />
                </Text>
              </View>
            ) : null}
          </>
        ) : null}
        {/* ) : null} */}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ListReqPropositionTable;
