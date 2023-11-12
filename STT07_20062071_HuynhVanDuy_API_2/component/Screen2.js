import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Pressable, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Screen2 = () => {
  const [data, setData] = useState([]);
  const nav = useNavigation();

  useEffect(() => {
    const getData = async () => {
      const datas = await axios.get('https://65445a9c5a0b4b04436c47d7.mockapi.io/all/name');
      setData(datas.data);
    };
    getData();
  }, []);

  const handlePress = (item) => {
    nav.navigate('Screen3', item);
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => handlePress(item)}>
      <View style={styles.itemContainer}>
      <Image source={{ uri: item.img }} style={styles.image} />
        <View style={styles.infoContainer}>
          {item.status ? (
            <View style={styles.statusContainer}>
              <View style={styles.status}>
                <Text style={styles.statusTextGreen}>√ Accepting Orders</Text>
              </View>
              <View style={styles.status}>
                <Text style={styles.statusTextRed}>5-10 minutes</Text>
              </View>
              <MaterialIcons name="location-on" size={24} color="green" />
            </View>
          ) : (
            <View style={styles.status}>
              <Text style={styles.statusTextGreen}>√ Accepting Orders</Text>
            </View>
          )}

          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
         <Text style={{fontWeight:"bold",fontSize:27}}>Shops Near me</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"white"
  },
  itemContainer: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width - 20,
    height: 180,
    marginVertical: 20,
  },
  image: {
    width: Dimensions.get('window').width - 20,
    height: 100,
  },
  infoContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  statusContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  status: {
    width: 130,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusTextGreen: {
    color: 'green',
  },
  statusTextRed: {
    color: 'red',
  },
  name: {
    marginVertical: 5,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
  },
  address: {
    color: '#aaa',
    marginLeft: 20,
  },
});

export default Screen2;
