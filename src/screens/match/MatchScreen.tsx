import React from "react";
import { View, FlatList } from "react-native";
import dummy from "../../../assets/data/demo";
import MatchCard from "./MatchCard";
import Header from "./Header";

const MatchScreen = () => (
  <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
    <Header />
    <FlatList
      numColumns={2}
      data={dummy}
      renderItem={({ item }) => <MatchCard item={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

export default MatchScreen;
