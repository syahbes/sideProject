import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Secondary = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text>Secondary</Text>
      <Button title="Go to Main" onPress={() => navigation.navigate("Main")} />
    </View>
  );
};


export default Secondary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#faecc9",
  },
});
