import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "native-base";

const Header = () => (
  <View style={styles.container}>
    <View style={{ marginLeft: 20 }}>
      <Icon name="ios-arrow-back" style={{ color: "white" }} />
    </View>
    <View style={{ marginRight: 20 }}>
      <Icon
        type="SimpleLineIcons"
        name="options-vertical"
        style={{ fontSize: 14, color: "white" }}
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

export default Header;
