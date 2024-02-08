import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const width = Dimensions.get('window').width

const Done = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.img} source={require('../../assets/tokyo.jpeg')}></ImageBackground>
            <View style={styles.body}>
                <Text style={styles.title}>Let us create your{"\n"} perfect trip!</Text>
                <Text style={styles.msg}>We will automatically include place and activites based on your intrest for your trip to jeju, south Korea. You can edit everything afterwards</Text>
                <TouchableOpacity style={styles.okBox} onPress={()=> navigation.navigate('Trips')}>
                    <Text style={styles.ok}>Ok</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Done

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor:'white',
        flex:1
    },
    img: {
        width: width,
        height: 200,
        alignSelf: 'center'
    },
    body:{
        backgroundColor:'white',
        height:300,
        width:250,
        alignSelf:'center',
        marginTop:100
    },
    title:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'600',
        marginTop:15
    },
    msg:{
        textAlign:'center',
        marginTop:15,
        paddingHorizontal:10
    },
    okBox: {
        width: 100,
        height: 40,
        backgroundColor: 'blue',
        alignSelf:'center',
        marginTop:20,
        borderRadius:5
    },
    ok:{
        color:'white',
        fontSize:16,
        fontWeight:'600',
        textAlign:'center',
        marginTop:10
    },
   
})