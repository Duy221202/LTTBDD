import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Screen4 = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.deliveryInfo}>
        <View>
          <Text style={styles.whiteTextBold}>CAFE DELIVERY</Text>
          <Text style={styles.whiteText}>Order #18</Text>
        </View>
        <View>
          <Text style={styles.whiteTextBold}>$5</Text>
        </View>
      </View>

      <View style={[styles.deliveryInfo2, styles.marginTop]}>
        <View>
          <Text style={styles.whiteTextBold}>CAFE</Text>
          <Text style={styles.whiteText}>Order #18</Text>
        </View>
        <View>
          <Text style={styles.whiteTextBold}>$25</Text>
        </View>
      </View>

      <View style={styles.itemsContainer}>
        {route.params?.drinks.map((item, index) => (
            
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
        ))}
      </View>

      <Pressable onPress={() => navigation.navigate('layout2')} style={styles.payNowButton}>
        <Text style={styles.whiteText}>PAY NOW</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  deliveryInfo: {
    padding: 10,
    backgroundColor: 'rgba(0, 189, 214, 1)',
    width: 340,
    height: 100,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryInfo2: {
    padding: 10,
    backgroundColor: 'blueviolet',
    width: 340,
    height: 100,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  whiteTextBold: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  whiteText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  marginTop: {
    marginTop: 10,
  },
  itemsContainer: {
    marginTop: 20,
  },
  listItem: {
    width: Dimensions.get('window').width - 30,
    height: 70,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
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
  payNowButton: {
    width: 330,
    height: 50,
    backgroundColor: 'rgba(239, 176, 52, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 65,
  },
});

export default Screen4;
