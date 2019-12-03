import React from "react";
import { View, ImageBackground } from "react-native";

import demo from "../../../assets/data/demo";
import ProfileItem from "./ProfileItem";
import ButtonView from "./ButtonView";
import Header from "./Header";

const user = demo[7];

const ProfileScreen = () => {
  const { image } = user;
  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <ImageBackground
        source={image}
        style={{ width: "100%", height: "100%", flex: 1.5 }}
      >
        <Header />
      </ImageBackground>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ProfileItem />
        <View style={{ flex: 5 }}></View>
        <ButtonView />
      </View>
    </View>
  );
};

export default ProfileScreen;
