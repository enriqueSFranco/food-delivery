import { layout } from "@/constants/layout";
import {
  woltColors,
  woltSpacing,
  woltRadii,
  woltOpacity,
} from "@/constants/theme";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
  type TextStyle,
  type ViewStyle,
} from "react-native";

type ButtonVariants = "solid" | "outline" | "ghost" | "light";

interface ButtonBaseProps {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  prefixIcon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  variant?: ButtonVariants;
}

export function ButtonBase({
  text,
  prefixIcon,
  disabled,
  style,
  textStyle,
  variant = "solid",
  onPress,
}: ButtonBaseProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        layout.rowCenter,
        variantStyles[variant].container,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      {prefixIcon && <View style={styles.icon}>{prefixIcon}</View>}

      <Text
        style={[
          styles.text,
          variantStyles[variant].text,
          disabled && styles.textDisabled,
          textStyle,
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 36,
    paddingVertical: 10,
    paddingHorizontal: woltSpacing.md,
    borderRadius: woltRadii.md,
    gap: woltSpacing.xs,
  },
  disabled: {
    opacity: woltOpacity.disabled,
  },
  icon: {
    marginRight: 6,
  },
  pressed: {
    opacity: woltOpacity.pressed,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
  },
  textDisabled: {
    color: woltColors.textMuted,
  },
});

const variantStyles = {
  solid: StyleSheet.create({
    container: {
      backgroundColor: woltColors.brandPrimary,
    },
    text: {
      color: woltColors.textInverse,
    },
  }),

  outline: StyleSheet.create({
    container: {
      backgroundColor: "transparent",
      borderWidth: 1.5,
      borderColor: woltColors.borderLight,
    },
    text: {
      color: woltColors.brandPrimary,
    },
  }),

  ghost: StyleSheet.create({
    container: {
      backgroundColor: "transparent",
    },
    text: {
      color: woltColors.brandPrimary,
    },
  }),

  light: StyleSheet.create({
    container: {
      backgroundColor: woltColors.brandPrimaryLight,
    },
    text: {
      color: woltColors.brandPrimary,
    },
  }),
};
