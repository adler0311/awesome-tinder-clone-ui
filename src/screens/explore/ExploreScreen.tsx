import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import CardItem from "./CardItem";
import demo from "../../../assets/data/demo";
import Header from "./Header";

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CardStack
        loop={true}
        style={styles.cardStack}
        renderNoMoreCards={() => (
          <Text style={{ fontWeight: "700", fontSize: 18, color: "gray" }}>
            No more cards :(
          </Text>
        )}
        ref={swiper => {
          this.swiper = swiper;
        }}
        onSwiped={() => console.log("onSwipedRight")}
        onSwipedLeft={() => console.log("onSwipedLeft")}
      >
        {demo.map(user => (
          <Card style={styles.card} key={user.id}>
            <CardItem user={user} />
          </Card>
        ))}
      </CardStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  cardStack: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10
  },
  card: { flex: 1 },
  card1: {
    backgroundColor: "#FE474C"
  },
  card2: {
    backgroundColor: "#FEB12C"
  },
  label: {
    textAlign: "center",
    fontSize: 55,
    fontFamily: "System",
    color: "#ffffff",
    backgroundColor: "transparent"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ExploreScreen;
