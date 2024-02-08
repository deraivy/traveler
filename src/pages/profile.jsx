import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo, AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import Svg, { Polygon } from 'react-native-svg';


const width = Dimensions.get('window').width

const Profile = () => {
    const navigation = useNavigation();

    const photo = [
        { id: 1, img: require('../../assets/tokyo.jpeg') },
        { id: 2, img: require('../../assets/tokyo.jpeg') },
        { id: 3, img: require('../../assets/tokyo.jpeg') },
        { id: 4, img: require('../../assets/tokyo.jpeg') },
        { id: 5, img: require('../../assets/tokyo.jpeg') },
        { id: 6, img: require('../../assets/tokyo.jpeg') }
    ]

    const photos = [];
    for (let i = 0; i < photo.length; i += 3) {
        photos.push(photo.slice(i, i + 3));
    }
    const hexagonPoints = "50,10 75,25 75,50 50,70 25,50 25,25";
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Entypo style={styles.menu} name="menu" size={25} color="white" />
                </TouchableOpacity>
                <Image source={require('../../assets/lamp.jpeg')} style={styles.bacImg} />

                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <View style={styles.borderProfile}>
                            <Image style={styles.pro} source={require('../../assets/Profile02.png')} />
                        </View>
                        <View style={styles.follow}>
                            <View>
                                <Text style={styles.followNum}>245</Text>
                                <Text style={styles.teext}>Followers</Text>
                            </View>
                            <View>
                                <Text style={styles.followNum}>245</Text>
                                <Text style={styles.teext}>Following</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.name}>ChiChi♥️</Text>
                        <Text style={styles.user}>bigchi</Text>
                        <View style={styles.main}>
                            <TouchableOpacity style={styles.box}>
                                <AntDesign style={styles.icon} name="adduser" size={24} color="black" />
                                <Text style={styles.edit}>Add Friends</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('EditProfile')}>
                                <MaterialCommunityIcons style={styles.icon} name="pencil-outline" size={24} color="black" />
                                <Text style={styles.edit}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.carrds}>
                        <View style={styles.ok}>
                            <Text style={styles.about}>About Me</Text>
                            <Text style={styles.details}>Im Chi a software developer that does not
                                like to show her work but wants to start</Text>
                        </View>
                        <View style={styles.hexagonContainer}>
                            <Svg height="60" width="60" viewBox="0 0 100 100">
                                <Polygon
                                    points={hexagonPoints}
                                    fill="transparent"
                                    stroke="white"
                                    strokeWidth="2"
                                />

                            </Svg>

                        </View>
                        <View yearbase>
                            <Text style={styles.title}>Traveler member since</Text>
                            <Text style={styles.year}>Jan 4, 2024</Text>
                        </View>
                    </View>
                </View>

                {photos.map((pair, index) => (
                    <View key={index} style={styles.photoRow}>
                        {pair.map((item, itemIndex) => (
                            <Image key={itemIndex} style={styles.photo} source={item.img} />
                        ))}
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f1f3f4'
    },

    scroll: {
        bottom: 23
    },
    bacImg: {
        width: width,
        height: 180,
        alignSelf: 'center',
        paddingVertical: 50,
        paddingHorizontal: 20,
       

    },
    menu: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 1
    },
    body: {
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    bodyContent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    borderProfile: {
        borderWidth: 6,
        borderColor: '#f2f2f2',
        borderRadius: 100,
        top: -35,
    },
    pro: {
        top: -1,
        width: 85,
        height: 85
    },
    follow: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        top: -15
    },
    followNum: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600'
    },
    teext: {
        fontSize: 14
    },
    card: {
        width: 370,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 20,
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        shadowOpacity: 0.4,
        shadowOffset: { height: 1, width: 0 }
    },
    name: {
        fontSize: 22,
        color: 'black',
    },
    user: {
        fontSize: 18,
        color: 'black',
    },
    main: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    box: {
        width: 150,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowOpacity: 0.4,
        shadowOffset: { height: 1, width: 0 }

    },
    edit: {
        color: 'black',
        fontSize: 18,
        marginTop: 8,
    },
    icon: {
        padding: 8,

    },
    carrds: {
        width: 370,
        height: 200,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignSelf: 'center',
        shadowOpacity: 0.4,
        shadowOffset: { height: 1, width: 0 }
    },
    title: {
        color: 'black',

    },

    year: {
        color: 'black',

        marginTop: 5
    },
    about: {
        color: 'black',

    },

    hexagonContainer: {

    },
    svgi: {
        padding: 6
    },
    details: {
        color: 'black',
        marginTop: 5,

    },
    photoRow: {
        flexDirection: 'row',
        gap: 3,
        alignSelf: 'center'
    },
    photo: {
        width: 125,
        height: 130,
        borderRadius: 5,
    },
    mapContainer: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        height: 150
    },
})