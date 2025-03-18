import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, View } from "react-native";
import Colors from "@/constants/Colors1";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: Colors.bgColor, height: 100 },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => <Ionicons name="compass" size={24} />,
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          tabBarIcon: () => <MaterialIcons name="category" size={24} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: () => (
            <View
              style={{
                backgroundColor: Colors.primaryColor,
                borderRadius: 10,
                padding: 5,
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="search" size={30} color={Colors.white} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          tabBarIcon: () => <Ionicons name="bookmark" size={24} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => <AntDesign name="user" size={24} />,
        }}
      />
    </Tabs>
  );
}
