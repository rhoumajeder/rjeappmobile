import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { getToken } from "../config/Exports";
const check = ({ navigation }) => {
  useEffect(() => {
    checkApi();
  }, []);
  const checkApi = () => {
    const email = "user1@gmail.com";
    const Pass = "userpassword";
    getToken(email, Pass)
      .then(({ data }) => {
        console.log(JSON.stringify(data));
      })
      .catch((error) => {
        alert("ERROR : ", error);
      });
  };
  return <View style={{}}></View>;
};
export default check;
