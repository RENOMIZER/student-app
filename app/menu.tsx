import { Text, View } from "react-native";
import MenuButton from '@/elements/MenuButton'

export default function Menu() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: '20%',
        paddingBottom: '40%',
        paddingHorizontal: '10%'
      }}
    >
      <Text style={{
        fontFamily: 'Montserrat Regular',
        fontSize: 40, textAlign: 'center',
        marginBottom: '5%'
      }}>
        Choose category
      </Text>
      <MenuButton text='Maps' image='map' link='/maps' />
      <MenuButton text='Most important' image='must' link='/must' />
      <MenuButton text='Student guide' image='guide' link='/guide' />
      <MenuButton text='Frequently asked questions' image='faq' link='/faq' />
    </View>
  )
}