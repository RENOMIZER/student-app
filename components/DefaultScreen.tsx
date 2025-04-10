import { Text, View } from "react-native";

type ScreenProps = {
  children?: any;
  title: string;
};

const DefaultScreen = (props : ScreenProps) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        paddingTop: '20%',
        paddingHorizontal: '10%'
      }}
    >
      <Text style={{
        fontFamily: 'Montserrat Regular',
        fontSize: 40, textAlign: 'center',
        marginBottom: '5%'
      }}>
        {props.title}
      </Text>
      {props.children}
    </View>
  )
}

export default DefaultScreen