import { ImageBackground, StyleSheet, Text, View, Dimensions, TextInput, TouchableHighlightComponent, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
const width = Dimensions.get('window').width

const Register = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('SignIn');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    // Use React Navigation to navigate to the selected tab
    if (tab === 'SignIn') {
      navigation.navigate('Login');
    } else if (tab === 'SignUp') {
      navigation.navigate('Register');
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.img} source={require('../../assets/tokyo.jpeg')}>
        <View style={styles.base}>
          <TouchableOpacity onPress={() => handleTabPress('SignIn')}>
            <Text style={[styles.text, activeTab === 'SignIn' && { color: '#0137cf' }]}>Sign In</Text>
            {activeTab === 'SignIn' && <View style={[styles.line, { borderColor: '#0137cf' }]} />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress('SignUp')}>
            <Text style={[styles.text, activeTab === 'SignUp' && { color: '#0137cf' }]}>Sign up</Text>
            {activeTab === 'SignUp' && <View style={[styles.line, { borderColor: '#0137cf' }]} />}
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.new}>
        <Text style={styles.newText}>New{'\n'}Account</Text>
        <View>
          <View style={styles.circle}>
            <Feather style={styles.icon} name="camera" size={24} color="black" />
          </View>
          <Text style={styles.upload}>Upload your {'\n'}photo here</Text>
        </View>
      </View>
      <View>
        <Text style={styles.main}>Email</Text>
        <TextInput style={styles.input} placeholder='example@gmail.com' />
        <View style={styles.line2} />
        <Text style={styles.main}>Username</Text>
        <TextInput style={styles.input} placeholder='user' />
        <View style={styles.line2} />
        <Text style={styles.main}>Password</Text>
        <TextInput style={styles.input} placeholder='*********' />
        <View style={styles.line2} />
        <Text style={styles.main}>confirmpassword</Text>
        <TextInput style={styles.input} placeholder='*********' />
        <View style={styles.line2} />
      </View>
      <View style={styles.signContainer}>
        <TouchableOpacity style={styles.sign} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  img: {
    width: width,
    height: 250,
    alignSelf: 'center'
  },
  base: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    alignItems: 'center', // Align items in the center vertically
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    bottom: -6
  },
  line: {
    borderBottomWidth: 2,
    borderColor: 'white',
    width: 100,
    marginTop: 5,
    alignContent: 'center',
    marginBottom: 3
  },
  new: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center'
  },
  newText: {
    fontSize: 30,
    fontWeight: '700'
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'white',
    borderColor: '#0137cf',
    borderWidth: 2
  },
  icon: {
    alignSelf: 'center',
    marginTop: 20,

  },
  upload: {
    fontSize: 12,
    textAlign: 'center',
    color: 'grey',
    marginTop: 10
  },
  input: {
    marginTop: 15
  },
  main: {
    marginTop: 20
  },
  line2: {
    borderBottomWidth: 1,

  },
  signContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    bottom: 20
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
    marginTop: 6,
    fontSize: 18,

  }
})