import { useState } from 'react'
import { View, Text, Pressable, TouchableOpacity, Dimensions } from 'react-native'
import { Menu, X } from 'lucide-react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { BlurView } from 'expo-blur'

const { width } = Dimensions.get('window')

interface NavbarProps {
  isVisible: boolean
}

const Navbar = ({ isVisible }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const translateX = useSharedValue(width)

  const navItems = [
    { label: 'THE ABYSS', id: 'abyss' },
    { label: 'WHISPERS', id: 'whispers' },
    { label: 'NIGHTMARES', id: 'nightmares' },
    { label: 'THE VOID', id: 'void' },
  ]

  const toggleMenu = () => {
    const next = !mobileMenuOpen
    setMobileMenuOpen(next)

    translateX.value = withTiming(next ? 0 : width, { duration: 400 })
  }

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  const handleNavClick = (id: string) => {
    console.log('Navigate to:', id)
    toggleMenu()
  }

  return (
    <>
      {isVisible && (
        <View className="absolute top-16 right-6 z-50">
          <TouchableOpacity onPress={toggleMenu}>
            {mobileMenuOpen ? (
              <X size={32} color="#ef4444" />
            ) : (
              <Menu size={32} color="#ef4444" />
            )}
          </TouchableOpacity>
        </View>
      )}

      {mobileMenuOpen && (
        <Pressable className="absolute inset-0 z-40" onPress={toggleMenu}>
          <BlurView intensity={40} tint="dark" className="flex-1" />
        </Pressable>
      )}

      <Animated.View
        style={animatedStyle}
        className="absolute top-0 right-0 h-full w-64 z-50 bg-black/90 border-l-4 border-red-900 px-6 pt-16"
      >
        <View className="items-center mb-10">
          <Text className="text-red-500 text-xl font-black tracking-widest">
            HAUNTED
          </Text>
        </View>

        <View className="gap-6">
          {navItems.map((item, index) => (
            <Pressable
              key={item.label}
              onPress={() => handleNavClick(item.id)}
              className="border-l-2 border-red-900 pl-4 py-3"
            >
              <Text className="text-red-300 text-sm tracking-widest">
                {item.label}
              </Text>
            </Pressable>
          ))}
        </View>

        <View className="absolute bottom-0 left-0 right-0 h-20 bg-red-900/20" />
      </Animated.View>
    </>
  )
}

export default Navbar