import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import ListOfferCardProposition from "../components/OfferPropositionCom/ListOfferCardProposition";
import ListOfferCards from "../components/OfferCom/ListOfferCards";

function ListOfferScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{}}>
        <ListOfferCards
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={0}
          navigation={navigation}
          cardOfferMainStatus="card one"
          propFirst={true}
        />
        <ListOfferCards
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={1}
          cardOfferMainStatus="card two"
          navigation={navigation}
          propFirst={false}
        />
        <ListOfferCardProposition
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={3}
          cardOfferMainStatus="card one"
          navigation={navigation}
          propFirst={false}
        />
        <ListOfferCardProposition
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={3}
          cardOfferMainStatus="card five"
          navigation={navigation}
          propFirst={false}
        />
        <ListOfferCards
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={4}
          cardOfferMainStatus="card three"
          navigation={navigation}
          propFirst={false}
        />
        <ListOfferCardProposition
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={2}
          cardOfferMainStatus="card two"
          navigation={navigation}
          propFirst={false}
        />
        <ListOfferCards
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={0}
          cardOfferMainStatus="card four"
          navigation={navigation}
          propFirst={false}
        />
        <ListOfferCards
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={1}
          cardOfferMainStatus="card five"
          navigation={navigation}
          propFirst={false}
        />
        <ListOfferCards
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={3}
          cardOfferMainStatus="card six"
          navigation={navigation}
          propFirst={false}
        />

        <ListOfferCardProposition
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={3}
          cardOfferMainStatus="card three"
          navigation={navigation}
          propFirst={false}
        />
        <ListOfferCardProposition
          cardOfferStatus=" Offers Disponibles"
          cardOfferStatusNumber={3}
          cardOfferMainStatus="card four"
          navigation={navigation}
          propFirst={false}
        />

        <ListOfferCardProposition
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

export default ListOfferScreen;
