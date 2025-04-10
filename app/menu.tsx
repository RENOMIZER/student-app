import MenuButton from '@/components/MenuButton'
import DefaultScreen from "@/components/DefaultScreen";

export default function Menu() {
  return (
    <DefaultScreen title="Choose category">
      <MenuButton text='Maps' image='map' link='/maps' />
      <MenuButton text='Places' image='must' link='/places' />
      <MenuButton text='Student guide' image='guide' link='/guide' />
      <MenuButton text='Frequently asked questions' image='faq' link='/faq' />
    </DefaultScreen>
  )
}