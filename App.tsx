import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import TabStack from "./navigation-tab/";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <TabStack />
      </NavigationContainer>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
