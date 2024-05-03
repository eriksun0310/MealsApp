import { Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const IconButton = ({ onPress, icon, color }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <AntDesign name={icon} color={color} size={24} />
    </Pressable>
  );
};

export default IconButton;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
