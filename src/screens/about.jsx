import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, FontAwesome5, Octicons, AntDesign, FontAwesome, Entypo, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
const width = Dimensions.get('window').width

const About = () => {
    const navigation = useNavigation();

    const side = [
        {
            id: 1,
            name: 'teddy Bear Museum',
            detail: 'opening Hours 9am - 10pm',
            booked: '50 booked',
            img: require('../../assets/lamp.jpeg'),
            rate: '8.9'
        },
        {
            id: 2,
            name: 'Ice Cream Museum',
            detail: 'opening Hours 9am - 10pm',
            booked: '50 booked',
            img: require('../../assets/maldives.jpeg'),
            rate: '8.9'
        },
        {
            id: 3,
            name: 'Lekki Conservation Center',
            detail: 'opening Hours 9am - 10pm',
            booked: '50 booked',
            img: require('../../assets/meal.jpeg'),
            rate: '8.9'
        }
    ]

    const activity = [
        {
            id: 1,
            name: 'Hike snow mountain',
            event: 'opening Hours 9am - 10pm',
            img: require('../../assets/foood.jpeg'),
        },
        {
            id: 1,
            name: 'Hike snow mountain',
            event: 'opening Hours 9am - 10pm',
            img: require('../../assets/egypt.jpeg'),
        },
    ]

    const stay = [
        {
            id: 1,
            name: 'Ijeawele',
            type: 'HOTEL',
            location: 'Jeju',
            price: '400',
            img: require('../../assets/foood.jpeg'),
        },
        {
            id: 2,
            name: 'Sunny view',
            type: 'RESORT',
            location: 'Chad',
            price: '400',
            img: require('../../assets/egypt.jpeg'),
        },
    ]
    const carouselData = [
        { id: '01', image: require('../../assets/miraclegarden.jpeg'), icon: 'left' },
        { id: '02', image: require('../../assets/tokyo.jpeg'), icon: 'left' },
        { id: '03', image: require('../../assets/greece.jpeg'), icon: 'left' },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const renderItem = ({ item }) => (
        <View style={styles.carouselItem}>
            <Image source={item.image} style={styles.carouselImage} resizeMode="cover" />
            {item.icon && (
                <TouchableOpacity style={styles.icContainer} onPress={() => navigation.navigate('Home')}>
                    <AntDesign name={item.icon} size={20} color="white" />
                </TouchableOpacity>
            )}
        </View>
    );

    return (
        <View>
            <ScrollView contentContainerStyle={styles.scrollContentContainer}>
                <Carousel
                    data={carouselData}
                    renderItem={renderItem}
                    sliderWidth={width}
                    itemWidth={width}
                    onSnapToItem={(index) => setActiveIndex(index)}
                    autoplay
                    autoplayInterval={3000}
                    loop={true}
                />
                <Pagination
                    dotsLength={carouselData.length}
                    activeDotIndex={activeIndex}
                    containerStyle={styles.paginationContainer}
                    dotStyle={styles.dotStyle}
                    inactiveDotStyle={styles.inactiveDotStyle}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
                <View style={styles.body}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>Jeju Island</Text>
                        <View style={styles.degree}>
                            <FontAwesome5 name="cloud-sun" size={24} color="black" />
                            <Text style={styles.num}>19</Text>
                        </View>

                    </View>
                    <View style={styles.locationBox}>
                        <Ionicons style={styles.icn} name="location-outline" size={24} color="black" />
                        <Text>South Korea</Text>
                    </View>
                    <View style={styles.aboutContainer}>
                        <Text style={styles.about} numberOfLines={3}>This is simply dummy text of the printing and type setting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                        </Text>
                    </View>

                    <Text style={styles.more}>View more</Text>

                    <View style={styles.row}>
                        <Text style={styles.for}>Side Attraction</Text>
                        <View style={styles.arrowRow}>
                            <Text style={styles.seeAll}>See All</Text>
                            <AntDesign name="right" size={12} color="black" />
                        </View>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollViewContainer}>
                        {side.map((item, value) => (
                            <View key={value} style={styles.box}>
                                <View style={styles.iconContainer}>
                                    <Feather style={styles.icon} name="heart" size={18} color="white" />
                                    <Text style={styles.rate}>{item.rate}</Text>
                                </View>
                                <Image style={styles.img} source={item.img} />

                                <Text style={styles.title}>{item.name}</Text>
                                <View style={styles.subRow}>
                                    <Text style={styles.subtitle}>{item.detail}</Text>
                                    <Text style={styles.booked}>{item.booked}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>

                    <View style={styles.row}>
                        <View>
                            <Text style={styles.for}>Activities</Text>
                            <Text style={styles.based}>Based on your intrest</Text>
                        </View>
                        <TouchableOpacity style={styles.arrowRow} onPress={() => navigation.navigate('Activity')}>
                            <Text style={styles.seeAll}>See All</Text>
                            <AntDesign name="right" size={12} color="black" />
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollViewContainer}>
                        {activity.map((data, index) => (
                            <View key={index} style={styles.boxTwo}>
                                <Image style={styles.imgTwo} source={data.img} />
                                <View style={styles.msg}>
                                    <Text style={styles.mini}>{data.name}</Text>
                                    <Text style={styles.bold}>{data.event}</Text>

                                </View>
                            </View>
                        ))}
                    </ScrollView>

                    <View style={styles.row}>
                        <Text style={styles.for}>Where To Stay</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Hotel')} style={styles.arrowRow}>
                            <Text style={styles.seeAll}>See All</Text>
                            <AntDesign name="right" size={12} color="black" />
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollViewContainer}>
                        {stay.map((bit, root) => (
                            <View key={root} style={styles.boxThree}>
                                <Feather style={styles.like} name="heart" size={18} color="white" />
                                <Image style={styles.imgThree} source={bit.img} />
                                <View style={styles.base}>
                                    <Text style={styles.txt}>{bit.type}</Text>
                                    <View style={styles.star}>
                                        <Entypo name="star" size={12} color="#fa8921" />
                                        <Entypo name="star" size={12} color="#fa8921" />
                                        <Entypo name="star" size={12} color="#fa8921" />
                                        <Entypo name="star" size={12} color="#fa8921" />
                                        <Entypo name="star" size={12} color="#fa8921" />
                                    </View>
                                </View>

                                <Text style={styles.place}>{bit.name}</Text>
                                <View style={styles.locationRow}>
                                    <View style={styles.locate}>
                                        <Entypo name="location-pin" size={16} color="#1d5aff" />
                                        <Text style={styles.state}>{bit.location}</Text>
                                    </View>
                                    <View style={styles.priceBox}>
                                        <Text style={styles.price}>${bit.price}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </ScrollView>

                    <View style={styles.signContainer}>
                        <TouchableOpacity style={styles.sign} onPress={() => navigation.navigate('CreateTrip')}>
                            <Text style={styles.signText}>Plan New Trip</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>


    )
}

export default About

const styles = StyleSheet.create({
    icContainer: {
        position: 'absolute',
        marginTop: 50,
        left: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 20,
        height: 32,
        width: 32,
        padding: 5
    },
    carouselBox: {
        position: 'relative',
    },
    carouselItem: {
        width: width,
        height: 500,
    },
    carouselImage: {
        width: '100%',
        height: '100%',
    },
    paginationContainer: {
        position: 'absolute',
        marginBottom: 50, // Adjust the distance from the bottom as needed
        alignSelf: 'center',
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    inactiveDotStyle: {
        width: 9,
        height: 9,
        borderRadius: 4,
        backgroundColor: 'gray',
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollContentContainer: {
        paddingBottom: 30,
    },
    bacImg: {
        width: width,
        height: 230,
        alignSelf: 'center',
        paddingVertical: 45,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subHeader: {
        flexDirection: 'row',
        gap: 10,
    },
    body: {
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        width: width,
        alignSelf: 'center',
        paddingHorizontal: 20,
        top: -20
    },
    nameContainer: {
        top: 10,
        marginTop: 20,

        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    name: {
        fontSize: 24,
        fontWeight: '600'
    },
    degree: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    num: {
        fontSize: 18
    },
    locationBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },

    icn: {
        marginLeft: -4
    },

    about: {
        color: '#6c6c6c',
        textAlign: 'left',
        lineHeight: 20,
        marginTop: 10, // Adjust as needed

    },
    more: {
        textAlign: 'center',
        color: '#1d5aff',
        marginTop: 10
    },

    box: {
        borderWidth: 1,
        height: 190,
        width: 270,
        borderRadius: 10,
        marginRight: 10,
        borderColor: '#0236cb',
        overflow: 'hidden'
    },
    iconContainer: {
        height: 30,
        width: 55,
        backgroundColor: '#ff8c21',
        position: 'absolute',
        zIndex: 1,
        left: 10,
        top: 10,
        borderRadius: 5,
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
    icon: {
        paddingLeft: 4
    },
    rate: {
        color: 'white'
    },
    img: {
        width: 272,
        height: 130,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,


    },
    title: {
        paddingHorizontal: 10,
        marginTop: 10,
        fontWeight: '700'
    },
    subRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },

    subtitle: {
        fontSize: 12,
        color: 'grey',

    },
    booked: {
        color: 'red',
        fontSize: 12
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
        marginTop: 20
    },
    for: {
        fontSize: 18,
        fontWeight: '700'
    },
    based: {
        fontSize: 12,
        color: 'grey',
        marginTop: 5
    },
    seeAll: {
        color: 'grey'
    },
    arrowRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxTwo: {
        marginRight: 10,
    },
    imgTwo: {
        width: 199,
        height: 180,
        borderRadius: 10
    },
    msg: {
        marginTop: 10
    },
    mini: {
        fontSize: 14,
        color: 'grey'
    },
    bold: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 5
    },

    boxThree: {
        marginRight: 10
    },
    imgThree: {
        width: 180,
        height: 200,
        borderRadius: 10
    },
    like: {
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
        top: 10
    },
    base: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    txt: {
        fontSize: 10,
        marginLeft: 5
    },
    star: {
        flexDirection: 'row'
    },

    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    locate: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    place: {
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 3
    },

    state: {
        color: '#0236cb'
    },

    priceBox: {
        borderWidth: 1,
        borderColor: 'grey',
        width: 50
    },
    price: {
        color: 'red',
        textAlign: 'center'
    },
    signContainer: {
        alignItems: 'center',
        marginTop: 20,

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
        marginTop: 10,
        fontSize: 18,

    }
})