import { ScrollView, View } from 'react-native'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Screen from '@/components/landingpage/Screen'
import Screen1 from '@/components/landingpage/Screen1'
import Screen3 from '@/components/landingpage/Screen3'
import { SafeAreaView } from 'react-native-safe-area-context'

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      
      <Navbar isVisible={true} />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingTop: 80, 
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 gap-10">
          <Screen />
          <Screen1 />
          <Screen3 />
          <Footer />
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Index