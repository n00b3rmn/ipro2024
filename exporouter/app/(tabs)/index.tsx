import React from "react";
import { Link, router } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";

const index = () => {
  return (
    <View>
      <Text>Home page</Text>
      <Link href="/user/1">Go To user 1</Link>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/user/[id]",
            params: { id: 2, ipro: "ip" },
          })
        }
      >
        <Text>Go to user 2</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          router.push({ pathname: "/Home2" });
        }}
      >
        <Image
          style={{ height: 100, width: 100 }}
          source="https://picsum.photos/seed/696/3000/2000"
          contentFit="cover"
          transition={1000}
        />
      </Pressable>
    </View>
  );
};

export default index;
