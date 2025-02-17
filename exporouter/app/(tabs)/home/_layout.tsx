import { Stack } from "expo-router";

export default function HomeStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Home 1", headerShown: false }}
      />
      <Stack.Screen
        name="Home2"
        options={{ headerTitle: "Home 2", headerShown: false }}
      />
      <Stack.Screen
        name="Home3"
        options={{ headerTitle: "Home 3", headerShown: false }}
      />
      <Stack.Screen
        name="Home4"
        options={{ headerTitle: "Home 4", headerShown: false }}
      />
    </Stack>
  );
}
