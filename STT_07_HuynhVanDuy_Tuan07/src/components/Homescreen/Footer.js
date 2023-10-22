import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  const Tab = createMaterialBottomTabNavigator();
  return (
    <View style={styles.container}>
      <Pressable>
        <Image
          source={require("../../../IMG/list.png")}
          style={styles.img}
        ></Image>
      </Pressable>

      <Pressable onPress={()=>{navigation.navigate('Seach')}}>
        <Image
          source={require("../../../IMG/home.png")}
          style={styles.img}
        ></Image>
      </Pressable>

      <Pressable>
        <Image
          source={require("../../../IMG/previous.png")}
          style={styles.img}
        ></Image>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
    backgroundColor: "#1BA9FF",
    position: "sticky",
    bottom: 0,
    zIndex: 1,
  },
  img: {
    width: 24,
    height: 24,
  },
  text: {
    color: "#ffff",
    fontSize: 20,
    fontWeight: 500,
  },
});

export default Footer;
