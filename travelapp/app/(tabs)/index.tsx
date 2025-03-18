import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors1";

const Mainhome = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerStyle: {
            height: 60,
          },
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={styles.imgIcon}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.notifIcon}>
              <Ionicons name="notifications" size={24} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Travel app</Text>
      </View>
      <View></View>
    </View>
  );
};

export default Mainhome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.bgColor,
    marginTop: 65,
  },
  notifIcon: {
    padding: 10,
    marginRight: 20,
    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { height: 4, width: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    borderRadius: 10,
  },
  imgIcon: {
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  titleStyle: {
    fontWeight: 800,
    fontSize: 30,
    marginLeft: 10,
  },
});
