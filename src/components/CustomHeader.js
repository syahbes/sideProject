import { Image, StyleSheet, Text, View } from "react-native";
//Platform,
import LinearGradient from "react-native-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

export default function CustomHeader(props) {
  console.log(props?.test)
  
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#ECC276", "#FEDB9B ", "#B38E35"]}
        style={styles.linearGradient}
      >
        {/* left icon */}
        <View style={styles.iconView}>
          <FontAwesome5 name="sliders-h" size={20} color="#454744" />
        </View>
        {/* avatar */}
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://lh3.googleusercontent.com/a-/AD5-WCl4CkDrGL4yxq13Qj8_EfPIfkDFEwy7-kknBghoDg=s64-p-k-no",
            }}
          />
          <Text style={styles.avatarText}>danielmamre</Text>
        </View>

        {/* right icon */}
        <View style={styles.iconView}>
          <FontAwesome5
            name="pen"
            size={20}
            color="#454744"
            // style={{display:"none"}}
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    // paddingBottom: 70,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  iconView: {
    marginTop: 20,
    padding: 10,
    height: 40,
    width: 40,
    borderRadius: 35,
    backgroundColor: "#f9f9f9",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "transparent",
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 55,
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    // borderColor: "#d0b581",
    border: "1px solid #d0b581",
  },
  avatarText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

// ...Platform.select({
//   android: {
//     height: 84,
//   },
//   ios: {
//     height: 93,
//   },
//   default: {
//     // other platforms, web for example
//     height: 65,
//   },
// })
