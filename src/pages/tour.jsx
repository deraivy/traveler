import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


const Tour = () => {
    const navigation = useNavigation();
    return ( 
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Tour</Text>
                    <FontAwesome name="bell-o" size={20} color="black" />
                </View>
                <View style={styles.card}>
                    <TouchableOpacity style={styles.bookmark}>
                        <Feather name="bookmark" size={24} color="black" />
                    </TouchableOpacity>
                    <Image style={styles.img} source={require('../../assets/madimg.jpeg')} />

                    <View style={styles.countryRow}>
                        <Text style={styles.country}>Accra, Ghana</Text>
                        <Text style={styles.days}>5 DAYS</Text>
                       <View style={styles.priceRow}>
                       <TouchableOpacity style={styles.book} onPress={() => navigation.navigate('Tourdetts')}>
                            <Text style={styles.now}>Book Now</Text>
                        </TouchableOpacity>
                        <Text style={styles.price}>$100</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.bookmark}>
                        <Feather name="bookmark" size={24} color="black" />
                    </View>
                    <Image style={styles.img} source={require('../../assets/madimg.jpeg')} />

                    <View style={styles.countryRow}>
                        <Text style={styles.country}>Accra, Ghana</Text>
                        <Text style={styles.days}>5 DAYS</Text>
                       <View style={styles.priceRow}>
                       <TouchableOpacity style={styles.book} onPress={() => navigation.navigate('Tourdetts')}>
                            <Text style={styles.now}>Book Now</Text>
                        </TouchableOpacity>
                        <Text style={styles.price}>$100</Text>
                        </View>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Tour

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        flex: 1,
        fontWeight: '700'
    },
    card: {
        width: 350,
        height: 300,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowOpacity: 0.5,
        marginBottom:20
    },
    img: {
        width: 350,
        height: 200,
        alignSelf: 'center',
        overflow: 'hidden',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    bookmark: {
        width: 30,
        height: 30,
        backgroundColor: 'white',
        zIndex: 1,
        marginTop: 181,
        position: 'absolute',
        marginLeft: 310,
        borderRadius: 30,
        padding: 2,
        alignItems: 'center',
        shadowOpacity: 1,
        shadowOffset: { height: 1, width: 1 }
    },
    countryRow: {
        // flexDirection:'row',
        marginTop: 15,
        paddingHorizontal: 10,
        // justifyContent:'space-between'
    },
    country: {
        fontSize: 18,
        fontWeight: '700',
    marginBottom:5
    },
price:{
    textAlign:'right',
    fontSize: 18,
    fontWeight: '700'
   
},
book:{
    width:70,
    height:30,
    backgroundColor:'#1d5aff',
    borderRadius:5
    
},
priceRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
},
now:{
    color:'white',
    fontWeight:'500',
    textAlign:'center',
    marginTop:5
},
    days: {
        fontSize:12,
        color:'grey',
        marginBottom:5
    },
})