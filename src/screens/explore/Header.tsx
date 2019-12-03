import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";

const ExploreHeader = () => (
  <View style={styles.top}>
    <TouchableOpacity style={styles.pinButton}>
      <Icon name="ios-pin" style={{ fontSize: 14 }} />
      <Text> New York</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterButton}>
      <Icon
        type="MaterialCommunityIcons"
        name="filter"
        style={{ fontSize: 14 }}
      />
      <Text> Filters</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  top: { marginTop: 40, flexDirection: "row", justifyContent: "space-between" },
  pinButton: {
    flexDirection: "row",
    marginLeft: 30,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 5
  },
  filterButton: {
    flexDirection: "row",
    marginRight: 30,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 5
  }
});

export default ExploreHeader;
