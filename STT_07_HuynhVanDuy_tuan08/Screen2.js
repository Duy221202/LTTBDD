import React from "react";
import { Pressable, TextInput } from "react-native";
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Screen2({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.v1}>
                <Image source={require("./Image/Avatar 31.png")} style={styles.img1}/>
                <View style={styles.v11}>
                    <Text style={styles.t1}> Hi Twinkle </Text>
                    <Text style={styles.t2}> Have agrate day a head </Text>
                </View>
            </View>

            <View style={styles.v2}>
                <Image source={require("./Image/mingcute_search-fill.png")} style={styles.img2}></Image>
                <TextInput style={styles.t3} placeholder="Search"></TextInput>
            </View>

            <View style={styles.v3}>
                <View style={styles.v4}>
                    <Image source={require("./Image/mdi_marker-tick.png")} style={styles.img3}></Image>
                    <Text style={styles.t4}> To check email </Text>
                    <Image source={require("./Image/iconamoon_edit-bold.png")} style={styles.img4}></Image>
                </View>
                <View style={styles.v4}>
                    <Image source={require("./Image/mdi_marker-tick.png")} style={styles.img3}></Image>
                    <Text style={styles.t4}> UI task web page </Text>
                    <Image source={require("./Image/iconamoon_edit-bold.png")} style={styles.img4}></Image>
                </View>
                <View style={styles.v4}>
                    <Image source={require("./Image/mdi_marker-tick.png")} style={styles.img3}></Image>
                    <Text style={styles.t4}> Learn javascript basic </Text>
                    <Image source={require("./Image/iconamoon_edit-bold.png")} style={styles.img4}></Image>
                </View>
                <View style={styles.v4}>
                    <Image source={require("./Image/mdi_marker-tick.png")} style={styles.img3}></Image>
                    <Text style={styles.t4}> Learn HTML Advance </Text>
                    <Image source={require("./Image/iconamoon_edit-bold.png")} style={styles.img4}></Image>
                </View>
                <View style={styles.v4}>
                    <Image source={require("./Image/mdi_marker-tick.png")} style={styles.img3}></Image>
                    <Text style={styles.t4}> Medical App UI </Text>
                    <Image source={require("./Image/iconamoon_edit-bold.png")} style={styles.img4}></Image>
                </View>
                <View style={styles.v4}>
                    <Image source={require("./Image/mdi_marker-tick.png")} style={styles.img3}></Image>
                    <Text style={styles.t4}> Learn Java </Text>
                    <Image source={require("./Image/iconamoon_edit-bold.png")} style={styles.img4}></Image>
                </View>
            </View>

            <Pressable style={styles.v5}
                onPress={()=>{
                    navigation.navigate("Screen3")
                }}>
                    <Text style={styles.t5}> + </Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    v1:{
        flexDirection: 'row',
        marginLeft: 150,
    },
    v11:{
        flexDirection: 'column'
    },
    img1:{
        height: 45,
        width: 45,
        resizeMode: 'contain',
    },
    t1:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    t2:{
        fontSize: 15,
    },
    v2:{
        flexDirection: 'row',
        height: 45,
        width: 320,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 20, 
        padding: 5,
    },
    img2:{
        height: 30,
        width: 30,
    },
    t3:{
        fontSize: 20,
        paddingLeft: 10,
    },
    v3:{
        flexDirection: 'column',
        marginTop: 25,
    },
    v4:{
        flexDirection: 'row',
        height: 45,
        width: 320,
        borderRadius: 25,
        borderWidth: 1,
        marginTop: 20,
        padding: 5,
        alignItems: 'center',
        justifyContent: "space-between",
    },
    img3:{
        height: 20,
        width: 20,
        marginLeft: 10,
    },
    img4:{
        height: 20,
        width: 20,
    },
    t4:{
        fontSize: 16,
    },
    v5:{
        marginTop: 15,
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 100,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    t5:{
        color: 'white',
        fontSize: 50,
        marginBottom: 10,
    },
});
export default Screen2;