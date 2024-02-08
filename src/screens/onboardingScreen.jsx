import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native'
const OnboardingScreen = () => {
  const navigation = useNavigation();
  const slides = [
    {
      imageSource: require('../../assets/discoverworld.png'),
      text: 'Discover the world!',
      textTwo: 'Find inspiration, explore fascinating details for your trip'
    },
    {
      imageSource: require('../../assets/check-lists.png'),
      text: 'Plan Your Trip',
      textTwo: 'Select destination and start scheduling details for your next trip'
    },
    {
      imageSource: require('../../assets/credit-card.png'),
      text: 'Manage Trip Expenses',
      textTwo: 'Manage budget and expenses throughout your journey'
    },
    {
      imageSource: require('../../assets/travel.png'),
      text: 'Start Your Adventure',
      textTwo: 'Explore'
    },
    {
      imageSource: require('../../assets/share.png'),
      text: 'Share and Connect',
      textTwo: 'Manage budget and expenses throughout your journey'
    },
  ];

  const lastIndex = slides.length - 1;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
       <Text style={styles.skipText}>{lastIndex === slides.length - 1 ? 'Skip' : 'Done'}</Text>
      </TouchableOpacity>
  
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
      >

        {slides.map((slide, index) => (
          <View style={styles.slide} key={index}>
            <Image style={styles.img} source={slide.imageSource}/>
           
            <View style={styles.slideContent}>
              <Text style={styles.detailsText}>{slide.text}</Text>
              <Text style={styles.Text}>{slide.textTwo}</Text>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: 'white'
  },
  skipText: {
    color: 'blue',
    fontSize: 16,
    alignSelf: 'flex-end',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
  },
  slideContent: {
    position: 'absolute',
    bottom: 90,
    left: 0,
    right: 0,

  },
  skipButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  img: {
    marginTop: -100,
    height: 200,
    width: 300
  },
  Text:{
    textAlign:'center'
  },
  
});
