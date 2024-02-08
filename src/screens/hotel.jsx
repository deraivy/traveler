import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Hotel = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView >
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                   
                    <Text style={styles.title}>Explore</Text>
                    <View style={styles.icnContainer}>
                        <Entypo name="heart-outlined" size={24} color="black" />
                        <Entypo name="location-pin" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.locationBox}>
                    <View style={styles.location}>
                        <TextInput style={styles.input} placeholder='hello' />
                    </View>
                    <TouchableOpacity style={styles.search}>
                        <Ionicons style={styles.icon} name="search" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>choose date</Text>
                </View>
                <View style={styles.card}>
                    <TouchableOpacity onPress={()=> navigation.navigate('HotelView')}>
                        <Image style={styles.img} source={require('../../assets/madimg.jpeg')} />
                    </TouchableOpacity>
                    <View style={styles.hotel}>
                        <View style={styles.priceRow}>
                            <Text style={styles.name}>Queen's hotel</Text>

                            <Text style={styles.name}>$4200</Text>

                        </View>
                        <View style={styles.priceRow}>
                            <Text style={styles.place}>East london</Text>
                            <Text>per night</Text>
                        </View>
                        <View style={styles.star}>
                            <Ionicons name="star" size={14} color="gold" />
                            <Ionicons name="star" size={14} color="gold" />
                            <Ionicons name="star" size={14} color="gold" />
                            <Ionicons name="star" size={14} color="gold" />
                            <Ionicons name="star" size={14} color="gold" />
                            <Text style={styles.review}>80 reviews</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <TouchableOpacity onPress={()=> navigation.navigate('HotelDetails')}>
                        <Image style={styles.img} source={require('../../assets/madimg.jpeg')} />
                    </TouchableOpacity>
                    <View style={styles.hotel}>
                        <View style={styles.priceRow}>
                            <Text style={styles.name}>Queen's hotel</Text>

                            <Text style={styles.name}>$4200</Text>

                        </View>
                        <View style={styles.priceRow}>
                            <Text style={styles.place}>East london</Text>
                            <Text>per night</Text>
                        </View>
                        <View style={styles.star}>
                            <Ionicons name="star" size={14} color="gold" />
                            <Ionicons name="star" size={14} color="gold" />
                            <Ionicons name="star" size={14} color="gold" />
                            <Ionicons name="star" size={14} color="gold" />
                            <Ionicons name="star" size={14} color="gold" />
                            <Text style={styles.review}>80 reviews</Text>
                        </View>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Hotel

const styles = StyleSheet.create({
    // area: {
    //     backgroundColor: 'white'
    // },
    container: {
        paddingHorizontal: 20,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'white'
    },
    icnContainer: {
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600'
    },
    locationBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    location: {
        width: 300,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 20,
        shadowOpacity: 0.1,
        shadowOffset: { height: 1, width: 0 }
    },
    input: {
        top: 8,
        left: 25
    },
    search: {
        width: 35,
        height: 35,
        borderRadius: 40,
        backgroundColor: '#1d5aff',
        top: 10
    },
    icon: {
        padding: 6,
        alignItems:'center'
    },
    card: {
        width: 350,
        height: 300,
        backgroundColor: 'white',
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 20,
        shadowOpacity: 0.5,
        shadowOffset: { height: 1, width: 0 }
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
    }


})