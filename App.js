import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./src/screens/Main";
import Secondary from "./src/screens/Secondary";
import BackGround from "./src/components/BackGround";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerTitle: "Main - no Custome header",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Secondary"
          component={Secondary}
          options={({ route }) => ({
            headerTitleAlign: "center",
            headerBackground: BackGround,
            headerLeft: route.params.headerLeft,
            headerTitle: route.params.headerTitle,
            headerRight: route.params.headerRight,
            headerStyle: {
              height: 170,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
