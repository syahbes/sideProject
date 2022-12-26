import { Image, StyleSheet, Text, View } from "react-native";
//Platform,

export default function CustomHeader() {  return (
    <View style={styles.avatarContainer}>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://lh3.googleusercontent.com/a-/AD5-WCl4CkDrGL4yxq13Qj8_EfPIfkDFEwy7-kknBghoDg=s64-p-k-no",
        }}
      />
      <Text style={styles.avatarText}>danielmamre</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
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
