import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Location from "expo-location";

const App = () => {
  const [speed, setSpeed] = useState<number | null>(null);
  const [locationPermission, setLocationPermission] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        setLocationPermission(true);
      } else {
        setLocationPermission(false);
      }
    };

    getLocationPermission();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const getCarSpeed = async () => {
      if (!locationPermission) {
        alert("Location permission is not granted.");
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      // Speed is in meters per second (m/s)
      const speedInMps = location.coords.speed;

      // Convert to km/h
      const speedInKmh = speedInMps * 3.6;
      setSpeed(speedInKmh);
    };

    if (locationPermission) {
      setIsLoading(false);

      // Start the interval to get the speed every 0.5 seconds
      interval = setInterval(() => {
        getCarSpeed();
      }, 1000); // 500 ms interval (0.5 seconds)
    }

    return () => {
      if (interval) clearInterval(interval); // Cleanup on unmount
    };
  }, [locationPermission]);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Car Speed</Text> */}
      {isLoading ? (
        <Text style={styles.error}>Loading...</Text>
      ) : (
        <>
          <Text style={styles.speedText}>
            {speed !== null ? speed.toFixed(2) : "0.00"}
          </Text>
          <Text style={styles.speedText}>км/ц</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  speedText: {
    fontSize: 92,
    marginTop: 20,
  },
  error: {
    fontSize: 16,
    color: "red",
    marginTop: 20,
  },
});

export default App;
