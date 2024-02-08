import { Dimensions, Image, SafeAreaView, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
const width = Dimensions.get('window').width


const EditProfile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
          <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.profile}>Profile</Text>
          <TouchableOpacity>
            <Text style={styles.save}>Save</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.bacImg}>
            <View style={styles.pen}>
              <MaterialCommunityIcons style={styles.icn} name="pencil" size={24} color="white" />
            </View>
          </View>
          <View style={styles.base}>
            <View style={styles.penTwo}>
              <MaterialCommunityIcons style={styles.icn} name="pencil" size={24} color="white" />
            </View>
            <View style={styles.borderProfile}>
              <Image style={styles.pro} source={require('../../assets/Profile02.png')} />
            </View>
            <View style={styles.body}>
              <Text style={styles.name}>ChiChi♥️</Text>
              <Text style={styles.user}>bigchi</Text>

              <Text style={styles.display}>DISPLAY NAME</Text>
              <View style={styles.box}>
                <TextInput style={styles.inputT} />
              </View>
              <Text style={styles.display}>PRONOUNS</Text>
              <View style={styles.box}>
                <TextInput style={styles.inputT} />
              </View>
              <Text style={styles.display}>ABOUT ME</Text>
              <View style={styles.boxTwo}>
                <TextInput style={styles.input} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#f1f3f4'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    bottom: 5
  },
  profile: {
    fontSize: 18
  },
  save: {
    color: 'blue'
  },
  bacImg: {
    width: width,
    height: 150,
    alignSelf: 'center',
    backgroundColor: 'orange',
    paddingHorizontal: 20
  },
  border: {
    borderWidth: 1.5,
    borderColor: 'white',
    width: 25
  },
  pen: {
    width: 30,
    height: 30,
    backgroundColor: 'pink',
    borderRadius: 20,
    alignSelf: 'flex-end',
    top: 20
  },

  penTwo: {
    width: 30,
    height: 30,
    backgroundColor: 'pink',
    borderRadius: 20,
    position: 'absolute', // Set the position property to absolute
   
    left: 80
  },
  icn: {
    padding: 3
  },
  base: {
    paddingHorizontal: 20,
  },
  borderProfile: {
    borderWidth: 6,
    alignSelf: 'flex-start',
    borderRadius: 100,
    top: -40,
    borderColor: '#f2f2f2'
  },
  pro: {
    top: -1,
    width: 85,
    height: 85,
    zIndex: 0,
  },
  body: {
    backgroundColor: 'white',
    top: -20,
    height: 500,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20
  },
  name: {
    fontSize: 20,
    // color: '#c7c8ce',
  },
  user: {
    fontSize: 18,
    // color: '#c7c8ce',
  },
  display: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 20
  },
  box: {
    borderWidth: 2,
    height: 40,
    width: 312,
    alignSelf: 'center',
    borderColor: '#dddddd',
    marginTop: 10
  },
  boxTwo: {
    borderWidth: 2,
    height: 200,
    width: 312,
    alignSelf: 'center',
    borderColor: '#dddddd',
    marginTop: 10
  },
  inputT: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  input: {
    paddingVertical: 20,
    paddingHorizontal: 20
  }
})