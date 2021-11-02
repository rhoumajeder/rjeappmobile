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
function ListOfferPropositionTable({
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
            navigation.navigate("MyOfferProposition", {
              status: status,
              userName: userName,
              rating: rating,
            })
          }
          style={{
            flexDirection: "row",
            justifyContent:
              status == "Offre Envoyé" ? "space-between" : "flex-start",
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
              marginLeft: status !== "Offre Envoyé" ? 10 : null,
              //   marginLeft: 20,
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
                width: 110,
                justifyContent: "space-between",
                // borderWidth: 1,
                // borderColor: "red",
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
          ) : null}
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
            {showSecondOption ? (
              <TouchableOpacity
                // onPress={() => setValidate(true)}
                style={{
                  borderWidth: 1,
                  borderColor: "red",
                  padding: 3,
                  borderRadius: 5,
                  width: 50,
                  height: 25,
                  alignItems: "center",
                  marginHorizontal: 5,
                }}
              >
                <Text style={{ fontSize: 10, color: "red" }}>PAYER </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        ) : status == "Payment" ? (
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
                color: "grey",
                fontSize: 12,
                marginHorizontal: 5,
              }}
            >
              Waiting For Address Meeting -
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
                  color: "grey",
                  fontSize: 12,
                  marginHorizontal: 5,
                }}
              >
                Pdv a 23 Rue Jean-Christopher,Paris -
              </Text>
              {/* <Text style={{ color: colors.secondary, fontSize: 12 }}>
                In Progress
              </Text> */}
              <AntDesign
                name="questioncircle"
                color={colors.secondary}
                size={13}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: 110,
                justifyContent: "space-between",
                marginVertical: 5,
                alignSelf: "flex-end",
                // borderWidth: 1,
                // borderColor: "red",
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
                    Meeting Confirmation
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
                      fontWeight: "bold",
                      fontSize: 12,
                      // marginHorizontal: 5,
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
                    Meeting Confirmation
                  </Text>

                  <TextInput
                    placeholder="code"
                    style={{
                      borderWidth: 1,
                      borderColor: "grey",
                      padding: 0,
                      paddingHorizontal: 10,
                      width: 60,
                      borderRadius: 5,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => setConfirmCode(true)}
                    style={{
                      borderWidth: 1,
                      borderColor: colors.secondary,
                      padding: 3,
                      borderRadius: 5,
                      width: 50,
                      height: 25,
                      alignItems: "center",
                      marginLeft: 10,
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 10, color: colors.secondary }}>
                      Confirm{" "}
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
              <Text
                style={{
                  color: "grey",
                  fontWeight: "bold",
                  fontSize: 12,
                  // marginHorizontal: 5,
                }}
              >
                Accepted
              </Text>
              <AntDesign name="checkcircle" color="#4CAF50" size={14} />

              <Text style={{ color: colors.grey, fontSize: 12, marginLeft: 5 }}>
                Delivery Code: 3135
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
        {showSecondOption == true ? null : (
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
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
                  <MaterialIcons
                    name="star-half"
                    color={colors.grey}
                    size={16}
                  />
                  <MaterialIcons
                    name="star-outline"
                    color={colors.grey}
                    size={16}
                  />
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 12 }}>26/5/2021</Text>
                </View>
              </View>

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

                  borderColor: "lightgrey",
                  borderWidth: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "600",
                    textAlign: "center",
                  }}
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
              <View
                style={{
                  flexDirection: "row",
                  width: 110,
                  justifyContent: "space-between",
                  // borderWidth: 1,
                  // borderColor: "red",
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
                  <Text style={{ fontSize: 10, color: "#EB575D" }}>
                    Reject{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ListOfferPropositionTable;
