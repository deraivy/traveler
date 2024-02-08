import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Entypo, AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const category = [
    { id: 1, name: 'Days Plan' },
    { id: 2, name: 'Reservation' },
    { id: 3, name: 'Budget' },
]

const TripDetails = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Trips')}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Trip Details Plan</Text>
                </View>
                <View style={styles.categoryRow}>
                    <View style={styles.category}>
                        <Text style={styles.txt}>Days Plan</Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.txt}>Reservation</Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.txt}>Budget</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.circle}>
                        <Text style={styles.sn}>1</Text>
                    </View>
                    <View style={styles.root}>
                        <Image style={styles.img} source={require('../../assets/madimg.jpeg')} />
                        <Text style={styles.dta}>Jeju Airport</Text>
                    </View>
                </View>
                <View style={styles.flow}>
                    <AntDesign name="clockcircleo" size={20} color="black" />
                    <Entypo name="hour-glass" size={20} color="black" />
                    <FontAwesome name="sticky-note-o" size={22} color="black" />
                    <FontAwesome name="dollar" size={22} color="black" />
                </View>
                <View style={styles.dashedLine}>
                    <View style={styles.gap}>
                        <AntDesign name="car" size={24} color="black" />
                        <Text>12km</Text>
                    </View>
                    <View style={styles.gap}>
                        <Entypo name="hour-glass" size={20} color="black" />
                        <Text>20mins</Text>
                    </View>
                    <View style={styles.gap}>
                        <FontAwesome name="dollar" size={22} color="black" />
                        <Text>20</Text>
                    </View>

                </View>

                <View style={styles.row}>
                    <View style={styles.circle}>
                        <Text style={styles.sn}>2</Text>
                    </View>
                    <View style={styles.root}>
                        <Image style={styles.img} source={require('../../assets/madimg.jpeg')} />
                        <Text style={styles.dta}>Jeju Airport</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.circle}>
                        <Text style={styles.sn}>3</Text>
                    </View>
                    <View style={styles.root}>
                        <Image style={styles.img} source={require('../../assets/madimg.jpeg')} />
                        <Text style={styles.dta}>Jeju Airport</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default TripDetails

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        flex: 1,
        textAlign: 'center'
    },
    category: {
        width: 100,
        height: 50,
        backgroundColor: '#1d5aff',
        marginTop: 25,
        borderRadius: 10
    },
    txt: {
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500'
    },
    categoryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    root: {
        width: 300,
        height: 120,
        backgroundColor: 'white',
        marginTop: 20,
        shadowOpacity: 0.5,
        shadowOffset: { height: 1, width: 1 },
        borderRadius: 10,
        flexDirection: 'row'
    },
    img: {
        width: 150,
        height: 120
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    circle: {
        backgroundColor: 'black',
        width: 20,
        height: 20,
        borderRadius: 30
    },
    sn: {
        color: 'white',
        textAlign: 'center',
        marginTop: 2
    },
    dta: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        flex: 1,
        marginTop: 40
    },
    flow: {
        flexDirection: 'row',
        marginTop: 15,
        alignSelf: 'flex-end',
        gap: 10
    },
    dashedLine: {
        height: 50,
        borderWidth: 1,
        borderStyle: 'dashed',
        marginTop: 10,
        marginBottom: 10,
        left: 50,
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    gap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    }
})