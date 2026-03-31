import { useEffect, useRef } from "react"
import {
  View,
  Text,
  Pressable,
  Animated,
  Easing,
  useWindowDimensions,
} from "react-native"
import { useRouter } from "expo-router"
import Svg, { Path } from "react-native-svg"

export default function Screen() {
  const router = useRouter()
  const { width, height } = useWindowDimensions()

  const scaleFactor = width / 375
  const iconSize = 100 * scaleFactor

  const scale = useRef(new Animated.Value(0.8)).current
  const opacity = useRef(new Animated.Value(0)).current
  const pulse = useRef(new Animated.Value(1)).current
  const floatY = useRef(new Animated.Value(0)).current
  const floatY2 = useRef(new Animated.Value(0)).current 

  const pressScale = useRef(new Animated.Value(1)).current

  useEffect(() => {
    const intro = Animated.parallel([
      Animated.timing(scale, {
        toValue: 1,
        duration: 1500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ])

    const pulseLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.2,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 0.95,
          duration: 1200,
          useNativeDriver: true,
        }),
      ])
    )

    const floatLoop1 = Animated.loop(
      Animated.sequence([
        Animated.timing(floatY, {
          toValue: height * 0.05,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(floatY, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    )

    const floatLoop2 = Animated.loop(
      Animated.sequence([
        Animated.timing(floatY2, {
          toValue: -height * 0.04,
          duration: 3500,
          useNativeDriver: true,
        }),
        Animated.timing(floatY2, {
          toValue: 0,
          duration: 3500,
          useNativeDriver: true,
        }),
      ])
    )

    intro.start()
    pulseLoop.start()
    floatLoop1.start()
    floatLoop2.start()

    return () => {
      pulseLoop.stop()
      floatLoop1.stop()
      floatLoop2.stop()
    }
  }, [])

  const handlePressIn = () => {
    Animated.spring(pressScale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start()
  }

  const handlePressOut = () => {
    Animated.spring(pressScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  return (
    <View
      className="items-center justify-start pt-32"
    >
      <Animated.View
        style={{
          transform: [{ translateY: floatY }],
          width: width * 0.3,
          height: width * 0.3,
          borderRadius: width,
        }}
        className="absolute bg-red-900/20 top-[15%] left-[5%]"
      />

      <Animated.View
        style={{
          transform: [{ translateY: floatY2 }],
          width: width * 0.25,
          height: width * 0.25,
          borderRadius: width,
        }}
        className="absolute bg-red-900/10 bottom-[15%] right-[5%]"
      />

]      <Animated.View
        style={{
          transform: [{ scale }],
          opacity,
        }}
        className="items-center w-full"
      >
        <Animated.View style={{ transform: [{ scale: pulse }] }}>
          <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24">
            <Path
              d="M12 2C9 5 5 6 5 12s4 10 7 10 7-4 7-10-4-7-7-10z"
              stroke="#ef4444"
              strokeWidth={2}
              fill="none"
            />
            <Path d="M12 2v4" stroke="#ef4444" strokeWidth={2} />
            <Path d="M8 12h8" stroke="#ef4444" strokeWidth={2} />
          </Svg>
        </Animated.View>

        <Animated.Text
          style={{
            fontSize: 40 * scaleFactor,
            transform: [{ scale: pulse }],
            textShadowColor: "rgba(239,68,68,1)",
            textShadowRadius: 25, // 🔥 stronger glow
          }}
          className="text-red-500 font-black text-center mt-6"
          onPress={() => router.push("/login")}
        >
          WELCOME
        </Animated.Text>

        <Animated.Text
          style={{
            fontSize: 16 * scaleFactor,
            opacity,
          }}
          className="text-gray-300 italic text-center mt-4 px-6"
        >
          Project 001: A Journey into the Void
        </Animated.Text>

        <Animated.View style={{ transform: [{ scale: pressScale }] }}>
          <Pressable
            onPress={() => router.push("/login")}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={{
              marginTop: height * 0.05,
              paddingVertical: height * 0.02,
              paddingHorizontal: width * 0.1,
            }}
            className="rounded-lg border border-red-500 bg-red-900/40"
          >
            <Text
              style={{ fontSize: 18 * scaleFactor }}
              className="text-red-200 font-bold"
            >
              • PROCEED •
            </Text>
          </Pressable>
        </Animated.View>

        <Animated.Text
          style={{
            fontSize: 12 * scaleFactor,
            opacity,
          }}
          className="text-red-500 mt-8 tracking-widest text-center"
        >
          ⚠ BEWARE OF WHAT LIES AHEAD ⚠
        </Animated.Text>
      </Animated.View>
    </View>
  )
}