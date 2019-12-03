import React from "react";
import { TouchableOpacity, Image, Text, View, StyleSheet } from "react-native";

type User = {
  id: number;
  name: string;
  status: string;
  match: string;
  description: string;
  message: string;
  image: any;
};

type PropMatchCard = {
  item: User;
};

const MatchCard = ({ item }: PropMatchCard) => {
  const { image, name, status } = item;

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} style={styles.image} />

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ marginTop: 5 }}>{name}</Text>
        <View style={styles.statusContainer}>
          <View
            style={status === "Online" ? styles.online : styles.offline}
          ></View>
          <Text>{status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MatchCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10
  },
  image: {
    height: 150,
    borderRadius: 10,
    width: 140,
    resizeMode: "cover"
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5
  },
  online: {
    backgroundColor: "blue",
    borderRadius: 2.5,
    width: 5,
    height: 5,
    marginRight: 5
  },
  offline: {
    backgroundColor: "red",
    borderRadius: 2.5,
    width: 5,
    height: 5,
    marginRight: 5
  }
});
