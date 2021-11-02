import React, { useState, useRef, useEffect } from "react";

import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import RadioGroup from "react-native-radio-buttons-group";

import Cards from "../components/HomeScreenCardCom/Cards";
import colors from "../config/colors";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { cards } from "./DummyData";
const { width, height } = Dimensions.get("screen");
function HomeScreen({ navigation }) {
  //top bar state
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  // filter state
  const [filter, setFilter] = useState(false);

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

  //date time state
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [apiData, setApiData] = useState([]);
  //top bar
  const changeFirst = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
    console.log(first, "first");
  };
  const changeSecond = () => {
    setFirst(false);
    setSecond(true);
    setThird(false);
    console.log(second, "second");
  };
  const changeThird = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
    console.log(third, "first");
  };

  //dati time picker
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
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
  const getFunc= async () => {
    await fetch(`https://rjeapp.herokuapp.com/api/get-all-records/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Accept: 'application/json',
      },
    })
      .then((response) => response.text())
      .then(async (responseJson) => {

        setApiData(JSON.parse(responseJson))
      })
      .catch((error) => {
        console.log('Check error', error);
      });
  };
  useEffect 
    (() => {
      getFunc();
    },
    []);
  const renderItem = ({ item }) => {
    console.log(item.sub_records);
    return (
      <Cards
      propFirst={item.moyen_de_transport=='Car'?true:false}
        navigation={navigation}
        date={item.created_at}
        Vehical={item.moyen_de_transport}
        price={ item.sub_records.map((ele)=>ele.price)}
        weight={item.max_weight}
        from={item.city_destination}
        to={item.city_arrival}
        source={item.image}
        name={item.user.username}
        ratting={item.ratting}
      />
    );
  };
  return (
    <>
      {filter == false ? (
        <SafeAreaView
          style={{ flex: 1, backgroundColor: "#FFF", alignItems: "center" }}
        >
          <View style={{ width: "100%", flexDirection: "row", height: 70 }}>
            <TouchableOpacity
              onPress={() => changeFirst()}
              activeOpacity={1}
              style={{
                width: "33.3%",
                justifyContent: "center",
                alignItems: "center",
                borderBottomWidth: 2,
                borderBottomColor: first ? colors.primary : colors.light,
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  color: first ? colors.primary : colors.secondary,
                }}
              >
                Tout
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 18,
                  color: first ? colors.primary : colors.secondary,
                }}
              >
                114
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => changeSecond()}
              activeOpacity={1}
              style={{
                width: "33.3%",
                justifyContent: "center",
                alignItems: "center",
                borderBottomWidth: 2,
                borderBottomColor: second ? colors.primary : colors.light,
              }}
            >
              <Icon
                name="directions-car"
                size={32}
                color={second ? colors.primary : colors.secondary}
              />
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 18,
                  color: second ? colors.primary : colors.secondary,
                }}
              >
                107
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => changeThird()}
              activeOpacity={1}
              style={{
                width: "33.3%",
                justifyContent: "center",
                alignItems: "center",
                borderBottomWidth: 2,
                borderBottomColor: third ? colors.primary : colors.light,
              }}
            >
              <FontAwesome
                name="plane"
                size={32}
                color={third ? colors.primary : colors.secondary}
              />
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 18,
                  color: third ? colors.primary : colors.secondary,
                }}
              >
                7
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={{}}>
            {first ? (
              <>
                <FlatList data={apiData} renderItem={renderItem} />
                {/* <Cards navigation={navigation} propFirst={false} />
                <Cards navigation={navigation} propFirst={true} />
                <Cards navigation={navigation} propFirst={false} />
                <Cards navigation={navigation} propFirst={true} /> */}
              </>
            ) : second ? (
              <>
                <Cards navigation={navigation} propFirst={true} />
                <Cards navigation={navigation} propFirst={true} />
              </>
            ) : (
              third && <Cards navigation={navigation} propFirst={false} />
            )}
          </ScrollView>

          <TouchableOpacity
            onPress={() => setFilter(true)}
            style={{
              position: "absolute",
              bottom: 20,
              // left: 120,
              backgroundColor: colors.secondary,
              width: width / 3.5,
              padding: 15,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
              Filter
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      ) : (
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "#FFF",
            justifyContent: "flex-start",
            paddingTop: height / 15,
            // alignItems: "center",
          }}
        >
          <View
            style={{
              marginVertical: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RadioGroup
              layout="row"
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <DropDownPicker
              containerStyle={{ width: width / 2.2 }}
              labelStyle={{ fontSize: 14, color: colors.grey }}
              dropDownContainerStyle={{
                borderWidth: 1,
                borderColor: "#CCCCCC",
              }}
              style={{ borderWidth: 1, borderColor: "#CCCCCC" }}
              placeholder="Arrival"
              // listItemContainerStyle={{ backgroundColor: "red" }}
              open={open1}
              value={value1}
              items={items1}
              setOpen={setOpen1}
              setValue={setValue1}
              setItems={setItems1}
            />

            <DropDownPicker
              containerStyle={{ width: width / 2.2 }}
              labelStyle={{ fontSize: 14, color: colors.grey }}
              dropDownContainerStyle={{
                borderWidth: 1,
                borderColor: "#CCCCCC",
              }}
              style={{ borderWidth: 1, borderColor: "#CCCCCC" }}
              placeholder="Destination"
              // listItemContainerStyle={{ backgroundColor: "red" }}
              open={open2}
              value={value2}
              items={items2}
              setOpen={setOpen2}
              setValue={setValue2}
              setItems={setItems2}
            />
          </View>
          <TouchableOpacity
            onPress={showDatepicker}
            style={{
              borderWidth: 2,
              borderColor: colors.primary,
              marginVertical: 20,
              alignSelf: "center",
              width: width / 2,
              alignItems: "center",
              borderRadius: 10,
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <FontAwesome name="calendar" color={colors.secondary} size={22} />

            <Text
              style={{
                fontSize: 18,
                marginHorizontal: 10,
                color: colors.primary,
              }}
            >
              Pick your date
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFilter(false)}
            style={{
              position: "absolute",
              bottom: 10,
              borderWidth: 2,
              borderColor: colors.secondary,
              marginVertical: 20,
              alignSelf: "center",
              width: width / 2,
              alignItems: "center",
              borderRadius: 10,
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <FontAwesome name="search" color={colors.secondary} size={28} />
            <Text style={{ color: colors.secondary, marginHorizontal: 10 }}>
              RECHERCHER
            </Text>
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
          {/* <DropDownPicker
            containerStyle={{ width: 100 }}
            labelStyle={{ fontSize: 12 }}
            dropDownContainerStyle={{
              borderWidth: 1,
              borderColor: colors.grey,
            }}
            style={{ borderWidth: 1, borderColor: colors.grey }}
            // listItemContainerStyle={{ backgroundColor: "red" }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          /> */}
          {/* <TouchableOpacity
            onPress={() => setFilter(false)}
            style={{
              marginVertical: 10,
              width: "90%",
              // height: height / 4,
              backgroundColor: "#F7F8FB",
              borderRadius: 8,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 8,
              elevation: 5,
              overflow: "hidden",
              shadowColor: "#000",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: width / 1, height: height / 6 }}
              source={require("../assets/amazon.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFilter(false)}
            style={{
              marginVertical: 10,
              width: "90%",
              // height: height / 4,
              backgroundColor: "#F7F8FB",
              borderRadius: 5,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 8,
              elevation: 5,
              overflow: "hidden",
              shadowColor: "#000",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: width / 2.5, height: height / 6 }}
              source={require("../assets/ebay.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFilter(false)}
            style={{
              marginVertical: 10,
              width: "90%",
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
              // alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: width / 2, height: height / 6 }}
              source={require("../assets/cdisc.png")}
            />
          </TouchableOpacity> */}
        </SafeAreaView>
      )}
    </>
  );
}

export default HomeScreen;
