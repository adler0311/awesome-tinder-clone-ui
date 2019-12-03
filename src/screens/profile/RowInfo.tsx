import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";

const RowInfo = ({ icon, contents }) => (
  <View style={styles.container}>
    <Icon name={icon} style={{ fontSize: 20, marginRight: 10 }} />
    <Text style={{ color: "grey" }}>{contents}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 7,
    flexDirection: "row",
    alignItems: "center"
  }
});

export default RowInfo;
