import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { layout } from "@/constants/layout";

const iconDataSet = {
  set1: [
    { emoji: '🍕', color: '#FFE5CC' },
    { emoji: '🍔', color: '#F4D03F' },
    { emoji: '🍟', color: '#F8D7DA' },
    { emoji: '🌮', color: '#D5EDDA' },
    { emoji: '🍗', color: '#FADBD8' },
  ],
  set2: [
    { emoji: '🎮', color: '#D1ECF1' },
    { emoji: '🎧', color: '#E2E3E5' },
    { emoji: '☕', color: '#F4D03F' },
    { emoji: '🍿', color: '#FFE5CC' },
    { emoji: '🥤', color: '#F8D7DA' },
  ],
  set3: [
    { emoji: '🍰', color: '#FADBD8' },
    { emoji: '🍦', color: '#D1ECF1' },
    { emoji: '🍪', color: '#FFE5CC' },
    { emoji: '🎲', color: '#D5EDDA' },
    { emoji: '🕹️', color: '#E2E3E5' },
  ]
}

// total height = número de ítems × altura de cada ítem
// por ejemplo: 5 × 160 = 800 px
const ITEM_HEIGHT = 160

const GAP = 10

// tiempo = distancia / velocidad
// por ejemplo: 800 / 20 = 40s
const SCROLL_SPEED = 20;

interface SmoothInfiniteScrollProps {
  scrollDirection?: 'up' | 'down'
  iconSet?: 'set1' | 'set2' | 'set3'
}

/**
 *
 * @param scrollDirection Dirección de movimiento ("up" | "down")
 * @param iconSet Conjunto de iconos predefinido
 */
export function SmoothInfiniteScroll({scrollDirection='up', iconSet='set1'}: SmoothInfiniteScrollProps) {
  // Valor compartido que vive en el UI thread
  const translateY = useSharedValue<number>(0)

  const iconData = iconDataSet[iconSet]
  const items = [...iconData, ...iconData]
  const itemFullHeight = ITEM_HEIGHT + GAP
  // altura de la lista original (sin duplicar)
  const singleListHeight = iconData.length * itemFullHeight

  useEffect(() => {
    const distance = singleListHeight
    // v = d/t -> t = d/v
    const durationMs = distance / (SCROLL_SPEED) * 1000
    const toValue = scrollDirection === 'down' ? 0 : -distance
    const fromValue = scrollDirection === 'down' ? -distance : 0
    translateY.value = fromValue
    translateY.value = withRepeat(
      withTiming(toValue, {duration: durationMs, easing: Easing.linear}),
      -1,
      false
    )
  }, [scrollDirection, singleListHeight])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }]
  }));

  return (
    <View style={styles.wrapper}>
      <Animated.View style={animatedStyle}>
        {items.map((item, idx) => (
          <View key={`item-${idx}`} style={[styles.iconContainer, layout.rowCenter, {backgroundColor: item.color, marginBottom: GAP}]}>
            <Text style={{fontSize: 32}}>{item.emoji}</Text>
          </View>
        ))}
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 160,
    height: ITEM_HEIGHT,
    borderRadius: 20,
    boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
  },
  wrapper: {
    height: "100%",
    overflow: 'hidden',
  }
})
