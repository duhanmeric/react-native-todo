import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box, Center } from "native-base";
import SearchField from "./components/SearchField";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingButton from "./components/FloatingButton";
import Todos from "./components/Todo/Todos";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} pt={60} justifyContent="flex-start">
        <SearchField />
        <Todos />
        <FloatingButton />
      </Center>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
