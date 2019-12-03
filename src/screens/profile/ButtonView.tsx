import React from "react";
import { View, Icon } from "native-base";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonView = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.optionButton}>
      <Icon
        type="SimpleLineIcons"
        name="options"
        style={{ fontSize: 14, color: "white" }}
      />
    </TouchableOpacity>
    <TouchableOpacity style={styles.startChattingButton}>
      <Icon
        name="ios-chatbubbles"
        style={{ fontSize: 14, color: "white", marginRight: 5 }}
      />
      <Text style={{ color: "white" }}>Start chatting</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 20,
    alignItems: "center"
  },
  optionButton: {
    marginLeft: 50,
    backgroundColor: "rgb(138,43,226)",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20
  },
  startChattingButton: {
    marginRight: 50,
    backgroundColor: "rgb(138,43,226)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10
  }
});

export default ButtonView;
