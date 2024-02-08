import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, View, Text } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { AntDesign, FontAwesome5, Ionicons, Entypo } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native'
const Discover = () => {
    const navigation = useNavigation();

    const city = [
        { id: 1, name: 'Tokyo', detail: 'yo this is it babe', img: require('../../assets/disney.jpeg') },
        { id: 2, name: 'Tokyo', detail: 'yo this is it babe', img: require('../../assets/disney.jpeg') },
        { id: 3, name: 'Tokyo', detail: 'yo this is it babe', img: require('../../assets/disney.jpeg') },
        { id: 4, name: 'Tokyo', detail: 'yo this is it babe', img: require('../../assets/disney.jpeg') },
        { id: 5, name: 'Tokyo', detail: 'yo this is it babe', img: require('../../assets/disney.jpeg') },
        { id: 6, name: 'Tokyo', detail: 'yo this is it babe', img: require('../../assets/disney.jpeg') },
    ]

    return (
        <SafeAreaView>
            <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Past')}>
                        <Ionicons name="chevron-back-sharp" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Triper Guide</Text>
                </View>
                <Text style={styles.subtitle}>City Escape</Text>
               
                    {city.map((item, index) => (
                        <TouchableOpacity 
                        onPress={() => navigation.navigate('About')}
                        activeOpacity={0.8}
                        key={index} style={styles.card}>
                            <Text style={styles.city}>{item.name}</Text>
                            <Text style={styles.place}>{item.detail}</Text>
                            <Image style={styles.imgTwo} source={item.img} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        
        paddingHorizontal: 20
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        flex: 1,
        fontSize: 16,
        fontWeight: '600'
    },
    subtitle: {
        fontSize: 22,
        marginTop: 15,
        fontWeight: '700',
        marginBottom:20
    },
    card: {
        width: 350,
        height: 280,
        backgroundColor: 'white',
        alignSelf: 'center',
       marginBottom:20,
        borderRadius: 10,
        shadowOpacity: 0.5,
        shadowOffset: { height: 2, width: 1 },
        shadowColor: 'blue'
    },
    city: {
        fontSize: 20,
        paddingHorizontal: 10,
        marginTop: 15,
        fontWeight: '600'
    },
    place: {
        fontSize: 14,
        paddingHorizontal: 10,
        marginTop: 5,
        fontWeight: '400'
    },
    imgTwo: {
        width: 349,
        height: 200,
        bottom: 0,
        position: 'absolute',
        alignSelf: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },












});

export default Discover;
