import { router } from "expo-router";
import React from "react";
import { View, Text, Pressable } from "react-native";

const About = () => {
  return (
    <Pressable
      onPress={() => {
        router.push({ pathname: "../Aboutus" });
      }}
    >
      <Text>ABOUT PAGE</Text>
    </Pressable>
  );
};

export default About;
