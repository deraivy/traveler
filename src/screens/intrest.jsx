import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native';


const Interest = () => {
    const navigation = useNavigation();
    const pic = [
        { id: 1, name: 'Nature', image: require('../../assets/tower.jpeg') },
        { id: 2, name: 'Nature', image: require('../../assets/tokyo.jpeg') },
        { id: 3, name: 'Nature', image: require('../../assets/maldives.jpeg') },
        { id: 4, name: 'Nature', image: require('../../assets/desert.jpeg') },
        { id: 5, name: 'Nature', image: require('../../assets/baca.jpeg') },
        { id: 6, name: 'Nature', image: require('../../assets/beach.jpeg') },
        { id: 7, name: 'Nature', image: require('../../assets/jet.jpeg') },
        { id: 8, name: 'Nature', image: require('../../assets/circle.jpeg') },

    ];
    const pics = [];
    for (let i = 0; i < pic.length; i += 2) {
        pics.push(pic.slice(i, i + 2));
    }

    return (
        <SafeAreaView style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
            <View style={styles.header}>
                <Text>step 1/2</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('BottomNav')}>
                    <Text>Skip</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.step}>Hi <Text>Chi</Text>, what do you{'\n'}love most about travelling?</Text>
            <Text style={styles.select}>Select 3 or more interests</Text>

            {pics.map((picRow, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {picRow.map((item, colIndex) => (
                        <View key={colIndex} style={styles.item}>
                            <ImageBackground style={styles.img} source={item.image}>
                                <Text style={styles.text}>{item.name}</Text>
                                <View style={styles.circle} />
                            </ImageBackground>
                        </View>
                    ))}
                </View>
            ))}
          
            <View style={styles.signContainer}>
                <TouchableOpacity style={styles.sign} onPress={() => navigation.navigate('Follow')}>
                    <Text style={styles.signText}>Next</Text>
                </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        paddingHorizontal: 20,
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    step: {
        textAlign: 'center',
       
        fontSize: 18,
        fontWeight: '500',
    },
    select: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 20,
        color: 'grey',
    },
    row: {
        flexDirection: 'row',
        marginTop: 10,
        
    },
    item: {
        flex: 1,
        marginRight: 5,
    },
    img: {
        width: 170,
        height: 135,
        overflow: 'hidden',
        borderRadius: 10,

    },
    text: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        color: 'white', // Add text color
        padding: 10,
        fontSize:20
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth:1,
        position: 'absolute',
        right: 0,
        bottom:10,
        right:5
    },
    signContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    sign: {
        width: 350,
        height: 50,
        backgroundColor: '#0137cf',
        marginTop: 25,
        alignSelf: 'center',
        borderRadius: 10
    },
    signText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 6,
        fontSize: 18,

    }
});

export default Interest;
