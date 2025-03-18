import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";

const Home3 = () => {
  return (
    <View>
      <Text>Home3</Text>
      <Link href="/home/Home4">Go To Home 4</Link>
    </View>
  );
};

export default Home3;
