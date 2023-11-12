import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Screen1 = () => {
    const nav = useNavigation()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ width: 300, height: 36, fontSize: 25, fontWeight: 'bold' }}>Welcome to Cafe world</Text>
            <Image source={require('../assets/Jewel.png')} style={{ width: 230, height: 70, marginVertical: 50,borderRadius:"5px" }} />
            <Image source={require('../assets/cf.png')} style={{ width: 230, height: 70, marginVertical: 50,borderRadius:"5px" }} />
            <Image source={require('../assets/cf.png')} style={{ width: 230, height: 70, marginVertical: 50 ,borderRadius:"5px"}} />
            <Pressable onPress={() => nav.navigate('Screen2')} style={{ width: 330, height: 50, backgroundColor: 'darkturquoise', 
                borderRadius:"5px" ,justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: 'white' }}>GET STARTED</Text>
            </Pressable>
        </View>
    )
}
export default Screen1;