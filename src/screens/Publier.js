import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

import colors from "../config/colors";
import DateRangePicker from "rnv-date-range-picker";
import moment from "moment";
import CheckBox from "@react-native-community/checkbox";
import CategoriesTable from "../components/PublierCatTableCom/CategoriesTable";
import Slider from "react-native-slider";
import DropDownPicker from "react-native-dropdown-picker";

const { width, height } = Dimensions.get("screen");
function Publier() {
  const [firstInpCond, setFirstInpCond] = useState(false);
  const [secondInpCond, setSecondInpCond] = useState(false);
  const [weightCond, setWeightCond] = useState(false);
  const [TableScreenCond, setTableScreenCond] = useState(false);
  const [description, setDescription] = useState(false);
  const [foodTable, setFoodTable] = useState(false);
  const [date, setDate] = useState(false);
  const [volume, setVolume] = useState(false);

  const [selectedRange, setRange] = useState({});
  const [qty, setQty] = useState(0);

  const [toggleCheckBox1, setToggleCheckBox1] = useState(true);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
  const [toggleCheckBox4, setToggleCheckBox4] = useState(false);
  const [toggleCheckBox5, setToggleCheckBox5] = useState(false);
  const [toggleCheckBox6, setToggleCheckBox6] = useState(false);
  const [toggleCheckBox7, setToggleCheckBox7] = useState(false);
  const [showDemande, setShowDemande] = useState(false);
  // const [toggleCheckBox8, setToggleCheckBox8] = useState(false);

  const [checkOne, setCheckOne] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);
  const [checkThree, setCheckThree] = useState(false);
  const [checkFour, setCheckFour] = useState(false);
  const [checkFive, setCheckFive] = useState(false);
  const [checkSix, setCheckSix] = useState(false);
  const [val, setVal] = useState(1);
  const [showImage, setShowImage] = useState(true);

  const handleChange = () => {
    setQty(0);
    // setWeightCond(false);
  };

  // dropdown state
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);

  const [items1, setItems1] = useState([
    { label: "Paris", value: "paris" },
    { label: "Nantes", value: "nantes" },
    { label: "Marseille", value: "marseille" },
  ]);
  const [items2, setItems2] = useState([
    { label: "Paris", value: "paris" },
    { label: "Nantes", value: "nantes" },
    { label: "Marseille", value: "marseille" },
  ]);

  const radioButtonsData = [
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: "Offers",
      value: "Offers",
      color: "#007bff",
      selected: "true",
      borderColor: "black",
      size: 18,
    },
    {
      id: "2",
      label: "Demandes",
      value: "Demandes",
      color: "#007bff",
      borderColor: "black",
      size: 18,
    },
  ];

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }
  return (
    <>
      {!firstInpCond &&
      !secondInpCond &&
      !weightCond &&
      !description &&
      !date &&
      !volume &&
      !TableScreenCond ? (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
          <View style={styles.heading}>
            <Text
              style={{ fontSize: 27, fontWeight: "bold", color: "#054752" }}
            >
              Ou voulez-vous aller ?
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginVertical: 10,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setShowDemande(false)}
              style={{
                borderWidth: 2,
                borderColor: showDemande ? "#D3D3D3" : colors.secondary,
                width: width / 2.5,
                height: height / 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 7,
              }}
            >
              <Text style={{ fontWeight: "bold", color: colors.grey }}>
                Offers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowDemande(true)}
              style={{
                borderWidth: 2,
                borderColor: showDemande ? colors.secondary : "#D3D3D3",
                width: width / 2.5,
                height: height / 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 7,
              }}
            >
              <Text style={{ fontWeight: "bold", color: colors.grey }}>
                Demandes
              </Text>
            </TouchableOpacity>

            {/* <RadioGroup
              layout="row"
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
            /> */}
          </View>

          <View style={{ alignItems: "center", marginTop: 20 }}>
            <TextInput
              onFocus={() => setFirstInpCond(true)}
              style={styles.fieldStl}
              placeholder="Depart"
              placeholderTextColor="#718d92"
            />
            <TextInput
              onFocus={() => setSecondInpCond(true)}
              style={styles.fieldStl}
              placeholder="Destination"
              placeholderTextColor="#718d92"
            />
          </View>
          <View style={{ width: "80%", alignSelf: "center", marginTop: 20 }}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "lightgrey",
                width: "100%",
                alignSelf: "center",
              }}
            ></View>
            <TouchableOpacity
              onPress={() => setDate(true)}
              activeOpacity={0.5}
              style={{ marginVertical: 20, alignSelf: "flex-start" }}
            >
              <Text style={{ color: "#1ab7f6", fontSize: 16, paddingLeft: 10 }}>
                Aujord'hui, 00:00
              </Text>
            </TouchableOpacity>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "lightgrey",
                width: "100%",
                alignSelf: "center",
              }}
            ></View>

            {/* <TouchableOpacity
              onPress={() => setWeightCond(true)}
              activeOpacity={0.5}
              style={{ marginVertical: 20, alignSelf: "flex-start" }}
            >
              <Text style={{ color: "#1ab7f6", fontSize: 16, paddingLeft: 10 }}>
                Weight
              </Text>
            </TouchableOpacity> */}
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "lightgrey",
                width: "100%",
                alignSelf: "center",
              }}
            ></View>
          </View>
          {/* <TouchableOpacity
            onPress={() => setWeightCond(true)}
            activeOpacity={0.5}
            style={{
              width: "70%",
              paddingVertical: 10,
              backgroundColor: "#1ab7f6",
              borderRadius: 10,
              alignSelf: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 20, color: "#fff", alignSelf: "center" }}>
              Weight
            </Text>
          </TouchableOpacity> */}
        </SafeAreaView>
      ) : null}
      {firstInpCond ? (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
          <View style={{ width: "100%", paddingLeft: 15, paddingTop: 10 }}>
            <Icon
              name="close"
              size={40}
              color="#42a5cb"
              onPress={() => setFirstInpCond(false)}
            />
          </View>
          <View style={{ paddingVertical: 20 }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                paddingLeft: 25,
                color: "#054752",
              }}
            >
              Dou partez-vous ?
            </Text>
          </View>
          {/* <View
            style={{
              width: "90%",
              alignSelf: "center",
              flexDirection: "row",
              backgroundColor: "#ededed",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              paddingVertical: 10,
            }}
          >
            <Icon name="search" size={30} color="#718d92" />
            <TextInput
              placeholder="ex : Paris Austerlitz"
              placeholderTextColor="#718d92"
              style={{ borderWidth: 0, width: "86%", fontSize: 14 }}
            />
          </View> */}

          <View>
            <DropDownPicker
              searchable={true}
              containerStyle={{
                width: "90%",
                alignSelf: "center",
              }}
              labelStyle={{
                fontSize: 14,
                color: colors.grey,
              }}
              dropDownContainerStyle={{
                borderWidth: 1,
                borderColor: "#CCCCCC",
                backgroundColor: "#ededed",
              }}
              style={{
                borderWidth: 1,
                borderColor: "#CCCCCC",
                backgroundColor: "#ededed",
                height: 60,
              }}
              textStyle={{ color: "#718d92" }}
              searchContainerStyle={{
                borderBottomColor: "#718d92",
                borderBottomWidth: 0.5,
              }}
              searchTextInputStyle={{ borderWidth: 1, borderColor: "grey" }}
              placeholder="ex : Paris Austerlitz"
              placeholderStyle={{ color: "#718d92" }}
              // listItemContainerStyle={{ backgroundColor: "red" }}
              open={open1}
              value={value1}
              items={items1}
              setOpen={setOpen1}
              setValue={setValue1}
              setItems={setItems1}
            />
          </View>
        </SafeAreaView>
      ) : null}
      {secondInpCond ? (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
          <View style={{ width: "100%", paddingLeft: 15, paddingTop: 10 }}>
            <Icon
              name="arrow-back"
              size={40}
              color="#42a5cb"
              onPress={() => setSecondInpCond(false)}
            />
          </View>
          <View style={{ paddingVertical: 20 }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                paddingLeft: 25,
                color: "#054752",
              }}
            >
              Ou allez-vous ?
            </Text>
          </View>
          {/* <View
            style={{
              width: "90%",
              alignSelf: "center",
              flexDirection: "row",
              backgroundColor: "#ededed",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              paddingVertical: 10,
            }}
          >
            <Icon name="search" size={30} color="#718d92" />
            <TextInput
              placeholder="ex : Paris Austerlitz"
              placeholderTextColor="#718d92"
              style={{ borderWidth: 0, width: "86%", fontSize: 14 }}
            />
          </View> */}
          <View>
            <DropDownPicker
              searchable={true}
              containerStyle={{
                width: "90%",
                alignSelf: "center",
              }}
              labelStyle={{
                fontSize: 14,
                color: colors.grey,
              }}
              dropDownContainerStyle={{
                borderWidth: 1,
                borderColor: "#CCCCCC",
                backgroundColor: "#ededed",
              }}
              style={{
                borderWidth: 1,
                borderColor: "#CCCCCC",
                backgroundColor: "#ededed",
                height: 60,
              }}
              textStyle={{ color: "#718d92" }}
              searchContainerStyle={{
                borderBottomColor: "#718d92",
                borderBottomWidth: 0.5,
              }}
              searchTextInputStyle={{ borderWidth: 1, borderColor: "grey" }}
              placeholder="ex : Paris Austerlitz"
              placeholderStyle={{ color: "#718d92" }}
              // listItemContainerStyle={{ backgroundColor: "red" }}
              open={open2}
              value={value2}
              items={items2}
              setOpen={setOpen2}
              setValue={setValue2}
              setItems={setItems2}
            />
          </View>
        </SafeAreaView>
      ) : null}

      {date && (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
          <View style={{ width: "100%", paddingLeft: 15, paddingTop: 15 }}>
            <Icon
              onPress={() => setDate(false)}
              name="arrow-back"
              size={40}
              color="#42a5cb"
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text
              style={{
                fontSize: 27,
                fontWeight: "bold",
                paddingLeft: 25,
                color: "#054752",
              }}
            >
              Quand partez-vous ?
            </Text>
          </View>

          <View style={{ margin: 50 }}>
            <DateRangePicker
              // key={Math.floor(Math.random() * 10)}
              onSelectDateRange={(range) => {
                setRange(range);
              }}
              responseFormat="YYYY-MM-DD"
              maxDate={moment()}
              minDate={moment().subtract(100, "days")}
            />
            {/* <View style={styles.container}>
              <Text>first date: {selectedRange.firstDate}</Text>
              <Text>second date: {selectedRange.secondDate}</Text>
            </View> */}
          </View>

          <View
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              backgroundColor: "#42a5cb",
              borderRadius: 50,
              padding: 10,
            }}
          >
            <Icon
              onPress={() => {
                setWeightCond(true);
                setDate(false);
              }}
              name="arrow-forward"
              size={40}
              color="#FFF"
            />
          </View>
        </SafeAreaView>
      )}

      {weightCond ? (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
          <View style={{ width: "100%", paddingLeft: 15, paddingTop: 15 }}>
            <Icon
              onPress={() => {
                handleChange();
                setWeightCond(false);
                setDate(true);
              }}
              name="arrow-back"
              size={40}
              color="#42a5cb"
            />
          </View>
          <View style={{ paddingVertical: 40 }}>
            <Text
              style={{
                fontSize: 27,
                fontWeight: "bold",
                paddingLeft: 25,
                color: "#054752",
              }}
            >
              Combein de passengers BlaBlaCar pouvez-vous accepter ?
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Icon
              onPress={() => setQty(qty - 1)}
              name="remove-circle-outline"
              size={45}
              color="#42a5cb"
            />
            <Text
              style={{ fontSize: 45, color: "#054752", fontWeight: "bold" }}
            >
              {qty}
            </Text>
            <Icon
              onPress={() => setQty(qty + 1)}
              name="add-circle-outline"
              size={45}
              color="#42a5cb"
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              backgroundColor: "#42a5cb",
              borderRadius: 50,
              padding: 10,
            }}
          >
            <Icon
              onPress={() => {
                setVolume(true), setWeightCond(false);
              }}
              name="arrow-forward"
              size={40}
              color="#FFF"
            />
          </View>
        </SafeAreaView>
      ) : null}

      {volume && !description ? (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
          <View style={{ width: "100%", paddingLeft: 15, paddingTop: 15 }}>
            <Icon
              onPress={() => {
                setVolume(false);
                setWeightCond(true);
              }}
              name="arrow-back"
              size={40}
              color="#42a5cb"
            />
          </View>
          <View style={{ paddingVertical: 40 }}>
            <Text
              style={{
                fontSize: 27,
                fontWeight: "bold",
                paddingLeft: 25,
                color: "#054752",
              }}
            >
              Combein de passengers BlaBlaCar pouvez-vous accepter ?
            </Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                color: colors.grey,
                fontWeight: "bold",
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              Max Volume
            </Text>
            <View style={{ alignItems: "center" }}>
              <Slider
                value={val}
                onValueChange={(val) => setVal(val)}
                thumbTintColor={colors.secondary}
                thumbStyle={{ width: 7, height: 7 }}
                maximumTrackTintColor="#D5E9FF"
                minimumTrackTintColor={colors.secondary}
                trackStyle={{ padding: 0.5 }}
                style={{ width: "85%" }}
                maximumValue={4}
                minimumValue={0}
                step={1}

                //   debugTouchArea={true}
              />
            </View>
            <View
              style={{
                justifyContent: "space-between",
                alignSelf: "center",
                flexDirection: "row",
                alignItems: "center",
                width: "85%",
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../assets/assit/can.png")}
                style={{ width: 25, height: 25 }}
              />
              <Image
                resizeMode="contain"
                source={require("../assets/assit/small.png")}
                style={{ width: 40, height: 40 }}
              />
              <Image
                resizeMode="contain"
                source={require("../assets/assit/medium.png")}
                style={{ width: 60, height: 60 }}
              />
              <Image
                resizeMode="contain"
                source={require("../assets/assit/large.png")}
                style={{ width: 70, height: 70 }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: colors.primary,
                  fontWeight: "bold",
                }}
              >
                No Max
              </Text>
            </View>
          </View>
          {/* <View
            style={{
              borderWidth: 1,
              borderColor: "grey",
              width: "80%",
              alignSelf: "center",
              height: 150,
              borderRadius: 10,
              padding: 5,
            }}
          >
            <TextInput
              multiline={true}
              style={{ fontSize: 18, color: "grey" }}
              placeholder="This is a description"
              placeholderTextColor="grey"
            />
          </View> */}

          <View
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              backgroundColor: "#42a5cb",
              borderRadius: 50,
              padding: 10,
            }}
          >
            <Icon
              onPress={() => {
                setDescription(true), setVolume(false);
              }}
              name="arrow-forward"
              size={40}
              color="#FFF"
            />
          </View>
        </SafeAreaView>
      ) : null}

      {description && !TableScreenCond ? (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
          <View style={{ width: "100%", paddingLeft: 15, paddingTop: 15 }}>
            <Icon
              onPress={() => {
                setDescription(false);
                setVolume(true);
              }}
              name="arrow-back"
              size={40}
              color="#42a5cb"
            />
          </View>
          <View style={{ paddingVertical: 40 }}>
            <Text
              style={{
                fontSize: 27,
                fontWeight: "bold",
                paddingLeft: 25,
                color: "#054752",
              }}
            >
              Combein de passengers BlaBlaCar pouvez-vous accepter ?
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "grey",
              width: "80%",
              alignSelf: "center",
              height: 150,
              borderRadius: 10,
              padding: 5,
            }}
          >
            <TextInput
              multiline={true}
              style={{ fontSize: 18, color: "grey" }}
              placeholder="This is a description"
              placeholderTextColor="grey"
            />
          </View>

          <View
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              backgroundColor: "#42a5cb",
              borderRadius: 50,
              padding: 10,
            }}
          >
            <Icon
              onPress={() => {
                setTableScreenCond(true), setDescription(false);
              }}
              name="arrow-forward"
              size={40}
              color="#FFF"
            />
          </View>
        </SafeAreaView>
      ) : null}
      {TableScreenCond ? (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
          <View style={{ paddingLeft: 15, paddingTop: 15 }}>
            <Icon
              onPress={() => {
                setTableScreenCond(false);
                setDescription(true);
              }}
              name="arrow-back"
              size={40}
              color="#42a5cb"
            />
          </View>
          <View
            style={{
              borderBottomColor: colors.light,
              borderBottomWidth: 1,
              width: "100%",
            }}
          ></View>
          {showDemande ? (
            <View style={{ flex: 1 }}>
              <ScrollView style={{}}>
                <View
                  style={{
                    marginVertical: 10,
                    paddingLeft: 15,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 27,
                      fontWeight: "bold",
                      // paddingLeft: 25,
                      color: "#054752",
                    }}
                  >
                    Ou allez-vous ?
                  </Text>
                </View>
                {/* <View
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
            poka
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
        </View> */}

                <View
                  style={{
                    width: "95%",
                    alignSelf: "center",
                    elevation: 2,
                    borderColor: "#E0E0E0",
                    borderRadius: 3,
                    shadowRadius: 3,
                    shadowColor: colors.grey,
                  }}
                >
                  <View
                    style={{
                      width: "95%",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignSelf: "flex-end",
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                    }}
                  >
                    <Text style={{ fontSize: 12 }}>Name</Text>
                    <Text style={{ fontSize: 12 }}>Max quantity</Text>
                    <Text style={{ fontSize: 12 }}>Max Weight</Text>
                    <Text style={{ fontSize: 12 }}>Price</Text>
                  </View>
                  {/* {subCategories
          .filter((name) => {
            return name.toLowerCase().indexOf(searchField.toLowerCase()) >= 0;
          })
          .map((v, i) => {
            return ( */}
                  <View>
                    <View
                      style={{
                        borderBottomColor: "lightgrey",
                        borderBottomWidth: 1,
                      }}
                    ></View>
                    <View
                      style={{
                        width: "100%",
                        alignSelf: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingVertical: 10,
                        alignItems: "center",
                        paddingHorizontal: 5,
                      }}
                    >
                      {/* <CheckBox
                    tintColors={{ true: "#2196f3" }}
                    disabled={false}
                   
                  /> */}
                      <TouchableOpacity
                        onPress={() => setShowImage(!showImage)}
                      >
                        <MaterialCommunityIcons
                          name={showImage ? "chevron-down" : "chevron-up"}
                          size={20}
                          color="grey"
                        />
                      </TouchableOpacity>

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
                      <Text
                        style={{
                          fontSize: 10,
                          width: "25%",
                          textAlign: "center",
                        }}
                      >
                        Waiting for price
                      </Text>
                    </View>
                  </View>
                  {showImage ? (
                    <>
                      <View
                        style={{
                          borderBottomColor: "lightgrey",
                          borderBottomWidth: 1,
                          width: "100%",
                        }}
                      ></View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-end",
                          width: "100%",
                        }}
                      >
                        <View
                          style={{
                            width: "22%",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <FontAwesome
                            name="camera"
                            color={colors.secondary}
                            size={25}
                          />
                          <Text style={{ fontSize: 10, textAlign: "center" }}>
                            Select up to 3 images for your item
                          </Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: colors.light,
                            width: "23%",
                            height: 90,
                            alignItems: "center",
                            justifyContent: "center",
                            borderWidth: 1,
                            borderColor: colors.light,
                            margin: 2,
                            borderRadius: 5,
                            marginVertical: 5,
                            marginLeft: 5,
                            // marginHorizontal: 5,
                          }}
                        >
                          <FontAwesome name="image" color="#BABEC1" size={40} />
                        </View>
                        <View
                          style={{
                            backgroundColor: colors.light,
                            width: "23%",
                            height: 90,
                            alignItems: "center",
                            justifyContent: "center",
                            borderWidth: 1,
                            borderColor: colors.light,
                            margin: 2,
                            borderRadius: 5,
                            marginVertical: 5,
                            marginHorizontal: 5,
                          }}
                        >
                          <FontAwesome name="image" color="#BABEC1" size={40} />
                        </View>
                        <View
                          style={{
                            backgroundColor: colors.light,
                            width: "23%",
                            height: 90,
                            alignItems: "center",
                            justifyContent: "center",
                            borderWidth: 1,
                            borderColor: colors.light,
                            marginVertical: 5,
                            marginRight: 5,
                            borderRadius: 5,
                          }}
                        >
                          <FontAwesome name="image" color="#BABEC1" size={40} />
                        </View>
                      </View>
                    </>
                  ) : null}
                </View>

                <View
                  style={{
                    marginBottom: 10,
                    paddingHorizontal: 10,
                    alignSelf: "flex-end",
                    marginVertical: 10,
                  }}
                >
                  <TouchableOpacity
                    // activeOpacity={0.8}
                    style={{
                      width: 80,
                      borderWidth: 1,
                      borderColor: "#00AFF5",
                      backgroundColor: "#007BFF",
                      height: 35,
                      borderRadius: 3,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "#FFF" }}>ADD ITEM</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          ) : (
            <ScrollView style={{}}>
              <View style={{ paddingVertical: 10, paddingLeft: 15 }}>
                <Text
                  style={{
                    fontSize: 27,
                    fontWeight: "bold",
                    // paddingLeft: 25,
                    color: "#054752",
                  }}
                >
                  Ou allez-vous ?
                </Text>
              </View>
              <View style={{ paddingLeft: 15, marginVertical: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <CheckBox
                    tintColors={{ true: "#FF3E81" }}
                    disabled={false}
                    value={toggleCheckBox1}
                    onValueChange={(newValue) => setToggleCheckBox1(newValue)}
                  />
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>Food</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <CheckBox
                    tintColors={{ true: "#FF3E81" }}
                    disabled={false}
                    value={toggleCheckBox2}
                    onValueChange={(newValue) => setToggleCheckBox2(newValue)}
                  />
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>
                    Medicaments
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <CheckBox
                    tintColors={{ true: "#FF3E81" }}
                    disabled={false}
                    value={toggleCheckBox3}
                    onValueChange={(newValue) => setToggleCheckBox3(newValue)}
                  />
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>
                    Small Electronics
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <CheckBox
                    tintColors={{ true: "#FF3E81" }}
                    disabled={false}
                    value={toggleCheckBox4}
                    onValueChange={(newValue) => setToggleCheckBox4(newValue)}
                  />
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>
                    Vetements
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <CheckBox
                    tintColors={{ true: "#FF3E81" }}
                    disabled={false}
                    value={toggleCheckBox5}
                    onValueChange={(newValue) => setToggleCheckBox5(newValue)}
                  />
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>
                    Big Mechnaical
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <CheckBox
                    tintColors={{ true: "#FF3E81" }}
                    disabled={false}
                    value={toggleCheckBox6}
                    onValueChange={(newValue) => setToggleCheckBox6(newValue)}
                  />
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>
                    Big Electronics
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <CheckBox
                    tintColors={{ true: "#FF3E81" }}
                    disabled={false}
                    value={toggleCheckBox7}
                    onValueChange={(newValue) => setToggleCheckBox7(newValue)}
                  />
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>
                    Small Accessories
                  </Text>
                </View>
                {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CheckBox
                  tintColors={{ true: "#FF3E81" }}
                  disabled={false}
                  value={toggleCheckBox8}
                  onValueChange={(newValue) => setToggleCheckBox8(newValue)}
                />
                <Text style={{ fontSize: 18, fontWeight: "600" }}>Others</Text>
              </View> */}
              </View>
              <View style={{ margin: 10 }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: colors.primary,
                  }}
                >
                  D'ou partez-vous ?
                </Text>
              </View>
              {toggleCheckBox1 ||
              toggleCheckBox2 ||
              toggleCheckBox3 ||
              toggleCheckBox4 ||
              toggleCheckBox5 ||
              toggleCheckBox6 ||
              toggleCheckBox7 ? (
                <View
                  style={{
                    marginBottom: 10,
                    paddingHorizontal: 20,
                    alignSelf: "flex-end",
                  }}
                >
                  <TouchableOpacity
                    // activeOpacity={0.8}
                    style={{
                      width: 80,
                      borderWidth: 1,
                      borderColor: "#00AFF5",
                      height: 40,
                      borderRadius: 3,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "#00AFF5" }}>CREATE</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
              {toggleCheckBox1 && (
                <CategoriesTable
                  categoryName="Food"
                  // subCatigories1="Food Solide"
                  // subCatigories2="Food Liquid"
                  subCategories={["Food Solide", "Food Liquid"]}
                />
              )}
              {toggleCheckBox2 && (
                <CategoriesTable
                  categoryName="Medicaments"
                  subCategories={["Medicaments"]}
                />
              )}
              {toggleCheckBox3 && (
                <CategoriesTable
                  categoryName="Small Electronics"
                  // subCatigories1="Portable"
                  // subCatigories2="HeartBeat"
                  subCategories={["Portable", "HeartBeat"]}
                />
              )}
              {toggleCheckBox4 && (
                <CategoriesTable
                  categoryName="Vetements"
                  // subCatigories1="Pantalon"
                  // subCatigories2="Robe"
                  subCategories={["Pantalon", "Robe", "Chaussure"]}
                />
              )}
              {toggleCheckBox5 && (
                <CategoriesTable
                  categoryName="Big Mechanaical"
                  // subCatigories1="Moteur"
                  // subCatigories2="Tronrtinette"
                  subCategories={["Moteur", "Tronrtinette"]}
                />
              )}
              {toggleCheckBox6 && (
                <CategoriesTable
                  categoryName="Big Electronics"
                  // subCatigories1="Machine Cafe"
                  // subCatigories2="Machine a Laver"
                  subCategories={["Machine Cafe", "Machine a Laver"]}
                />
              )}
              {toggleCheckBox7 && (
                <CategoriesTable
                  categoryName="Small Accessories"
                  // subCatigories1="Montre"
                  // subCatigories2="Braclet"
                  subCategories={["Montre", "Braclet"]}
                />
              )}
              {/* {toggleCheckBox8 && (
              <CategoriesTable categoryName="Others" subCategories={[]} />
            )} */}
              {toggleCheckBox1 ||
              toggleCheckBox2 ||
              toggleCheckBox3 ||
              toggleCheckBox4 ||
              toggleCheckBox5 ||
              toggleCheckBox6 ||
              toggleCheckBox7 ? (
                <View
                  style={{
                    marginBottom: 10,
                    paddingHorizontal: 20,
                    alignSelf: "flex-end",
                  }}
                >
                  <TouchableOpacity
                    // activeOpacity={0.8}
                    style={{
                      width: 80,
                      borderWidth: 1,
                      borderColor: "#00AFF5",
                      height: 40,
                      borderRadius: 3,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "#00AFF5" }}>CREATE</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </ScrollView>
          )}
        </SafeAreaView>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 40,
    paddingLeft: 20,
  },
  fieldStl: {
    backgroundColor: "#EDEDED",
    padding: 20,
    borderRadius: 18,
    fontSize: 18,
    marginVertical: 10,
    width: "90%",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 5,
    color: "#000",
    shadowColor: "#000",
  },
});

export default Publier;
