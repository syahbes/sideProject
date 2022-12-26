import { StyleSheet, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

//"sliders-h" or "pen"

const SmallHeaderICon = ({ name }) => {
  return (
    <View style={styles.iconView}>
      <FontAwesome5 name={name} size={20} color="#454744" />
    </View>
  );
};

export default SmallHeaderICon;

const styles = StyleSheet.create({
  iconView: {
    height: 40,
    width: 40,
    borderRadius: 35,
    backgroundColor: "#f9f9f9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
  },
});
