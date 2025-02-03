import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  useWindowDimensions,
  Image,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ccc" }}>
    <ScrollView>
      <View style={{ height: 150 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            //justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgContainerTop}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              {/* Icon overlay on the image */}
              <AntDesign
                name="heart"
                size={20}
                color="red"
                style={{ position: "absolute", top: 5, right: 15 }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", flex: 3, alignItems: "center" }}>
          <Text style={{ fontWeight: 800 }}>Энэ сарын онцлох</Text>
          <AntDesign name="star" size={18} color="gold" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: 800 }}>Бүгд</Text>
          <AntDesign name="star" size={18} color="gold" />
        </View>
      </View>
      <View style={{}}>
        <Text style={{ fontSize: 10 }}>Аудио ном</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          //justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          </View>
        ))}
      </ScrollView>
      <Text>abc</Text>
      <Text>abc</Text>
      <Text>abc</Text>
      <Text>abc</Text>
      <Text>abc</Text>
      <Text>abc</Text>
      <Text>abc</Text>
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }}></View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  a: ThirdRoute,
  b: ThirdRoute,
  c: ThirdRoute,
  d: ThirdRoute,
  e: ThirdRoute,
  f: ThirdRoute,
  g: ThirdRoute,
  h: ThirdRoute,
  i: ThirdRoute,
});

const routes = [
  { key: "first", title: "Танд зориулсан" },
  { key: "second", title: "Аудио ном" },
  { key: "third", title: "Цахим ном" },
  { key: "a", title: "Цахим ном" },
  { key: "b", title: "Цахим ном" },
  { key: "c", title: "Цахим ном" },
  { key: "d", title: "Цахим ном" },
  { key: "e", title: "Цахим ном" },
  { key: "f", title: "Цахим ном" },
  { key: "g", title: "Цахим ном" },
  { key: "h", title: "Цахим ном" },
  { key: "i", title: "Цахим ном" },
];

export default function index() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            scrollEnabled={true} // Tab-ууд гүйлгэх боломжтой болно
            style={{ backgroundColor: "orange" }}
          />
        )}
      />
      <View style={{ flexDirection: "row" }}>
        <Text>HELLO WORLD</Text>
        <FontAwesome6 name="chevron-right" size={24} color="plum" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imgContainer: {
    height: 100,
    width: 100,
    marginRight: 10,
    marginLeft: 10,
  },
  imgContainerTop: {
    height: 100,
    width: 200,
    marginRight: 10,
    marginLeft: 10,
  },
});
