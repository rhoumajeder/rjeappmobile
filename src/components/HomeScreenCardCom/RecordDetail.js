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
import Slider from "react-native-slider";
import CheckBox from "@react-native-community/checkbox";

const RecordDetail = ({
  toggleCheckBox1,
  toggleCheckBox2,
  toggleCheckBox3,
  toggleCheckBox4,
  toggleCheckBox5,
}) => {
  const [val, setVal] = useState(1);

  const [checkOne, setCheckOne] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);
  const [checkThree, setCheckThree] = useState(false);
  const [checkFour, setCheckFour] = useState(false);
  const [checkFive, setCheckFive] = useState(false);
  const [checkSix, setCheckSix] = useState(false);
  return (
    <ScrollView
      contentContainerStyle={{}}
      showsVerticalScrollIndicator={false}
      style={{
        marginVertical: 4,
        width: "95%",
        alignSelf: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "90%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: colors.primary,
            fontWeight: "700",
            fontSize: 18,
            marginLeft: 10,
          }}
        >
          Ven. 10 september
        </Text>
        <MaterialCommunityIcons
          name="car-hatchback"
          color="dodgerblue"
          size={32}
          style={{ marginLeft: 5 }}
        />

        {/* <View
          style={{
            // borderWidth: 1,
            // borderColor: "red",
            marginRight: -20,
          }}
        >
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
        </View> */}
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginHorizontal: 7,
        }}
      >
        <View
          style={{
            margin: height / 110,
            flexDirection: "row",
          }}
        >
          <View>
            <MaterialCommunityIcons
              name="circle-outline"
              color={colors.primary}
              size={18}
            />
            <View
              style={{
                backgroundColor: colors.primary,
                height: height / 10,
                width: 3,
                marginLeft: 8,
              }}
            />
            <MaterialCommunityIcons
              name="circle-outline"
              color={colors.primary}
              size={18}
            />
          </View>
          <View style={{ marginLeft: 2, justifyContent: "space-between" }}>
            <Text
              style={{
                color: colors.primary,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              porte de la Chapelle, Paris
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: colors.primary,
                fontWeight: "bold",
              }}
            >
              Paris
            </Text>
            <Text
              style={{
                color: colors.primary,
                fontWeight: "bold",
                fontSize: 16,
                paddingTop: 20,
                // marginTop: 34,
              }}
            >
              Fives, Lille
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: colors.primary,
                fontWeight: "bold",
              }}
            >
              Lille
            </Text>
          </View>
        </View>
        <View
          style={{
            // flexDirection: "row",
            marginRight: 20,
          }}
        >
          <Text
            style={{ color: colors.primary, fontSize: 18, fontWeight: "bold" }}
          >
            Min 15,00 $
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>Max. 7kg</Text>
        </View>
      </View>

      <View
        style={{
          borderColor: "#DDDDDD",
          borderWidth: 5,
          width: "100%",
          marginTop: 10,
          alignSelf: "center",
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 30,
          alignItems: "center",
        }}
      >
        <View style={{ marginVertical: 20 }}>
          <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
            Celine
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <AntDesign name="star" color={colors.grey} size={20} />
            <Text style={{ color: colors.grey }}>4.7 / 5-51 avis</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 20 }}
            source={require("../../assets/profile.png")}
          />
          <MaterialIcons name="chevron-right" color={colors.grey} size={32} />
        </View>
      </View>

      <View
        style={{
          borderColor: "#DDDDDD",
          borderWidth: 1,
          width: "90%",
          //   marginTop: 20,
          alignSelf: "center",
        }}
      ></View>
      <View style={{ width: "90%", alignSelf: "center", marginVertical: 10 }}>
        <Text style={{ color: colors.grey, fontWeight: "bold" }}>
          Bonjour, je rentre sur Lille pour un rdv, et J'ai une clio 3 et non
          une 207 SW. A bientot!
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontWeight: "700",
            color: colors.secondary,
            width: "90%",
            marginLeft: 20,
            fontSize: 18,
          }}
        >
          Contact Mariette
        </Text>
      </View>
      <View
        style={{
          borderColor: "#DDDDDD",
          borderWidth: 1,
          width: "90%",
          //   marginTop: 20,
          marginVertical: 10,
          alignSelf: "center",
        }}
      ></View>
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
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Food</Text>
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
            <MaterialIcons
              name="search"
              size={25}
              color="#fff"
              // style={{ width: "10%" }}
            />
            <TextInput
              placeholder="Search"
              style={{
                backgroundColor: "red",
                height: 40,
                width: "85%",
                borderRadius: 17,
                backgroundColor: "#42a6f5",
              }}
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
        <View
          style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1 }}
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
            value={checkOne}
            onValueChange={(newValue) => setCheckOne(newValue)}
          />
          <Text style={{ fontSize: 12 }}>Food Solide</Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              width: "20%",
              height: 35,
              borderRadius: 3,
              alignItems: "flex-start",
              paddingHorizontal: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                // textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              width: "20%",
              height: 35,
              borderRadius: 3,
              alignItems: "flex-start",
              paddingHorizontal: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                // textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              width: "20%",
              height: 35,
              borderRadius: 3,
              alignItems: "flex-start",
              paddingHorizontal: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                // textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
        </View>
        <View
          style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1 }}
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
            value={checkTwo}
            onValueChange={(newValue) => setCheckTwo(newValue)}
          />
          <Text style={{ fontSize: 12 }}>Food Liquid</Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              width: "20%",
              height: 35,
              borderRadius: 3,
              alignItems: "flex-start",
              paddingHorizontal: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                // textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              width: "20%",
              height: 35,
              borderRadius: 3,
              alignItems: "flex-start",
              paddingHorizontal: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                // textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              width: "20%",
              height: 35,
              borderRadius: 3,
              alignItems: "flex-start",
              paddingHorizontal: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                // textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
        </View>
        <View
          style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1 }}
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
            value={checkThree}
            onValueChange={(newValue) => setCheckThree(newValue)}
          />
          <Text style={{ fontSize: 12 }}>Food Liquid</Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              width: "20%",
              height: 35,
              borderRadius: 3,
              alignItems: "flex-start",
              paddingHorizontal: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                // textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              width: "20%",
              height: 35,
              borderRadius: 3,
              alignItems: "flex-start",
              paddingHorizontal: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                // textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              width: "20%",
              height: 35,
              borderRadius: 3,
              alignItems: "flex-start",
              paddingHorizontal: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                // textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
        </View>
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
              <MaterialIcons name="chevron-left" size={20} color="grey" />
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
              <MaterialIcons
                name="chevron-right"
                size={20}
                color="grey"
                // style={{ width: "10%" }}
              />
            </View>
          </View>
        </View>
      </View>

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
          marginTop: 10,
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
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Food</Text>
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
            <MaterialIcons
              name="search"
              size={25}
              color="#fff"
              // style={{ width: "10%" }}
            />
            <TextInput
              placeholder="Search"
              style={{
                backgroundColor: "red",
                height: 40,
                width: "85%",
                borderRadius: 17,
                backgroundColor: "#42a6f5",
              }}
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
        <View
          style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1 }}
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
            value={checkFour}
            onValueChange={(newValue) => setCheckFour(newValue)}
          />
          <Text style={{ fontSize: 12 }}>Food Solide</Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              width: "20%",
              height: 35,
              borderRadius: 3,
              alignItems: "flex-start",
              paddingHorizontal: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                // textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              width: "20%",
              height: 35,
              borderRadius: 3,
              alignItems: "flex-start",
              paddingHorizontal: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                // textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              width: "20%",
              height: 35,
              borderRadius: 3,
              alignItems: "flex-start",
              paddingHorizontal: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                // textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
        </View>
        <View
          style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1 }}
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
            value={checkFive}
            onValueChange={(newValue) => setCheckFive(newValue)}
          />
          <Text style={{ fontSize: 12 }}>Food Liquid</Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              width: "20%",
              height: 35,
              borderRadius: 3,
              alignItems: "flex-start",
              paddingHorizontal: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                // textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              width: "20%",
              height: 35,
              borderRadius: 3,
              alignItems: "flex-start",
              paddingHorizontal: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                // textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              width: "20%",
              height: 35,
              borderRadius: 3,
              alignItems: "flex-start",
              paddingHorizontal: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                // textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
        </View>
        <View
          style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1 }}
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
            value={checkSix}
            onValueChange={(newValue) => setCheckSix(newValue)}
          />
          <Text style={{ fontSize: 12 }}>Food Liquid</Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              width: "20%",
              height: 35,
              borderRadius: 3,
              alignItems: "flex-start",
              paddingHorizontal: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                // textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              width: "20%",
              height: 35,
              borderRadius: 3,
              alignItems: "flex-start",
              paddingHorizontal: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                // textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              width: "20%",
              height: 35,
              borderRadius: 3,
              alignItems: "flex-start",
              paddingHorizontal: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                // textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
        </View>
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
              <MaterialIcons name="chevron-left" size={20} color="grey" />
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
              <MaterialIcons
                name="chevron-right"
                size={20}
                color="grey"
                // style={{ width: "10%" }}
              />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        // onPress={() => setFilter(true)}
        style={{
          //   position: "absolute",
          //   bottom: 20,
          backgroundColor: colors.secondary,
          width: "90%",
          padding: 15,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 30,
          marginVertical: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
          Continuer
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RecordDetail;
