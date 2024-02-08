import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import OnboardingScreen from '../screens/onboardingScreen';
import Login from '../screens/login';
import Register from '../screens/register';
import BottomNav from './bottomNav';
import Interest from '../screens/intrest';
import Follow from '../screens/follow';
import Past from '../screens/past';
import Discover from '../screens/discover';
import Hotel from '../screens/hotel';
import HotelDetails from '../screens/hotelDetails';
import CreateTrip from '../screens/createTrip';
import EditProfile from '../screens/editProfile';
import Done from '../screens/done';
import Setting from '../screens/setting';
import About from '../screens/about';
import TripDetails from '../screens/tripDetails';
import Activity from '../screens/activity';
import HotelView from '../screens/hotelView';
import Tourdetts from '../screens/tourdetts';
import Invite from '../screens/invite';





const Auth = createStackNavigator();

const AuthNav = () => {
    return (
        <NavigationContainer>
            <Auth.Navigator>
                <Auth.Screen name='OnboardingScreen' component={OnboardingScreen} options={{ headerShown: false }} />
                <Auth.Screen name='Register' component={Register} options={{ headerShown: false }} />
                <Auth.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Auth.Screen name='Intrest' component={Interest} options={{ headerShown: false }} />
                <Auth.Screen name='Follow' component={Follow} options={{ headerShown: false }} />
                <Auth.Screen name='BottomNav' component={BottomNav} options={{ headerShown: false }} />
                <Auth.Screen name='Past' component={Past} options={{ headerShown: false }} />
                <Auth.Screen name='Discover' component={Discover} options={{ headerShown: false }} />
                <Auth.Screen name='Hotel' component={Hotel} options={{ headerShown: false }} />
                <Auth.Screen name='HotelDetails' component={HotelDetails} options={{ headerShown: false }} />
                <Auth.Screen name='CreateTrip' component={CreateTrip} options={{ headerShown: false }} />
                <Auth.Screen name='About' component={About} options={{ headerShown: false }} />
                <Auth.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }} />
                <Auth.Screen name='Done' component={Done} options={{ headerShown: false }} />
                <Auth.Screen name='Setting' component={Setting} options={{ headerShown: false }} />
                <Auth.Screen name='TripDetails' component={TripDetails} options={{ headerShown: false }} />
                <Auth.Screen name='Activity' component={Activity} options={{ headerShown: false }} />
                <Auth.Screen name='Tourdetts' component={Tourdetts} options={{ headerShown: false }} />
                <Auth.Screen name='HotelView' component={HotelView} options={{ headerShown: false }} />
                <Auth.Screen name='Invite' component={Invite} options={{ headerShown: false }} />

            </Auth.Navigator>

        </NavigationContainer>
    )
}

export default AuthNav

const styles = StyleSheet.create({})