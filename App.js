import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./src/screens/Main";
import Secondary from "./src/screens/Secondary";
import BackGround from "./src/components/BackGround";

const Stack = createStackNavigator();

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
            
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
