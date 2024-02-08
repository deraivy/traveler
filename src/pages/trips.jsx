import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, ScrollView, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width;

const Trips = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(null);

  const trip = [
    { id: 1, name: 'Upcoming' },
    {
      id: 2, name: 'Favourite',
      item: [

      ]


    },
    { id: 3, name: 'Past Trip' }
  ];

  const handleTripClick = (index, tripName) => {
    setActiveIndex(index);
    navigation.navigate('Favourite', { activeIndex: index });
  };


  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity activeOpacity={0.6}
            style={styles.base} onPress={() => navigation.navigate('CreateTrip')}>
            <Ionicons style={styles.icn} name="add" size={26} color='#0137cf' />
            <Text style={styles.creates}>create trip</Text>
          </TouchableOpacity>

          <Text style={styles.title}>My Trips</Text>
          <Text>UP COMING TRIPS</Text>
          <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('TripDetails')}>
              <Image style={styles.img} source={require('../../assets/madimg.jpeg')} />
            </TouchableOpacity>
            <View style={styles.hotel}>
              <View style={styles.priceRow}>
                <Text style={styles.name}>Jeju Island</Text>
                <Text style={styles.name}>$4200</Text>
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.place}>13-18 FEB</Text>
                <Text>budget</Text>
              </View>


            </View>
          </View>


          <Text>PAST TRIPS</Text>
          <View style={styles.space}>
            <View style={styles.brandRow}>
              <View style={styles.brand}>
                <Image style={styles.image} source={require('../../assets/candle.jpeg')} />
              </View>
              <View style={styles.brand}>
                <Image style={styles.image} source={require('../../assets/candle.jpeg')} />
              </View>
            </View>
          </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,

  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 20,

  },
  base: {
    width: 400,
    height: 50,
    borderBottomWidth: 0.5,
    marginTop: -10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'grey',
    paddingHorizontal: 20,
    alignSelf: 'center',
  },

  icn: {
   left:245

  },

  creates: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0137cf',
    textAlign:'right',
    flex:1
  },

  trips: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 50,
    width: 350,
    backgroundColor: '#d3d9d9',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 15
  },
  activeText: {
    color: '#1d5aff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  inactiveText: {
    color: 'black',
    fontSize: 16
  },
  card: {
    width: 350,
    height: 300,
    backgroundColor: 'white',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowOffset: { height: 1, width: 0 },
    marginBottom:20
  },
  img: {
    width: 350,
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  hotel: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: '600'
  },
  place: {
    fontSize: 12,
    color: 'grey',
    top: 5
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 10
  },
  review: {
    marginLeft: 20
  },

  eye: {
    right: 5
  },
  brandRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  brand: {
    height: 250,
    backgroundColor: 'white',
    marginBottom: 30,
    borderRadius: 10,
    marginTop:15
  },
  image: {
    width: 165,
    height: 165,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  space: {
    marginRight: 10
  },
});

export default Trips;
