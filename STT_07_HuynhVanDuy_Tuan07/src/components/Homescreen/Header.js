import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Pressable >
        <Image
          source={require("../../../IMG/outlined.png")}
          style={styles.img}
        ></Image>
      </Pressable>

      <Text style={styles.text}>Chat</Text>

      <Pressable>
        <Image
          source={require("../../../IMG/bi_cart-check.png")}
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
    height: 50,
    backgroundColor: "#1BA9FF",
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  img: {
    width: 30,
    height: 30,
  },
  text: {
    color: "#ffff",
    fontSize: 20,
    fontWeight: 500,
  },
});

export default Header;
