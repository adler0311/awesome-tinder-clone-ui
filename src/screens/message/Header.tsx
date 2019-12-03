import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";

const MessageHeader = () => (
  <View style={styles.container}>
    <View style={{ marginLeft: 20 }}>
      <Text style={{ fontSize: 18 }}>Messages</Text>
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
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default MessageHeader;
