import { ImageBackground, Image, StyleSheet, Text, View, Dimensions, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { EvilIcons, AntDesign, Entypo, Ionicons, Feather } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native'


const Home = () => {
  const navigation = useNavigation();
  const stay = [
    {
      id: 1,
      name: 'Ijeawele',
      type: 'HOTEL',
      location: 'Jeju',
      price: '400',
      img: require('../../assets/foood.jpeg'),
    },
    {
      id: 2,
      name: 'Sunny view',
      type: 'RESORT',
      location: 'Chad',
      price: '400',
      img: require('../../assets/egypt.jpeg'),
    },
  ]
  const foryou = [
    {
      id: 1,
      name: 'Santorini',
      location: 'Jeju',
      img: require('../../assets/greece.jpeg')
    },
    {
      id: 2,
      name: 'Jeju',
      location: 'Jeju',
      img: require('../../assets/korea.jpeg')
    },
    {
      id: 3,
      name: 'Bali',
      location: 'Jeju',
      img: require('../../assets/foood.jpeg'),
    },
    {
      id: 4,
      name: 'Ijeawele',
      location: 'Jeju',
      img: require('../../assets/foood.jpeg'),
    },
    {
      id: 5,
      name: 'Ijeawele',
      location: 'Jeju',
      img: require('../../assets/foood.jpeg'),
    },
  ]

  const place = [
    {
      id: 1,
      name: 'City Escape',
      img: require('../../assets/tokyo.jpeg'),
    },
    {
      id: 2,
      name: 'Wild Life & Nature',
      img: require('../../assets/foood.jpeg'),
    },
    {
      id: 3,
      name: 'Beach Destination',
      img: require('../../assets/beach.jpeg'),
    },
    {
      id: 4,
      name: 'Winter Destination',
      img: require('../../assets/athensgreece.jpeg'),
    },
  ]

  const hot = [
    {
      id: 1,
      name: 'Bali',
      msg: '248 travelers',
      img: require('../../assets/athensgreece.jpeg'),
    },
    {
      id: 2,
      name: 'Lagos',
      msg: '248 travelers',
      img: require('../../assets/athensgreece.jpeg'),
    },
    {
      id: 3,
      name: 'Bussan',
      msg: '248 travelers',
      img: require('../../assets/athensgreece.jpeg'),
    },
    {
      id: 4,
      name: 'Accra',
      msg: '248 travelers',
      img: require('../../assets/athensgreece.jpeg'),
    },
  ]
  const experience = [
    {
      id: 1,
      name: 'ART CLASS',
      location: 'Lagos, NIgeria',
      img: require('../../assets/candle.jpeg'),
    },
    {
      id: 2,
      name: 'SPORT',
      location: 'Miami, USA',
      img: require('../../assets/surfing.jpeg'),
    },
    {
      id: 3,
      name: 'ART CLASS',
      location: 'Ciaro, Egypt',
      img: require('../../assets/pottery.jpeg'),
    },
    {
      id: 4,
      name: 'ART CLASS',
      location: 'Lagos, NIgeria',
      img: require('../../assets/sky.jpeg'),
    },
  ]


  return (
    <ScrollView>
      <View style={styles.container}>

        <ImageBackground style={styles.img} source={require('../../assets/bacelona.jpeg')}>
          <Text style={styles.title}>Discovery</Text>
        </ImageBackground>

        <View style={styles.searchContainer}>
          <EvilIcons style={styles.search} name="search" size={24} color="black" />
          <TextInput placeholder='where would you like to go' />
        </View>

        <View style={styles.row}>
          <Text style={styles.for}>For you</Text>
          <View style={styles.arrowRow}>
            <Text style={styles.seeAll}>See All</Text>
            <AntDesign name="right" size={12} color="black" />
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {foryou.map((data, value) => (
            <View key={value} style={styles.space}>
              <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Image style={styles.box} source={data.img} />
              </TouchableOpacity>
              <View>
                <Text style={styles.nom}>{data.name}</Text>
                <View style={styles.locacount}>
                  <Entypo style={styles.pin} name="location-pin" size={18} color="blue" />
                  <Text style={styles.pintxt}>{data.location}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.row2}>
          <Text style={styles.for}>Discover Places</Text>
          <TouchableOpacity style={styles.arrowRow} onPress={() => navigation.navigate('Past')}>
            <Text style={styles.seeAll}>See All</Text>
            <AntDesign name="right" size={12} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {place.map((rika, chi) => (
            <TouchableOpacity key={chi} onPress={() => navigation.navigate('Discover')}>
              <ImageBackground style={styles.discoverimg} source={rika.img}>
                <View style={styles.disContainer}>
                  <Text style={styles.discover}>{rika.name}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.row}>
          <Text style={styles.where}>Where To Stay</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Hotel')} style={styles.arrowRow}>
            <Text style={styles.seeAll}>See All</Text>
            <AntDesign name="right" size={12} color="black" />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollViewContainer}>
          {stay.map((bit, root) => (
            <View key={root} style={styles.boxThree}>
              <TouchableOpacity style={styles.likeContainer}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('CreateTrip')} >
                <Feather style={styles.like} name="heart" size={18} color="black" />
              </TouchableOpacity>
              <Image style={styles.imgThree} source={bit.img} />
              <View style={styles.base}>
                <Text style={styles.txt}>{bit.type}</Text>
                <View style={styles.star}>
                  <Entypo name="star" size={12} color="#fa8921" />
                  <Entypo name="star" size={12} color="#fa8921" />
                  <Entypo name="star" size={12} color="#fa8921" />
                  <Entypo name="star" size={12} color="#fa8921" />
                  <Entypo name="star" size={12} color="#fa8921" />
                </View>
              </View>

              <Text style={styles.place}>{bit.name}</Text>
              <View style={styles.locationRow}>
                <View style={styles.locate}>
                  <Entypo name="location-pin" size={16} color="#1d5aff" />
                  <Text style={styles.state}>{bit.location}</Text>
                </View>
                <View style={styles.priceBox}>
                  <Text>${bit.price}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>


        <View style={styles.row2}>
          <Text style={styles.for}>Top Journeys</Text>
          <View style={styles.arrowRow}>
            <Text style={styles.seeAll}>See All</Text>
            <AntDesign name="right" size={12} color="black" />
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.spaces}>
            <View style={styles.card}>
              <View style={styles.holder}>
                <Image style={styles.img1} source={require('../../assets/desert.jpeg')} />
                <View style={styles.space2}>
                  <Image style={styles.img2} source={require('../../assets/jet.jpeg')} />
                  <View style={styles.holder2}>
                    <Image style={styles.img3} source={require('../../assets/food.jpeg')} />
                    <Image style={styles.img4} source={require('../../assets/miraclegarden.jpeg')} />
                  </View>
                </View>
              </View>
              <View style={styles.padding}>
                <View style={styles.root}>
                  <Text>In Dubai 2018</Text>
                  <View>
                    <Text>UAE</Text>
                  </View>
                </View>
                <View style={styles.base}>
                  <View style={styles.rectangle}>
                    <Text style={styles.price}>$5200</Text>
                  </View>
                  <Text style={styles.days}>5 days</Text>
                  <View style={styles.imgRow}>
                    <Image style={styles.profile} source={require('../../assets/Profile01.png')} />
                    <Image style={styles.profile} source={require('../../assets/Profile02.png')} />
                    <Image style={styles.profile} source={require('../../assets/Profile03.png')} />
                  </View>
                </View>
                <View style={styles.line} />
                <View style={styles.iconContainer}>
                  <View style={styles.baseContainer}>
                    <EvilIcons name="heart" size={24} color="black" style={styles.icon} />
                    <Ionicons name="chatbox-ellipses-outline" size={20} color="black" style={styles.icon} />
                    <Ionicons name="play-outline" size={23} color="black" style={styles.icon} />
                  </View>
                  <Feather name="bookmark" size={24} color="black" />
                </View>
                <View style={styles.imgRow}>
                  <Image style={styles.pro} source={require('../../assets/Profile01.png')} />
                  <Image style={styles.pro} source={require('../../assets/Profile02.png')} />
                  <Image style={styles.pro} source={require('../../assets/Profile03.png')} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.holder}>
              <Image style={styles.img1} source={require('../../assets/desert.jpeg')} />
              <View style={styles.space2}>
                <Image style={styles.img2} source={require('../../assets/jet.jpeg')} />
                <View style={styles.holder2}>
                  <Image style={styles.img3} source={require('../../assets/food.jpeg')} />
                  <Image style={styles.img4} source={require('../../assets/miraclegarden.jpeg')} />
                </View>
              </View>
            </View>
            <View style={styles.padding}>
              <View style={styles.root}>
                <Text>In Dubai 2018</Text>
                <View>
                  <Text>UAE</Text>
                </View>
              </View>
              <View style={styles.base}>
                <View style={styles.rectangle}>
                  <Text style={styles.price}>$5200</Text>
                </View>
                <Text style={styles.days}>5 days</Text>
                <View style={styles.imgRow}>
                  <Image style={styles.profile} source={require('../../assets/Profile01.png')} />
                  <Image style={styles.profile} source={require('../../assets/Profile02.png')} />
                  <Image style={styles.profile} source={require('../../assets/Profile03.png')} />
                </View>
              </View>
              <View style={styles.line} />
              <View style={styles.iconContainer}>
                <View style={styles.baseContainer}>
                  <EvilIcons name="heart" size={24} color="black" style={styles.icon} />
                  <Ionicons name="chatbox-ellipses-outline" size={20} color="black" style={styles.icon} />
                  <Ionicons name="play-outline" size={23} color="black" style={styles.icon} />
                </View>
                <Feather name="bookmark" size={24} color="black" />
              </View>
              <View style={styles.imgRow}>
                <Image style={styles.pro} source={require('../../assets/Profile01.png')} />
                <Image style={styles.pro} source={require('../../assets/Profile02.png')} />
                <Image style={styles.pro} source={require('../../assets/Profile03.png')} />
              </View>
            </View>
          </View>

        </ScrollView>

        <View style={styles.row2}>
          <Text style={styles.for}>Hot Places </Text>
          <View style={styles.arrowRow}>
            <Text style={styles.seeAll}>See All</Text>
            <AntDesign name="right" size={12} color="black" />
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {hot.map((bae, chick) => (
            <View key={chick} style={styles.space}>
              <TouchableOpacity style={styles.likeContainer2}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('CreateTrip')} >
                <Feather style={styles.like} name="heart" size={18} color="black" />
              </TouchableOpacity>
              <ImageBackground style={styles.backgroundimg} source={require('../../assets/maldives.jpeg')}>
                <View style={styles.backTr}>
                  <Text style={styles.txtOne}>{bae.name}</Text>
                  <Text style={styles.txtTwo}>{bae.msg}</Text>
                  <Text></Text>
                </View>
              </ImageBackground>
            </View>
          ))}

        </ScrollView>

        <View style={styles.row2}>
          <Text style={styles.for}>Featured Experience</Text>
          <View style={styles.arrowRow}>
            <Text style={styles.seeAll}>See All</Text>
            <AntDesign name="right" size={12} color="black" />
          </View>
        </View>

        
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {experience.map((su, bby) => (
              <View key={bby} style={styles.space}>
                <TouchableOpacity onPress={() => navigation.navigate('Activity')} style={styles.band}>
                  <Image style={styles.backgroundimg2} source={su.img} />
                </TouchableOpacity>
                <Text style={styles.class}>{su.name}</Text>
                <Text style={styles.className}>Candle Making</Text>
                <View style={styles.classRow}>
                  <Entypo style={styles.pin} name="location-pin" size={18} color="blue" />
                  <Text style={styles.classPlace}>{su.location}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
      </View>
    </ScrollView>

  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  img: {
    width: width,
    height: 230,
    alignSelf: 'center',
    paddingHorizontal: 20
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 150,
  },

  searchContainer: {
    width: 350,
    height: 40,
    backgroundColor: 'white',
    shadowOpacity: 0.5,
    shadowOffset: { height: 1, width: 1 },
    alignSelf: 'center',
    top: -20,
    borderRadius: 10,
    shadowColor: '#63c1fb',
    flexDirection: 'row'
  },
  search: {
    padding: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  for: {
    fontSize: 18,
    fontWeight: '700'
  },
  where: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: '700'
  },
  seeAll: {
    color: 'grey'
  },
  arrowRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  space: {
    marginRight: 10
  },
  box: {
    width: 150,
    height: 120,
    borderRadius: 10,

  },
  nom: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: '500'
  },
  locacount: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  pin: {
    left: -3
  },
  pintxt: {
    color: 'blue'
  },
  roundBox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  round: {
    height: 80,
    width: 80,
    // borderWidth: 1,
    borderRadius: 80,
    marginTop: 15,
    backgroundColor: 'white',
    shadowOpacity: 0.2,
    shadowOffset: { width: -1, height: -1 },
    shadowColor: '#294a7e'
  },

  mad: {
    width: 45,
    height: 45,
    margin: 15
  },
  discoverimg: {
    width: 250,
    height: 200,
    overflow: 'hidden',
    borderRadius: 10,
    marginRight: 10
  },
  disContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a semi-transparent background
    padding: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

  },
  discover: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',

  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20
  },
  card: {
    width: 326,
    height: 380,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowOpacity: 0.5,
    shadowOffset: { height: 1, width: 1 },
    marginBottom: 15
  },
  spaces: {
    marginRight: 15
  },
  boxThree: {
    marginRight: 10
  },
  imgThree: {
    width: 180,
    height: 200,
    borderRadius: 10
  },
  likeContainer: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 1,
    borderRadius: 30,
    left: 145,
    top: 10
  },
  like: {
    alignSelf: 'center',
    marginTop: 5
  },
  base: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  txt: {
    fontSize: 10,
    marginLeft: 5
  },
  star: {
    flexDirection: 'row'
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  locate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  place: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 3
  },

  state: {
    color: '#0236cb'
  },

  priceBox: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 50
  },

  holder: {
    flexDirection: 'row',
  },
  img1: {
    width: 120,
    height: 205,
    borderTopLeftRadius: 10,

  },
  space2: {
    marginLeft: 5
  },
  img2: {
    width: 202,
    height: 100,
    borderTopRightRadius: 10,

  },
  holder2: {
    flexDirection: 'row',
    paddingTop: 5
  },

  img3: {
    width: 98,
    height: 100,

  },
  img4: {
    width: 98,
    height: 100,
    marginHorizontal: 5
  },
  padding: {
    paddingHorizontal: 20,
    marginTop: 15
  },

  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  base: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center'
  },
  rectangle: {
    width: 70,
    height: 20,
    backgroundColor: '#ff003c',
    borderRadius: 5,
  },

  price: {
    color: 'white',
    textAlign: 'center'
  },
  days: {
    flex: 1,
    marginLeft: 5,
  },
  imgRow: {
    flexDirection: 'row'
  },
  profile: {
    width: 20,
    height: 20,
    marginRight: 3
  },
  line: {
    width: '100%',
    borderBottomWidth: 0.5,
    alignSelf: 'center',
    marginTop: 10,
    borderColor: 'grey'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10

  },
  baseContainer: {
    flexDirection: 'row'
  },
  icon: {
    marginRight: 25,
  },
  pro: {
    width: 20,
    height: 20,

  },
  card2: {
    width: 200,
    height: 250,
    backgroundColor: 'white'
  },
  backgroundimg: {
    width: 200,
    height: 290,
    borderRadius: 10,
    overflow: 'hidden',

  },
  backTr: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a semi-transparent background
    padding: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  txtOne: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
    left: 10

  },
  txtTwo: {
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
    marginBottom: -14,
    left: 10
  },
  likeContainer2: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 1,
    borderRadius: 30,
    left: 162,
    top: 10
  },
  band: {
    flexDirection: 'row'
  },
  backgroundimg2: {
    width: 260,
    height: 280,
    overflow: 'hidden',
    marginBottom: 5,
    borderRadius: 10,
  },

  class: {
    fontSize: 10,
    marginBottom: 3
  },
  className: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 3
  },
  classRow: {
    flexDirection: 'row',
    marginBottom: 20
  },
  classPlace: {
    color: 'blue',
    fontSize: 13,
  }
})