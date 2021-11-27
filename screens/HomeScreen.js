import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
          <View style={tw`p-5`}>
            <Image
               style={{width:100,height:100}}
               source={{
                   uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqp5ICHMN0LX68DyTKQ_bJ5qsgS7ikOci-DTlv0Jtmen5u2pNTAEvgoH1SwdRp777661s&usqp=CAU',
               }}
            />
          </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    
})
