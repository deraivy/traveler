import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
const width = Dimensions.get('window').width

const Tourdetts = () => {
    const navigation = useNavigation();

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
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Tour')}>
                    <AntDesign name={item.icon} size={20} color="white" />
                </TouchableOpacity>
            )}
        </View>
    );
    return (
        <View>
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
                <View style={styles.row}>
                    <Text style={styles.title}>Accra</Text>
                    <View style={styles.box}>
                        <Text style={styles.rate}>4.5</Text>
                    </View>
                </View>
                <View style={styles.rowTwo}>
                    <EvilIcons style={styles.icon} name="location" size={24} color="black" />
                    <Text style={styles.city}>Ghana</Text>
                </View >
                <View style={styles.rowTwo}>
                    <FontAwesome5 name="map-pin" size={24} color="black" />
                    <Text> 15-18 FEB 2024</Text>
                </View>
                <View style={styles.borderRow}>
                    <View style={styles.line} />
                    <View style={styles.border}>
                        <Text style={styles.high}>HIGHLIGHTS</Text>
                        <View style={styles.join}>
                            <View style={styles.dot} />
                            <Text style={styles.text}>Stay in Hotels for Solos, Couples, Friends,{'\n'}and Family with Breakfast and Dinner</Text>
                        </View>

                        <View style={styles.join}>
                            <View style={styles.dot} />
                            <Text style={styles.text}>4 Nights and 5 Days</Text>
                        </View>
                        <View style={styles.join}>
                            <View style={styles.dot} />
                            <Text style={styles.text}>Leh Local Sightseeing</Text>
                        </View>
                        <View style={styles.join}>
                            <View style={styles.dot} />
                            <Text style={styles.text}>Sightseeing in Nubra
                                Valley and Pangong</Text>
                        </View>
                        <View style={styles.join}>
                            <View style={styles.dot} />
                            <Text style={styles.text}>4 Nights and 5 Days</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.signContainer}>
                    <TouchableOpacity style={styles.sign}>
                        <Text style={styles.signText}>Book Now</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View >
    )
}

export default Tourdetts

const styles = StyleSheet.create({

    iconContainer: {
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
        height: 400,
    },
    carouselImage: {
        width: '100%',
        height: '100%',
    },
    paginationContainer: {
        position: 'absolute',
        marginTop: 300, // Adjust the distance from the bottom as needed
        alignSelf: 'center',
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#f2f2f2',
    },
    inactiveDotStyle: {
        width: 9,
        height: 9,
        borderRadius: 4,
        backgroundColor: 'gray',
    },
    high: {
        marginTop: 10,
        left: 20,
        marginBottom: 10,
        fontSize: 18
    },
    body: {
        width: width,
        backgroundColor: '#f2f2f2',
        marginTop: -20,
        height: 100,
        alignSelf: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 25
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: '600'
    },
    box: {
        width: 50,
        height: 25,
        backgroundColor: 'grey',
        alignItems: 'center',
        borderRadius: 5
    },
    rate: {
        color: 'white',
        textAlign: 'center',
        top: 5,
        fontWeight: '700'
    },
    rowTwo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    city: {
        fontSize: 16,
        color: 'grey'
    },
    icon: {
        left: -5
    },
    borderRow: {
        flexDirection: 'row',
        marginTop: 25
    },
    border: {
        width: 350,
        height: 215,
        backgroundColor: 'white',
        flex: 1
    },
    line: {
        borderWidth: 2,
        borderColor: '#1554ff',
        height: 215,

    },
    join: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        backgroundColor: 'blue',
        borderRadius: 10,
        marginTop: 5,
        left: 5

    },
    text: {
        fontSize: 16,
        marginTop: 10,
        left: 10
    },
    signContainer: {
        marginTop: 20,
        justifyContent: 'flex-end',

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