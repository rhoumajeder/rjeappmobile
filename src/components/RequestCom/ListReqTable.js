import React from "react";
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

import colors from "../../config/colors";
const { width, height } = Dimensions.get("screen");
function ListReqTable({
  iconName,
  iconColor,
  status,
  userStatus,
  userName,
  rating,
  navigation,
  confirmCode,
  setConfirmCode,
  showProfile,
  offerDetail,
}) {
  return (
    <View>
      {showProfile == false ? null : (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("MyRequestScreen", {
              status: status,
              userName: userName,
              rating: rating,
            })
          }
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
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
      )}
      {status == "Payment" ? (
        <View style={{ marginHorizontal: 10 }}>
          <View
            style={{
              flexDirection: "row",

              alignItems: "center",
              justifyContent: "flex-start",
              marginVertical: 4,
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "600" }}>
              Waiting For Address Meeting --
            </Text>

            <Text style={{ fontSize: 12 }}> In Progress </Text>
            <AntDesign
              name="questioncircle"
              color={colors.secondary}
              size={16}
            />
          </View>
        </View>
      ) : status == "Meeting" ? (
        <View
          style={{
            marginVertical: 4,
            marginHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: "600", color: colors.grey }}>
            Address: 2 rue du paris, Drancy, Date: 2021/9/15 at 23:43
          </Text>

          <View style={{ flexDirection: "row", marginVertical: 5 }}>
            <TouchableOpacity
              // onPress={() => setValidate(true)}
              style={{
                borderWidth: 2,
                borderColor: "green",
                padding: 3,
                borderRadius: 5,
                width: 50,
                height: 25,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 10, color: "green" }}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => setValidate(true)}
              style={{
                borderWidth: 2,
                borderColor: "#EB575D",
                padding: 3,
                borderRadius: 5,
                width: 50,
                height: 25,
                alignItems: "center",
                marginLeft: 10,
              }}
            >
              <Text style={{ fontSize: 10, color: "#EB575D" }}>Reject</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : status == "Shipment" ? (
        <>
          {confirmCode ? (
            <View>
              <Text
                style={{ fontWeight: "bold", color: colors.grey, margin: 4 }}
              >
                Delivery Code : 6586
              </Text>
            </View>
          ) : (
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
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: "600" }}>
                  Meeting Confirmation :
                </Text>

                <TextInput
                  placeholder="Confirmation Code"
                  style={{
                    borderWidth: 1,
                    borderColor: "grey",
                    width: "40%",
                    paddingVertical: 3,
                    paddingHorizontal: 5,
                    borderRadius: 5,
                    fontSize: 12,
                  }}
                />
                <TouchableOpacity
                  onPress={() => setConfirmCode(true)}
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
                    Confirm
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </>
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
            width: "90%",
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
            <AntDesign
              name="questioncircle"
              color={colors.secondary}
              size={16}
            />
          ) : (
            <Text style={{ color: colors.grey, fontSize: 12 }}>20$</Text>
          )}
          {/* </View> */}

          {status == "Offre Envoyé" ? (
            <View
              style={{
                flexDirection: "row",
                // width: 110,
                justifyContent: "flex-end",
              }}
            >
              <Text style={{ fontSize: 12 }}>In Progress </Text>
              <AntDesign
                name="questioncircle"
                color={colors.secondary}
                size={16}
              />
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
            // />
            <AntDesign
              name="questioncircle"
              color={colors.secondary}
              size={16}
            />
          ) : (
            <Text style={{ color: colors.grey, fontSize: 12 }}>20$</Text>
          )}

          {status == "Offre Envoyé" ? (
            <View
              style={{
                flexDirection: "row",
                // width: 110,
                justifyContent: "flex-end",
              }}
            >
              <Text style={{ fontSize: 12 }}>In Progress </Text>
              <AntDesign
                name="questioncircle"
                color={colors.secondary}
                size={16}
              />
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
            // />
            <AntDesign
              name="questioncircle"
              color={colors.secondary}
              size={16}
            />
          ) : (
            <Text style={{ color: colors.grey, fontSize: 12 }}>20$</Text>
          )}

          {status == "Offre Envoyé" ? (
            <View
              style={{
                flexDirection: "row",
                // width: 110,
                justifyContent: "flex-end",
              }}
            >
              <Text style={{ fontSize: 12 }}>In Progress </Text>
              <AntDesign
                name="questioncircle"
                color={colors.secondary}
                size={16}
              />
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
              {userStatus == "Payee" ? (
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
              ) : (
                <TouchableOpacity
                  // onPress={() => setValidate(true)}
                  style={{
                    borderWidth: 2,
                    borderColor: "#EB575D",
                    padding: 3,
                    borderRadius: 5,
                    width: 50,
                    height: 25,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 10, color: "#EB575D" }}>
                    {userStatus}{" "}
                  </Text>
                </TouchableOpacity>
              )}
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

export default ListReqTable;
