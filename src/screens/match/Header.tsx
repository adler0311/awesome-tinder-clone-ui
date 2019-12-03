import React from "react";
import { Icon } from "native-base";
import { View, Text, StyleSheet } from "react-native";

const MatchHeader = () => (
  <View style={styles.container}>
    <View style={{ marginLeft: 20 }}>
      <Text style={{ fontSize: 18 }}>Matches</Text>
    </View>
    <View style={{ marginRight: 20 }}>
      <Icon
        type="SimpleLineIcons"
        name="options-vertical"
        style={{ fontSize: 14 }}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default MatchHeader;
