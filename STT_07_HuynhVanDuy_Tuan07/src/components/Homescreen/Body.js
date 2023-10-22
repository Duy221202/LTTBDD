import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import dataHome from "../../../datahome";

const Body = () => {
  const route = useRoute(); // Sử dụng useRoute() để lấy thông tin địa chỉ (route)
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.tx1}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
      </View>

      {dataHome.map((item) => (
        <View style={styles.view1}>
          <Image source={item.imageLocal} style={styles.img} />

           <View style={styles.view2}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text1}>{item.shop} </Text>
          </View>

          <Pressable style={styles.Pre}>
            <Text style={styles.textChat}>Chat</Text>
          </Pressable>
        </View>
      ))}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dcdcdc",
  },
  view: {
    alignItems: "center",
    marginBottom: 40,
    backgroundColor: "#",
    height: 50,
    padding: 15,
    borderRadius: 10,
  },
  tx1:{
    fontSize:17,
  },
  view1: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:'center',
    borderWidth: 1,      // Độ dày của khung viền
    borderColor: 'black', // Màu sắc của khung viền
    borderRadius: 0,
    padding:20,
    borderRadius:20,
    top:-20,
    backgroundColor:'#dcdcdc'
  },
  view2: {
    width:200,
    flexDirection: "column",
    color:'red'
  },
  img: {
    width: 74,
    height: 74,
    borderRadius:5,
  },
  text: {
    fontSize: 16,
    fontWeight:500,
    width:150,
  },
  text1: {
    fontSize: 16,
    color: "black",
    paddingTop:10,
    width:150,
  },
  textChat:{
    textAlign:'center',
    padding:7,
    fontSize:16,
    color:'#ffff',
  },
  Pre:{
    height:40,
    width:90,
    backgroundColor:'#F31111',
  }
});

export default Body;
