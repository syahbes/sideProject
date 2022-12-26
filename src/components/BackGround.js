import { View, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


const BackGround = () => {
  return (
    <View style={{ height: 170}}>
    <LinearGradient
       start={{ x: 0, y: 0 }}
       end={{ x: 1, y: 0 }}
       colors={['#ECC276', '#FEDB9B', '#B38E35']}
      style={styles.linearGradient}
    ></LinearGradient>
    </View>
  );
};

export default BackGround;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
