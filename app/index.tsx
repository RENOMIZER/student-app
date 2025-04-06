import { Pressable, Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: '40%',
        paddingBottom: '40%',
        paddingHorizontal: '10%'
      }}
    >
      <Text style={{ 
        fontFamily: 'Montserrat Regular',
        fontSize: 40, textAlign: 'center',
        marginBottom: 'auto'
      }}>
        Welcome to Student Globe!
      </Text>
      <Pressable style={{
        backgroundColor: "#d9d9d9",
        paddingHorizontal: 60,
        paddingVertical: 20,
        borderRadius: 100,
        boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.25)'
      }}>
        <Link href="/menu" style={{ fontFamily: 'Montserrat Regular', }}>Begin &gt;</Link>
      </Pressable>
    </View>
  );
}
