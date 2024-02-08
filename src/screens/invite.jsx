import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
const Invite = () => {
    const navigation = useNavigation();
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelection = (index) => {
    const updatedSelection = [...selectedItems];
    updatedSelection[index] = !updatedSelection[index];
    setSelectedItems(updatedSelection);
  };

  const renderInviteItem = (index) => {
    return (
      <View style={styles.body} key={index}>
        <View style={styles.row}>
          <Image source={require('../../assets/Profile02.png')} />
          <Text>Bella Tran</Text>
        </View>
        <TouchableOpacity
          onPress={() => toggleSelection(index)}
          style={[styles.circle, selectedItems[index] && styles.circleSelected]}
        >
          {selectedItems[index] && <AntDesign name="check" size={16} color="white" />}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('CreateTrip')}>
        <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Invite Friends To The Trip</Text>
      </View>
      <View style={styles.searchBox}>
        <EvilIcons style={styles.icon} name="search" size={24} color="black" />
        <TextInput placeholder="search" />
      </View>
      {Array.from({ length: 5 }).map((_, index) => renderInviteItem(index))}
      <View style={styles.signContainer}>
        <TouchableOpacity style={styles.sign} onPress={() => navigation.navigate('Done')}>
          <Text style={styles.signText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};






const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 55,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  searchBox: {
    borderWidth: 2,
    borderColor: '#83a3ff',
    backgroundColor: '#f2f4fd',
    height: 40,
    flexDirection: 'row',
    marginTop: 30,
  },
  icon: {
    padding: 8,
  },
  body: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  circle: {
    borderWidth: 1,
    height: 20,
    width: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleSelected: {
    backgroundColor: '#83a3ff', // Color when selected
  },
  signContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  sign: {
    width: 350,
    height: 50,
    backgroundColor: '#0137cf',
    alignSelf: 'center',
    borderRadius: 10
  },
  signText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,

  }
});

export default Invite;
