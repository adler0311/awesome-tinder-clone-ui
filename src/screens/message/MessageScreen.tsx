import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import { Icon, Thumbnail } from "native-base";
import MatchCard from "../match/MatchCard";

import dummy from "../../../assets/data/demo";
import Message from "./Message";
import Header from "./Header";

const MessageScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <Header />
      <FlatList
        data={dummy}
        renderItem={({ item }) => <Message item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default MessageScreen;
