import { TouchableOpacity, Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import SmallHeaderICon from "../components/SmallHeaderICon";
import CustomHeader from "../components/CustomHeader";

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.h1}>Main Screen</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>All 3 elements in header</Text>
          <TouchableOpacity>
            <Text
              style={styles.TextBtn}
              onPress={() =>
                navigation.navigate("Secondary", {
                  headerLeft: (props) => <SmallHeaderICon {...props} name="sliders-h" />,
                  headerTitle: (props) => <CustomHeader {...props} />,
                  headerRight: (props) => <SmallHeaderICon {...props} name="pen" />,
                })
              }
            >
              All three
            </Text>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View style={styles.textContainer}>
          <Text style={styles.text}>Only the LEFT icon in header</Text>
          <TouchableOpacity>
            <Text
              style={styles.TextBtn}
              onPress={() =>
                navigation.navigate("Secondary", {
                  headerLeft: (props) => <SmallHeaderICon {...props} name="sliders-h" />,
                  headerTitle: "",
                  headerRight: "",
                })
              }
            >
              Left Only
            </Text>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View style={styles.textContainer}>
          <Text style={styles.text}>Only the AVATAR icon in header</Text>
          <TouchableOpacity>
            <Text
              style={styles.TextBtn}
              onPress={() =>
                navigation.navigate("Secondary", {
                  headerLeft: "",
                  headerTitle: (props) => <CustomHeader {...props}/>,
                  headerRight: "",
                })
              }
            >
              Avatar Only
            </Text>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View style={styles.textContainer}>
          <Text style={styles.text}>Only the RIGHT icon in header</Text>
          <TouchableOpacity>
            <Text
              style={styles.TextBtn}
              onPress={() =>
                navigation.navigate("Secondary", {
                  headerLeft: "",
                  headerTitle: "",
                  headerRight: (props) => <SmallHeaderICon {...props} name="pen" />,
                })
              }
            >
              Only Left
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
  h1: {
    fontSize: 20,
  },
  content: {
    justifyContent: "start",
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
  },
  TextBtn: {
    borderColor: "#000",
    borderWidth: 2,
    width: 100,
    padding: 5,
    color: "#fff",
    backgroundColor: "#2196f3",
    // marginBottom: 20,
    marginLeft: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    direction: "row",
    display: "flex",
  },
});
