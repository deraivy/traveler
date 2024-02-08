import { Image, Dimensions, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
const width = Dimensions.get('window').width

const HotelDetails = () => {
    const navigation = useNavigation();
    return (

        <View>
            <ImageBackground source={require('../../assets/lamp.jpeg')} style={styles.bacImg}>
                <TouchableOpacity onPress={() => { navigation.navigate('HotelView') }}>
                    <AntDesign style={styles.menu} name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.container}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Queen Royale {'\n'}Park Hotel</Text>
                    <Text style={styles.price}>$85</Text>
                </View>
                <View style={styles.perRow}>
                    <Text style={styles.per}>London</Text>
                    <Text style={styles.per}>per night</Text>
                </View>
                <View style={styles.line} />
                <View>
                    <Text style={styles.summary}>summary</Text>
                    <Text>
                        At this hotel
                        Elite Fitness Gym & Personal Training (Branch 2)
                        5.0
                        (6)
                        Gym
                        0908 171 0941
                        Open
                        ⋅ Closes 7 pm
                        Services
                        Web results about this place
                    </Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.overview}>
                        <Text style={styles.no}>9.2</Text>
                        <View>
                            <Text>OverView Rating</Text>
                            <View style={styles.star}>
                                <Ionicons name="star" size={14} color="gold" />
                                <Ionicons name="star" size={14} color="gold" />
                                <Ionicons name="star" size={14} color="gold" />
                                <Ionicons name="star" size={14} color="gold" />
                                <Ionicons name="star" size={14} color="gold" />
                            </View>
                        </View>

                    </View>
                    <View style={styles.rate}>
                        <Text>Room</Text>
                        <View style={styles.border} />

                    </View>
                    <View style={styles.rate}>
                        <Text>Service</Text>
                        <View style={styles.service} />

                    </View>
                    <View style={styles.rate}>
                        <Text>Location</Text>
                        <View style={styles.locat} />

                    </View>
                    <View style={styles.rate}>
                        <Text>price</Text>
                        <View style={styles.ppt} />
                    </View>
                </View>
                <View style={styles.line} />

                <Text style={styles.summary}>Reviews</Text>

                <View style={styles.reviewBox}>
                    <Image style={styles.pro} source={require('../../assets/Profile02.png')} />
                    <View>
                        <Text style={styles.revierName}>Chels Ote$</Text>
                        <Text style={styles.updated}>last updated 2/02/2024</Text>
                    </View>
                    <View>
                        <Text>very good 8.0</Text>
                        <View style={styles.star}>
                            <Ionicons n-ame="star" size={14} color="gold" />
                            <Ionicons name="star" size={14} color="gold" />
                            <Ionicons name="star" size={14} color="gold" />
                            <Ionicons name="star" size={14} color="gold" />
                            <Ionicons name="star" size={14} color="gold" />
                        </View>
                    </View>

                </View>
                <Text style={styles.txt}>yvjhbawN </Text>
            </View>
        </View>
    )
}

export default HotelDetails

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    bacImg: {
        width: width,
        height: 200,
        alignSelf: 'center',
        paddingVertical: 50,
        paddingHorizontal: 20,

    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: '600'
    },
    price: {
        fontSize: 20,
        fontWeight: '600',
        top: 10
    },
    perRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    per: {
        color: 'grey',
        fontSize: 12,
        marginTop: 5
    },
    summary: {
        fontSize: 14,
        color: 'grey',
        marginTop: 10,
        marginBottom: 5
    },
    line: {
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 10
    },
    card: {
        width: 360,
        alignSelf: 'center',
        height: 200,
        backgroundColor: 'white',
        shadowOpacity: 0.1,
        shadowOffset: { height: 1, width: 1 },
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20,
        marginBottom: 15
    },
    overview: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    no: {
        fontSize: 40,
        fontWeight: '700',
        color: 'blue'
    },
    star: {
        flexDirection: 'row',
        alignItems: 'center',


    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 10,
    },
    border: {
        borderBottomWidth: 4,
        borderColor: 'blue',
        width: 270,
        paddingVertical: 5,
    },
    service: {
        borderBottomWidth: 4,
        borderColor: 'blue',
        width: 220,
        paddingVertical: 5,
    },
    locat: {
        borderBottomWidth: 4,
        borderColor: 'blue',
        width: 200,
        paddingVertical: 5,
    },
    ppt: {
        borderBottomWidth: 4,
        borderColor: 'blue',
        width: 150,
        paddingVertical: 5,
    },
    pro: {
        width: 35,
        height: 35
    },
    reviewBox: {
        flexDirection: 'row',
      justifyContent:'space-between'
    },
    revierName: {
        fontSize: 16,
        fontWeight: '600',
       right:30
     
    },
    updated:{
     fontSize:12,
      color:'grey',
      right:30
    }
})