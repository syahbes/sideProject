import { TouchableOpacity, Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import SmallHeaderICon from "../components/SmallHeaderICon";
import CustomHeader from "../components/CustomHeader";

function Main({ navigation }) {

      return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Main default Screen</Text>
      <Button
        title="Go to FULL Secondary"
        onPress={() => navigation.push('Secondary',{
                  headerLeft: (props) => <SmallHeaderICon {...props} name="sliders-h" />,
                  headerTitle: (props) => <CustomHeader {...props} />,
                  headerRight: (props) => <SmallHeaderICon {...props} name="pen" />})
        }        
      />
       <Button
        title="Only Left"
        onPress={() => navigation.push('Secondary',{
                  headerLeft: (props) => <SmallHeaderICon {...props} name="sliders-h" />,
                  headerTitle: (props) => <View />,
                  headerRight: (props) => <View />})
        }        
      />
       <Button
        title="Only Avatar"
        onPress={() => navigation.push('Secondary',{
                  headerLeft: (props) => <View />,
                  headerTitle: (props) => <CustomHeader {...props} />,
                  headerRight: (props) => <View />})
        }        
      />
       <Button
        title="Only Right"
        onPress={() => navigation.push('Secondary',{
                  headerLeft: (props) => <View />,
                  headerTitle: (props) => <View />,
                  headerRight: (props) => <SmallHeaderICon {...props} name="pen" />})
        }        
      />
     
     
    </View>
  );
}
export default Main;