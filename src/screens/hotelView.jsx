import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native'
const width = Dimensions.get('window').width


const HotelView = () => {
    const navigation = useNavigation();
    const carouselData = [
        { id: '01', description: 'hello babes', des: 'hello babes', image: require('../../assets/miraclegarden.jpeg') },
        { id: '02', description: 'hello babes', des: 'hello babes', image: require('../../assets/tokyo.jpeg') },
        { id: '03', description: 'hello babes', des: 'hello babes', image: require('../../assets/greece.jpeg') },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const renderItem = ({ item }) => (
        <View style={styles.carouselItem}>
            <Image source={item.image} style={styles.carouselImage} resizeMode="cover" />
        </View>
    );

    return (
        <SafeAreaView>
            <ScrollView>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>

                <Text style={styles.title}>Grande Royal Hotel</Text>

                <Entypo name="heart-outlined" size={24} color="black" />


            </View>
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

            <View style={styles.container}>
                <View style={styles.nameRow}>
                    <Text style={styles.name}>Deluxe Room</Text>
                    <TouchableOpacity style={styles.book} onPress={() => navigation.navigate('HotelDetails')}>
                        <Text style={styles.now}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.per}>
                    <Text style={styles.price}>$100</Text>
                    <Text style={styles.night}>/night</Text>
                </View>
                <Text style={styles.sleep}>Sleeps 3 People</Text>
            </View>

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

            <View style={styles.container}>

                <View style={styles.nameRow}>
                    <TouchableOpacity onPress={() => navigation.navigate('HotelDetails')}>
                        <Text style={styles.name}>Premium Room</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.book} onPress={() => navigation.navigate('HotelDetails')}>
                        <Text style={styles.now}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.per}>
                    <TouchableOpacity onPress={() => navigation.navigate('HotelDetails')}>
                        <Text style={styles.price}>$140</Text>
                    </TouchableOpacity>
                    <Text style={styles.night}>/night</Text>
                </View>
                <Text style={styles.sleep}>Sleeps 3 People + 2 children</Text>
            </View>

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

            <View style={styles.container}>

                <View style={styles.nameRow}>
                    <TouchableOpacity onPress={() => navigation.navigate('HotelDetails')}>
                        <Text style={styles.name}>Executive Room</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.book} onPress={() => navigation.navigate('HotelDetails')}>
                        <Text style={styles.now}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.per}>
                    <TouchableOpacity onPress={() => navigation.navigate('HotelDetails')}>
                        <Text style={styles.price}>$200</Text>
                    </TouchableOpacity>
                    <Text style={styles.night}>/night</Text>
                </View>
                <Text style={styles.sleep}>Sleeps 3 People + 3 children</Text>
            </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default HotelView

const styles = StyleSheet.create({
    carouselBox: {
        position: 'relative',

    },
    carouselItem: {
        width: width,
        height: 200,
        marginTop: 10
    },
    carouselImage: {
        width: '100%',
        height: '100%',
    },

    paginationContainer: {
        position: 'absolute',
        bottom: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#1d5aff',
        marginHorizontal: 5,
    },
    inactiveDotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        marginHorizontal: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    container: {
        paddingHorizontal: 20,
        marginTop: 10
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600'
    },

    base: {
        paddingBottom: 10
    },
    nameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    book: {
        width: 80,
        height: 40,
        backgroundColor: '#1d5aff',
        borderRadius: 10,
        marginTop: 10
    },
    now: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 10
    },
    price: {
        fontSize: 20,
        fontWeight: '700',

    },
    per: {
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 25
    },
    night: {
        top: 2,
        color: 'grey'
    },
    sleep: {
        marginTop: -20,
        color: 'grey'
    }
})