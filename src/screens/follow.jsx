import {Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'


const Follow = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
            <View style={styles.header}>
                <Text>step 2/2</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('BottomNav')}>
                    <Text>Skip</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.step}>Follow travel lovers{'\n'}who have intrest like you</Text>
            <View style={styles.root}>
                <Image style={styles.pro} source={require('../../assets/Profile01.png')} />
                <Text>Bella Chang</Text>
                <View style={styles.followBox}>
                    <Text style={styles.follow}>Follow</Text>
                </View>

            </View>
            <View style={styles.root}>
                <Image style={styles.pro} source={require('../../assets/Profile01.png')} />
                <Text>Bella Chang</Text>
                <View style={styles.followBox}>
                    <Text style={styles.follow}>Follow</Text>
                </View>

            </View>
            <View style={styles.root}>
                <Image style={styles.pro} source={require('../../assets/Profile01.png')} />
                <Text>Bella Chang</Text>
                <View style={styles.followBox}>
                    <Text style={styles.follow}>Follow</Text>
                </View>

            </View>
            <View style={styles.root}>
                <Image style={styles.pro} source={require('../../assets/Profile01.png')} />
                <Text>Bella Chang</Text>
                <View style={styles.followBox}>
                    <Text style={styles.follow}>Follow</Text>
                </View>

            </View>
            <View  style={styles.signContainer}>
            <TouchableOpacity style={styles.sign} onPress={() => navigation.navigate('BottomNav')}>
                <Text style={styles.signText}>Next</Text>
            </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
    )
}

export default Follow

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
        marginTop: 10,
        fontSize: 18,
        fontWeight: '500',
    },
    select: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 20,
        color: 'grey',
    },
    root:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:10
    },
    followBox:{
        borderWidth:1,
        borderColor:'black',
        width:80,
        height:25,
        borderRadius:5
    },
    follow:{
        textAlign:'center',
        padding:3
    },
    signContainer:{
        flex:1,
        justifyContent:'flex-end',
    },
    sign:{
       
        width: 350,
        height: 50,
        backgroundColor: '#0137cf',
        marginTop: 25,
        alignSelf: 'center',
        borderRadius:10
    },
    signText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 18,

    },
})