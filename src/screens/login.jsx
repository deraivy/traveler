import { ImageBackground, Image, StyleSheet, Text, View, Dimensions, TextInput, TouchableHighlightComponent, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import BottomNav from '../authentication/bottomNav'
import { Entypo, AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width

const Login = () => {

    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('SignIn');

    const handleTabPress = (tab) => {
        setActiveTab(tab);
        // Use React Navigation to navigate to the selected tab
        if (tab === 'SignIn') {
            navigation.navigate('Login');
        } else if (tab === 'SignUp') {
            navigation.navigate('Register');
        }
    };
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.img} source={require('../../assets/tokyo.jpeg')}>
            <View style={styles.base}>
                    <TouchableOpacity onPress={() => handleTabPress('SignIn')}>
                        <Text style={[styles.text, activeTab === 'SignIn' && { color: '#0137cf' }]}>Sign In</Text>
                        {activeTab === 'SignIn' && <View style={[styles.line, { borderColor: '#0137cf' }]} />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTabPress('SignUp')}>
                        <Text style={[styles.text, activeTab === 'SignUp' && { color: '#0137cf' }]}>Sign up</Text>
                        {activeTab === 'SignUp' && <View style={[styles.line, { borderColor: '#0137cf' }]} />}
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={styles.new}>
                <View>
                    <Text style={styles.welcome}>Welcome back</Text>
                    <Text style={styles.name}>Mopnandi</Text>
                </View>
                <Image style={styles.pro} source={require('../../assets/Profile02.png')} />
            </View>
            <View style={styles.holder}>
                <Text style={styles.main}>Email</Text>
                <TextInput style={styles.input} placeholder='example@gmail.com' />
                <View style={styles.line2} />

                <Text style={styles.main}>Password</Text>
                <TextInput style={styles.input} placeholder='example@gmail.com' />
                <View style={styles.line2} />
            </View>

            <TouchableOpacity style={styles.forgot}>
                <Text>forgot password?</Text>
            </TouchableOpacity>

            <View style={styles.signBox}>
                <TouchableOpacity style={styles.sign} onPress={() => navigation.navigate('Intrest')}>
                    <Text style={styles.signText}>Sign In</Text>
                </TouchableOpacity>
                <AntDesign style={styles.iconn} name="scan1" size={40} color='#0137cf' />


            </View>

            <Text style={styles.or}>or sign in with</Text>
            <View style={styles.box}>
                <View style={styles.iconbox}>
                    <Image style={styles.icon} source={require('../../assets/googleii.jpeg')} />
                </View>
                <Entypo name="facebook" size={50} color="#2e50a5" />
                <View style={styles.iconbox}>
                    <AntDesign name="apple1" size={25} color="black" />
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    img: {
        width: width,
        height: 250,
        alignSelf: 'center'
    },
    base: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'space-between',
        alignItems: 'center', // Align items in the center vertically
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        bottom: -6
    },
    line: {
        borderBottomWidth: 2,
        borderColor: 'white',
        width: 100,
        marginTop: 5,
        alignContent: 'center',
        marginBottom: 3
    },
    new: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center'
    },
    welcome: {
        color: 'grey',

    },
    name: {
        fontSize: 24,
        fontWeight: '600'
    },

    holder: {
        marginTop: 30
    },
    input: {
        marginTop: 15
    },
    main: {
        marginTop: 30
    },
    line2: {
        borderBottomWidth: 1,

    },
    signBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconn: {
        marginTop: 20
    },
    sign: {
        width: 300,
        height: 50,
        backgroundColor: '#0137cf',
        marginTop: 25,
        borderRadius: 10

    },
    signText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 18,

    },
    forgot: {
        alignSelf: 'flex-end',
        marginTop: 10
    },
    or: {
        textAlign: 'center',
        marginTop: 20
    },
    box: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20,
        gap: 10
    },
    iconbox: {
        width: 50,
        height: 50,
        backgroundColor: '#E5E5E5',
        padding: 12,
        borderRadius: 5
    },
    icon: {
        width: 25,
        height: 32,
        borderRadius: 25,

    }
})