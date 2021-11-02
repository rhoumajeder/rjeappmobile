import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import ListReqCardProposition from "../components/RequestPropositionCom/ListReqCardProposition";
import ListReqCards from "../components/RequestCom/ListReqCards";

function ListRequestScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{}}>
        <ListReqCards
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={0}
          navigation={navigation}
          cardOfferMainStatus="card one"
          propFirst={true}
        />
        <ListReqCards
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={1}
          cardOfferMainStatus="card two"
          navigation={navigation}
          propFirst={false}
        />
        <ListReqCardProposition
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={3}
          cardOfferMainStatus="card four"
          navigation={navigation}
          propFirst={false}
        />
        <ListReqCardProposition
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={3}
          cardOfferMainStatus="card three"
          navigation={navigation}
          propFirst={false}
        />
        <ListReqCards
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={4}
          cardOfferMainStatus="card three"
          navigation={navigation}
          propFirst={false}
        />
        <ListReqCards
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={0}
          cardOfferMainStatus="card four"
          navigation={navigation}
          propFirst={false}
        />
        <ListReqCardProposition
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={3}
          cardOfferMainStatus="card five"
          navigation={navigation}
          propFirst={false}
        />
        <ListReqCards
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={1}
          cardOfferMainStatus="card five"
          navigation={navigation}
          propFirst={false}
        />
        <ListReqCards
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={3}
          cardOfferMainStatus="card six"
          navigation={navigation}
          propFirst={false}
        />
        <ListReqCardProposition
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={3}
          cardOfferMainStatus="card one"
          navigation={navigation}
          propFirst={false}
        />
        <ListReqCardProposition
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={3}
          cardOfferMainStatus="card two"
          navigation={navigation}
          propFirst={false}
        />

        <ListReqCardProposition
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={3}
          cardOfferMainStatus="card six"
          navigation={navigation}
          propFirst={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
});

export default ListRequestScreen;
