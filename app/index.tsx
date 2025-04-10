import { Pressable, Text, View } from "react-native";
import { Link } from 'expo-router';
import SimpleButton from "@/components/SimpleButton";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        paddingTop: '40%',
        paddingHorizontal: '10%'
      }}
    >
      <Text style={{ 
        fontFamily: 'Montserrat Regular',
        fontSize: 40, textAlign: 'center',
      }}>
        Welcome to Student Globe!
      </Text>
      <SimpleButton text="Begin >" link='/menu'/>
    </View>
  );
}
