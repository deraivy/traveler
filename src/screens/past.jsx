import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const Past = () => {
    const navigation = useNavigation();
    const city = [
        { id: 1, name: 'city escape', img: require('../../assets/city.jpeg') },
        { id: 2, name: 'beach destination', img: require('../../assets/maldives.jpeg') },
        { id: 3, name: 'Nature', img: require('../../assets/bacelona.jpeg') },
        { id: 4, name: 'Historical Sites', img: require('../../assets/tokyo.jpeg') },
        { id: 5, name: 'Relaxation Retreat', img: require('../../assets/jet.jpeg') },
        { id: 6, name: 'Road Trip', img: require('../../assets/foood.jpeg') },
        { id: 7, name: 'Wild Life', img: require('../../assets/bacelona.jpeg') },
        { id: 8, name: 'Winter', img: require('../../assets/bacelona.jpeg') },
    ];

    const cityRows = [];
    for (let i = 0; i < city.length; i += 5) {
        cityRows.push(city.slice(i, i + 5));
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Ionicons name="chevron-back-sharp" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Triper Guide</Text>
                </View>
                <Text style={styles.subtitle}>Destinations</Text>

                <ScrollView horizontal>
                    <View style={styles.flow}>
                        {cityRows.map((row, rowIndex) => (
                            <View style={styles.row} key={rowIndex}>
                                {row.map((item, index) => (
                                    <TouchableOpacity key={index} onPress={() => navigation.navigate('Discover')}>
                                        <ImageBackground style={styles.img} source={item.img}>
                                            <View style={styles.nameContainer}>
                                                <Text style={styles.name}>{item.name}</Text>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ))}
                    </View>
                </ScrollView>
                <Text style={styles.sub}>Explore</Text>
                <View style={styles.box}>
                    <Image style={styles.imgTwo} source={require('../../assets/athensgreece.jpeg')}/>
                </View>
            </View>
        </SafeAreaView>

    )
}

export default Past

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
        fontSize: 18,
        fontWeight: '600'
    },
    subtitle: {
        fontSize: 22,
        marginTop: 15,
        fontWeight:'700'
    },
    flow: {
        marginTop: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
        gap: 10
    },
    img: {
        width: 150,
        height: 150,
        overflow: 'hidden',
        borderRadius: 10
    },
    nameContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a semi-transparent background
        padding: 15,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,

    },
    name: {
        position: 'absolute',
        bottom: 5,
        left: 0,
        right: 0,
        color: 'white',
        fontSize: 14,
        fontWeight: '800',
        left: 10
    },
    box:{
       marginTop:20,
        height:120,
        borderRadius:10,
        width:350,
        shadowOpacity:0.5,
        backgroundColor:'white',
        shadowOffset:{height:1, width:1}

       
    },
    imgTwo:{
        width:130,
        height:118,
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10
    },
    sub:{
        marginTop:10,
        fontSize:18,
        fontWeight:'600'
    }
})