import React from "react";
import { Image, StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import seachList from "../../../dataSeach";
import { Rating } from "react-native-ratings";

const Body = () => {
  return (
    <FlatList
      data={seachList}
      renderItem={({ item }) => (
        <View style={styles.subcontainer}>
          <Pressable style={styles.Pre}>
            <Image source={item.img} style={styles.img} />
            <Text style={styles.text}>{item.name}</Text>

            <View style={styles.view}>
              <Rating imageSize={18} style={styles.rate} />
              <Text>({item.comment})</Text>
            </View>

            <View style={styles.view}>
              <Text style={styles.text1}>{item.price}</Text>
              <Text style={styles.text2}>{item.sale}</Text>
            </View>
          </Pressable>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      style ={{backgroundColor:"#dcdcdc"}}
    />
  );
};

const styles = StyleSheet.create({
  subcontainer: {
    backgroundColor:"#dcdcdc",
    margin: 10,
  },
  view: {
    flexDirection: "row",
    backgroundColor:"#dcdcdc",
    alignItems: "center",
  },
  img: {
    backgroundColor:"#dcdcdc",
    height: 90,
    width: 155,
  },
  text: {
    backgroundColor:"#dcdcdc",
    width: 150,
    fontSize: 16,
  },
  text1: {
    backgroundColor:"#dcdcdc",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  text2: {
    backgroundColor:"#dcdcdc",
    fontSize: 16,
  },
  rate: {
    backgroundColor:"#dcdcdc",
    paddingVertical: 10,
  },Pre:{
    backgroundColor:"#dcdcdc",
    padding:10,
    borderRadius:15,
  }
});

export default Body;
