import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, Feather, Foundation } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

const Setting = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
        <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
       
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.signOut}>Sign Out</Text>
      </View>
      <View style={styles.firstBody}>
        <View style={styles.secBody}>
          <Image style={styles.pro} source={require('../../assets/Profile02.png')} />
          <View style={styles.join}>
            <Text style={styles.text}>Kelvin</Text>
            <Text style={styles.textTwo}>kel@gmail.com</Text>
          </View>
          <AntDesign name="right" size={18} color="white" />
        </View>
        <Text style={styles.subTitle}>Preferance</Text>
      </View>

      <View style={styles.detail}>
        <Feather name="bell" size={24} color="black" />
        <Text style={styles.txt}>Notification</Text>
        <AntDesign name="right" size={18} color="black" />
      </View>

      <View style={styles.line} />

      <View style={styles.detail}>
      <Feather name="flag" size={24} color="black" />
        <Text style={styles.txt}>Language</Text>
        <AntDesign name="right" size={18} color="black" />
      </View>
      <View style={styles.line} />

      <View style={styles.detail}>
   
      <Foundation name="dollar" size={30} color="black" />
        <Text style={styles.txt}>Currency</Text>
        <AntDesign name="right" size={18} color="black" />
      </View>
      <View style={styles.line} />
      <View style={styles.thirdBox}>
          <Text style={styles.booking}>Booking and Payment</Text>
      </View>
      <View style={styles.detail}>
      <Feather name="credit-card" size={24} color="black" />
        <Text style={styles.txt}>Payment And Method</Text>
        <AntDesign name="right" size={18} color="black" />
      </View>
      <View style={styles.thirdBox}>
         
      </View>
      <View style={styles.detail}>
        <Text style={styles.txt}>Privacy Policy</Text>
        <AntDesign name="right" size={18} color="black" />
      </View>
      <View style={styles.line} />

      <View style={styles.detail}>
        <Text style={styles.txt}>Terms Of Use</Text>
        <AntDesign name="right" size={18} color="black" />
      </View>
      <View style={styles.thirdBox}>
         
         </View>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: '700'
  },
  signOut:{
    fontSize:12
  },
  firstBody: {
    backgroundColor: '#f0f2f4',
    width: 350,
    height: 200,
    marginTop: 20,
    alignSelf: 'center'
  },
  secBody: {
    backgroundColor: '#1d5aff',
    height: 100,
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  join: {
    flex: 1,
    marginLeft: 15
  },
  text: {
    color: 'white',
    fontSize: 18
  },
  textTwo: {
    color: 'white',
    fontSize: 12
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 30,
    paddingHorizontal: 20
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 15
  },
  txt: {
    flex: 1,
    marginLeft: 10,
    fontWeight: '600'
  },
  line: {
    borderBottomWidth: 1,
    marginTop: 5,
    borderColor: 'grey',
    width: '95%',
    alignSelf: 'center'
  },
  thirdBox:{
    backgroundColor: '#f0f2f4',
    width:350,
    height:50,
    alignSelf:'center',
    marginTop:20
  },
  booking:{
    paddingHorizontal:20,
    marginTop:10,
    fontSize:18,
    fontWeight:'600'
  }
})