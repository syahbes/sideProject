import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./src/screens/Main";
import Secondary from "./src/screens/Secondary";
import CustomHeader from "./src/components/CustomHeader";
import { Button } from "react-native";

import SmallHeaderICon from "./src/components/SmallHeaderICon";
import BackGround from "./src/components/BackGround";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        // screenOptions={{
        //   // headerTitle: "CustomHeader",blank
        //   headerTitle: "",
        //   headerTitleAlign: "center",
        //   // headerStyle: {
        //   //   backgroundColor: "#000",
        //   //   height: 150,
        //   //   borderBottomRightRadius: 20,
        //   //   borderBottomLeftRadius: 20,
        //   // },
        //   headerBackground: CustomHeader,
        //   headerLeft: "",
        // }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            //only this.
            headerTitle: "Main - no Custome header",
            headerTitleAlign: "center",
            //not here
            // headerBackground: BackGround,
            // headerLeft: () => <SmallHeaderICon name="sliders-h" />,
            // headerTitle: () => <CustomHeader />,
            // headerRight: () => <SmallHeaderICon name="pen" />,
            // headerStyle: {
            //   height: 170,
            // },
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
