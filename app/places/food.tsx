import DefaultScreen from "@/components/DefaultScreen";
import DropdownButton from "@/components/DropdownButton";

export default function Menu() {
  return (
    <DefaultScreen title="Food">
      <DropdownButton title="Restaurants"></DropdownButton>
      <DropdownButton title="Cafes"></DropdownButton>
      <DropdownButton title="Fast food"></DropdownButton>
    </DefaultScreen>
  )
}