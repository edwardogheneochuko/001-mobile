import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Screen from '@/components/landingpage/Screen'
import Screen1 from '@/components/landingpage/Screen1'
import Screen3 from '@/components/landingpage/Screen3'

const index = () => {
  return (
    <ScrollView className="flex-1">
      <Navbar />
      <Screen />
      <Screen1 />
      <Screen3 />
      <Footer />
    </ScrollView>
  )
}

export default index

