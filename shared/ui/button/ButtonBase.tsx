import { GestureResponderEvent, StyleSheet, Text, type TextStyle, TouchableOpacity, View, type ViewStyle } from "react-native";
import {layout} from "@/constants/layout"
import { Colors } from "@/constants/theme";

interface ButtonBaseProps {
  text: string
  onPress?: (event: GestureResponderEvent) => void
  disabled?: boolean
  icon?: React.ReactNode
  style?: ViewStyle
  textStyle?: TextStyle

}

export function ButtonBase({text, icon, disabled, style, textStyle, onPress}: ButtonBaseProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      style={[styles.container, layout.rowCenter, disabled && styles.disabled, style]}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#333"
  },
  disabled: {
    opacity: 0.6,
  },
  icon: {
    marginRight: 8
  },
  text: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "500",
  }
})
