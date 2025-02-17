import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";

const Home2 = () => {
  return (
    <View>
      <Text>Home2</Text>
      <Link href="/home/Home3">Go To Home 3</Link>
    </View>
  );
};

export default Home2;
