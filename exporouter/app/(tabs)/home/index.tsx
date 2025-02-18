import { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Image } from "expo-image";
// import { data } from "../data/data";
import { AntDesign } from "@expo/vector-icons";

const index = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("United States");
  const [isHovered, setIsHovered] = useState("");
  const [countryData, setCountryData] = useState({});

  const data1 = [
    {
      name: "United States",
      capital: "Washington, D.C.",
      population: 331002651,
      area_km2: 9833517,
      currency: "USD",
      languages: ["English"],
      icon: "stepforward",
    },
    {
      name: "Canada",
      capital: "Ottawa",
      population: 37742154,
      area_km2: 9984670,
      currency: "CAD",
      languages: ["English", "French"],
      icon: "stepbackward",
    },
    {
      name: "Germany",
      capital: "Berlin",
      population: 83783942,
      area_km2: 357022,
      currency: "EUR",
      languages: ["German"],
      icon: "forward",
    },
    {
      name: "France",
      capital: "Paris",
      population: 67081000,
      area_km2: 551695,
      currency: "EUR",
      languages: ["French"],
      icon: "caretright",
    },
    {
      name: "Japan",
      capital: "Tokyo",
      population: 126476461,
      area_km2: 377975,
      currency: "JPY",
      languages: ["Japanese"],
      icon: "leftcircle",
    },
    {
      name: "Australia",
      capital: "Canberra",
      population: 25499884,
      area_km2: 7692024,
      currency: "AUD",
      languages: ["English"],
      icon: "verticleleft",
    },
    {
      name: "India",
      capital: "New Delhi",
      population: 1380004385,
      area_km2: 3287263,
      currency: "INR",
      languages: ["Hindi", "English"],
      icon: "retweet",
    },
    {
      name: "Brazil",
      capital: "Brasília",
      population: 211049527,
      area_km2: 8515767,
      currency: "BRL",
      languages: ["Portuguese"],
      icon: "stepforward",
    },
    {
      name: "United Kingdom",
      capital: "London",
      population: 67886011,
      area_km2: 243610,
      currency: "GBP",
      languages: ["English"],
      icon: "stepforward",
    },
    {
      name: "South Africa",
      capital: "Pretoria, Cape Town, Bloemfontein",
      population: 59308690,
      area_km2: 1219090,
      currency: "ZAR",
      languages: ["Zulu", "Xhosa", "Afrikaans", "English"],
      icon: "stepforward",
    },
  ];

  useEffect(() => {
    // Fetch the JSON data
    // fetch("http://localhost:8081/data/data.json")
    //   .then((response) => response.json())
    //   .then((data) => setCountries(data))
    //   .catch((error) => console.error("Error fetching data:", error));
    setCountries(data1);
    // console.log(countries);
  }, []);

  const selectCategory = (country) => {
    setSelectedCountry(country.name);
    setCountryData(country);
  };

  return (
    <SafeAreaView>
      <Text>Home page</Text>
      <Text style={{ fontSize: 20, fontWeight: 600 }}>Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {countries.map((country, index) => (
          <Pressable
            onPress={() => {
              selectCategory(country);
            }}
          >
            <View
              onMouseEnter={() => setIsHovered(country.name)} // Trigger hover state
              onMouseLeave={() => setIsHovered("")} // Revert hover state
              style={[
                {
                  margin: 10,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    selectedCountry == country.name ? "orange" : "white",
                  paddingHorizontal: 8,
                  borderRadius: 10,
                  flexDirection: "row",
                },

                isHovered == country.name && selectedCountry != country.name
                  ? styles.hovered
                  : null, // Apply hover style conditionally
              ]}
            >
              <AntDesign
                name={country.icon}
                size={12}
                color={selectedCountry === country.name ? "white" : "black"}
              />
              <Text
                style={{
                  color: selectedCountry == country.name ? "white" : "black",
                }}
              >
                {" "}
                {country.name}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <Text> {countryData.name} </Text>

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
          router.push({
            pathname: "/home/Home2",
            params: { id: 2, ipro: "ip" },
          });
        }}
      >
        <Image
          style={{ height: 100, width: 100 }}
          source="https://picsum.photos/seed/696/3000/2000"
          contentFit="cover"
          transition={1000}
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  hovered: {
    backgroundColor: "#ddd", // Change background color on hover
    transform: [{ scale: 1.05 }], // Slightly scale the view when hovered
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});
