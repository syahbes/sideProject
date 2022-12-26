import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <Text>First Button is with all 3 elements in header</Text>
      <Button
         title="Go to Secondary"
         onPress={() => navigation.navigate('Secondary')}
       />
       <Text>Second Button with only avatar in header</Text>
      <Button
         title="Go to Secondary"
         onPress={() => navigation.navigate('Secondary', { test: "well well", testText: "b0o b0o"})}
       />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#faecc9",
  },
});
