import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
const width = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native'
import { Ionicons, Entypo, Fontisto, FontAwesome } from '@expo/vector-icons';

const Activity = () => {
  return (
    <View>
      <ScrollView>
      <Image style={styles.img} source={require('../../assets/icecream.jpeg')} />
      <View style={styles.header}>
        <Text style={styles.title} >Attraction</Text>
        <Text style={styles.subtitle}>Teddy Bear Museum</Text>

        <View style={styles.txtRow}>
          <Ionicons name="location-outline" size={24} color="white" />
          <Text style={styles.place}>Jeju-do korea</Text>
        </View>

        <View style={styles.box}>
          <View style={styles.boxOne}>
            <Text style={styles.txt}>$55/person</Text>
          </View>
          <View style={styles.boxTwo}>
            <Entypo style={styles.icn} name="heart-outlined" size={24} color="white" />
            <Text style={styles.teext}>7.8</Text>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Fontisto style={styles.icon} name="world-o" size={20} color="black" />
            <Text style={styles.visit}>hello Africa</Text>
          </View>
          <View style={styles.btn}>
            <FontAwesome style={styles.icon} name="paper-plane" size={20} color="black" />
            <Text style={styles.visit}>Visit Website</Text>
          </View>
        </View>
        <View style={styles.contain}>
            <Text style={styles.open} >Opening hours</Text>
            <Text>Sunday-Monday 9am-7pm</Text>
          </View>
        <View style={styles.reviewContainer}>
          <Text style={styles.review}>Review (100)</Text>
          <View style={styles.reviewRow}>
            <Image style={styles.avater} source={require('../../assets/Profile01.png')} />
            <Text style={styles.name}>Lee min</Text>
            <View style={styles.date}>
              <Text>Jan 10</Text>
              <Text>9:00</Text>
            </View>
          </View>
          <Text style={styles.about}>Dive into a sweet spread of UNLIMITED ice cream that spans global tastes,
            textures and toppings! Whether you’re into creamy, crunchy, dairy-free or fruity</Text>

          <View style={styles.reviewRow}>
            <Image style={styles.avater} source={require('../../assets/Profile01.png')} />
            <Text style={styles.name}>Lee min</Text>
            <View style={styles.date}>
              <Text>Jan 10</Text>
              <Text>9:00</Text>
            </View>
          </View>
          <Text style={styles.about}>Dive into a sweet spread of UNLIMITED ice cream that spans global tastes,
            textures and toppings! Whether you’re into creamy, crunchy, dairy-free or fruity</Text>

          <View style={styles.reviewRow}>
            <Image style={styles.avater} source={require('../../assets/Profile01.png')} />
            <Text style={styles.name}>Lee min</Text>
            <View style={styles.date}>
              <Text>Jan 10</Text>
              <Text>9:00</Text>
            </View>
          </View>
          <Text style={styles.about}>Dive into a sweet spread of UNLIMITED ice cream that spans global tastes,
            textures and toppings! Whether you’re into creamy, crunchy, dairy-free or fruity</Text>
            <View>
              <View style={styles.holderRow}>
              <TextInput style={styles.holder} placeholder='Write a review...'/>
            <FontAwesome style={styles.icoon} name="paper-plane-o" size={18} color="black" />
              </View>
            <View style={styles.line}/>
            </View>
           
        </View>
        <Text>Photos In Here</Text>
      </View>
      </ScrollView>
    </View>
  )
}

export default Activity

const styles = StyleSheet.create({
  img: {
    width: width,
    height: 400,
    position: 'absolute',

  },
  header: {
    paddingHorizontal: 10,
    marginTop: 230
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  txtRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  subtitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  place: {
    color: 'white',
    fontWeight: '600',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  boxOne: {
    width: 130,
    height: 40,
    backgroundColor: '#ff003c',

  },
  boxTwo: {
    width: 60,
    height: 40,
    backgroundColor: 'orange',
    flexDirection: 'row',


  },
  txt: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10
  },
  teext: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
    left: 5
  },
  open:{
    marginTop:10,
    fontWeight:'700',
    marginBottom:5
  },
  contain:{
    width:350,
    height:60,
    backgroundColor:'white',
    marginTop:20,
    alignSelf:'center',
    alignItems:'center'
  },
  icn: {
    marginTop: 9,
    left: 4
  },
  body: {
    marginTop: 40,
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  btn: {
    width: 150,
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    left: 15
  },
  visit: {
    left: 20,
    fontSize: 15,
    fontWeight: '600'
  },
  reviewContainer: {
    width: 350,
    height: 520,
    backgroundColor: 'white',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 10
  },
  review:{
    marginTop:10,
    left:20,
    fontSize:18,
    fontWeight:'600'
  },
  reviewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  avater: {
    height: 35,
    width: 35
  },
  name: {
    flex: 1,
    left: 10
  },
  date: {
    flexDirection: 'row',
    gap: 10
  },
  about: {
    paddingHorizontal: 20,
    marginTop: 10
  },
  holderRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal: 30,
  },
  line:{
    borderBottomWidth:1,
    marginTop:10,
    width:300,
    alignSelf:'center',
    borderColor:'blue',
    
  },
  holder:{
    marginTop:30,
   
  },
  icoon:{
    marginTop:30,
  }
})