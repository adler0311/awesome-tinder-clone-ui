import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Icon } from "native-base";

const CardItem = ({ user }) => {
  const { name, match, description, image } = user;
  return (
    <View style={{ flex: 1, backgroundColor: "white", borderRadius: 10 }}>
      <View style={{ margin: 20, flex: 1 }}>
        <Image source={image} style={styles.cardItemImage} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          marginHorizontal: 20,
          alignItems: "center"
        }}
      >
        <View style={styles.matchView}>
          <Icon name="ios-heart" style={{ color: "white", fontSize: 14 }} />
          <Text style={{ color: "white", marginLeft: 5 }}>{match}% Match!</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 24 }}>{name}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "grey", fontSize: 12 }}>{description}</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "space-around",
              marginBottom: 10
            }}
          >
            <TouchableOpacity>
              <Icon name="ios-star" style={{ color: "yellow" }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.swiper.swipeLeft();
              }}
            >
              <Icon name="ios-close" style={{ fontSize: 60 }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.swiper.swipeRight();
              }}
            >
              <Icon
                name="ios-heart"
                style={{ color: "rgb(138,43,226)", fontSize: 40 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="ios-flash" style={{ color: "blue" }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardItemImage: {
    height: 320,
    width: 260,
    borderRadius: 10
  },
  matchView: {
    backgroundColor: "rgb(138,43,226)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 5,
    position: "absolute",
    top: -40
  }
});

export default CardItem;
