import { View, StyleSheet } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

const BackGround = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#ECC276", "#FEDB9B ", "#B38E35"]}
      style={styles.linearGradient}
    ></LinearGradient>
  );
};

export default BackGround;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    // paddingLeft: 15,
    // paddingRight: 15,
    // paddingBottom: 70,
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // paddingTop: 20,
  },
});
