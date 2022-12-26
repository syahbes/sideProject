import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./src/screens/Main";
import Secondary from "./src/screens/Secondary";
import CustomHeader from "./src/components/CustomHeader";
import { Button } from "react-native";



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          // headerTitle: "CustomHeader",
          headerTitle: "",
          headerTitleAlign: "center",
          // headerStyle: {
          //   backgroundColor: "#000",
          //   height: 150,
          //   borderBottomRightRadius: 20,
          //   borderBottomLeftRadius: 20,
          // },
          headerBackground: CustomHeader,
          headerLeft: "",
        }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen
          name="Secondary"
          component={Secondary}
          options={({ route }) => ({ title: route.params.test })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
