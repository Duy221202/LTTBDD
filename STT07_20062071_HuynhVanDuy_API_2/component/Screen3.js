import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Pressable, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Screen3 = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={{fontSize:20,fontWeight:"600"}}>Drinks</Text>
      <FlatList
        data={route.params?.drinks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.listItem}>
            <View style={styles.itemContainer}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.img }} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.boldText}>{item.name}</Text>
                  <Text style={styles.boldText}>{item.name}</Text>
                </View>
              </View>
              <View style={styles.actionContainer}>
                <View style={styles.actionButton}>
                  <Text style={styles.actionText}>-</Text>
                </View>
                <View style={styles.actionButton}>
                  <Text style={styles.actionText}>+</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
      <Pressable
        onPress={() => navigation.navigate('Screen4', { drinks: route.params?.drinks })}
        style={styles.goToCartButton}>
        <Text style={styles.buttonText}>GO TO CART</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"white"
  },
  listItem: {
    width: Dimensions.get('window').width - 30,
    height: 70,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    backgroundColor:"ghostwhite"
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  boldText: {
    fontWeight: 'bold',
  },
  actionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  actionButton: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
  },
  actionText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  goToCartButton: {
    width: 330,
    height: 50,
    backgroundColor: 'rgba(239, 176, 52, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Screen3;
