import React from "react";
import { View, Icon } from "native-base";
import { Text, StyleSheet } from "react-native";

import demo from "../../../assets/data/demo";
import RowInfo from "./RowInfo";

const { name, match } = demo[7];

const ProfileItem = () => (
  <View style={styles.container}>
    <View style={styles.matchContainer}>
      <Icon name="ios-heart" style={{ color: "white", fontSize: 14 }} />
      <Text style={{ color: "white", marginLeft: 5 }}>{match}% Match!</Text>
    </View>
    <View style={styles.infoContainer}>
      <View style={{ marginVertical: 7 }}>
        <Text style={{ fontWeight: "bold" }}>{name}</Text>
        <Text style={{ color: "grey" }}>27 - Irvine, CA</Text>
      </View>
      <View>
        <RowInfo icon="ios-person" contents='Straight, Single, 5" 10' />
        <RowInfo
          icon="ios-watch"
          contents="Tea Totaller, Loves Photography & Travel"
        />
        <RowInfo icon="ios-subway" contents="Beaches, Mountain, Cafe, Movies" />
        <RowInfo icon="ios-calendar" contents="Last Seen: 23h ago" />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "absolute",
    top: -40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },

  matchContainer: {
    backgroundColor: "rgb(138,43,226)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 2,
    position: "absolute",
    top: -15
  },
  infoContainer: {
    marginTop: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10
  }
});

export default ProfileItem;
