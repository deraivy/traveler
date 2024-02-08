import { Dimensions, ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { AntDesign, FontAwesome5, Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native';
const width = Dimensions.get('window').width;

const CreateTrip = () => {
    const navigation = useNavigation();

    // to make the line change color when you are on it
    const [focusedInput, setFocusedInput] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const category = ['Solo', 'Party']

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.6}
                    style={styles.row} onPress={() => navigation.navigate('Trips')}>
                    <Ionicons name="chevron-back-sharp" size={24} color="black" />
                    <Text style={styles.title}>Create New Trips</Text>
                </TouchableOpacity>

                <View style={styles.body}>
                <View style={[styles.line, focusedInput === 'tripName' && styles.focusedLine]}>
                    <View style={styles.lineContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder='Trip name'
                            onFocus={() => setFocusedInput('tripName')}
                            onBlur={() => setFocusedInput(null)}
                        />
                    </View>
                </View>
                <View style={[styles.line, focusedInput === 'date' && styles.focusedLine]}>
                    <View style={styles.lineContainer}>
                        <FontAwesome5 style={styles.icon} name="calendar-alt" size={24} color="black" />
                        <TextInput
                            style={styles.input}
                            placeholder='8th April - 10th May'
                            onFocus={() => setFocusedInput('date')}
                            onBlur={() => setFocusedInput(null)}
                        />
                    </View>
                </View>

                <View style={[styles.line, focusedInput === 'budget' && styles.focusedLine]}>
                    <View style={styles.lineContainer}>
                        <AntDesign style={styles.icon} name="wallet" size={24} color="black" />
                        <TextInput
                            style={styles.input}
                            placeholder='Budget per day per person'
                            onFocus={() => setFocusedInput('budget')}
                            onBlur={() => setFocusedInput(null)}
                        />
                    </View>
                </View>

                <View style={[styles.line, focusedInput === 'interest' && styles.focusedLine]}>
                    <View style={styles.lineContainer}>
                        <FontAwesome5 style={styles.icon} name="heart" size={24} color="black" />
                        <TextInput
                            style={styles.input}
                            placeholder='Choose your interest'
                            onFocus={() => setFocusedInput('interest')}
                            onBlur={() => setFocusedInput(null)}
                        />
                    </View>
                </View>
            </View>
                <Text style={styles.msg}>Travel With?</Text>


                <View style={styles.boxContainer}>
                    {category.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.boxContainer,
                                selectedCategory === index && { backgroundColor: '#0137cf' }
                            ]}
                            onPress={() => setSelectedCategory(index)}
                        >
                            <View style={styles.box}>
                                <Text style={[styles.txt, selectedCategory === index && { color: 'white' }]}>
                                    {item}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                <Text style={styles.about}>Remember to consider factors such as the time of year, weather,
                    and any travel restrictions or advisories that may be in place.
                    Additionally, personal preferences play a significant role, so
                    choose a destination that aligns with your interests and travel style.</Text>
                <View style={styles.signContainer}>
                    <TouchableOpacity style={styles.sign} onPress={() => navigation.navigate('Invite')}>
                        <Text style={styles.signText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )
}

export default CreateTrip

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 21,
        fontWeight: '700',
        flex: 1,
        textAlign: 'center'
    },

    img: {
        width: width,
        height: 230,
        alignSelf: 'center',
        paddingHorizontal: 20
    },

    lineContainer: {
        flexDirection: 'row', // Arrange icon and text in a row
        paddingHorizontal: 10,
        alignItems: 'center',
        marginTop: 10

    },

    line: {
        borderWidth: 1,
        marginTop: 20,
        width: 350,
        alignSelf: 'center',
        borderColor: 'grey',
        height: 50,
        borderRadius: 10,


    },
    focusedLine: {
        borderColor: '#0137cf', // Change color when focused
    },
    input: {
        left: 15
    },
    msg: {
        marginTop: 20,
        paddingHorizontal: 15
    },

    boxContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    box: {
        width: 150,
        height: 40,
        borderWidth: 1,
        borderColor: '#0137cf',
    },
    txt: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16,
        fontWeight: '600',

    },
    signContainer: {
        top: 20
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

    },
    about: {
        marginTop: 20,
        color: 'grey',
        paddingHorizontal: 10,

    },
    video: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    }


})