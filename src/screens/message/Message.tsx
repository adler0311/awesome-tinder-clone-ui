import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";
import { Thumbnail } from "native-base";

const Message = ({ item }) => {
  const { image, name, message } = item;

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 12
      }}
    >
      <View style={{ flex: 1 }}>
        <Thumbnail source={image} />
      </View>
      <View style={{ flex: 4 }}>
        <Text style={{ fontWeight: "bold" }}>{name}</Text>
        <View>
          <Text style={{ fontSize: 10 }}>{message}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  statusCircle: {
    borderRadius: 2.5,
    width: 5,
    height: 5,
    marginRight: 5
  }
});

export default Message;
