import * as React from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Ionicons from 'react-native-vector-icons/Ionicons'
import Header from './Header';
//screens
import HomeScreen from './screens/HomeScreen';
import Map from './screens/Map';
import Newsletter from './screens/Newsletter';
import AboutPage from './screens/AboutPage';
import ProfilePage from './screens/ProfilePage';
import { Dimensions } from 'react-native';

//screen names  
const homeName = 'Home';
const MapName = 'Map';
const NewsName = 'News';
const AboutName = 'About';
const ProfileName = 'Profile';

const Tab = createBottomTabNavigator();
 
export default function MainContainer() {
    return (
        <NavigationContainer>
        {/* <Header /> */}
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused,color, size}) => {
                    
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    else if (rn === MapName) {
                        iconName = focused ? 'location' : 'location-outline'
                    }
                    else if (rn === AboutName) {
                        iconName = focused ? 'information' : 'information-outline'
                    }
                    else if (rn === NewsName) {
                        iconName = focused ? 'newspaper' : 'newspaper-outline'
                    }
                    else if (rn === ProfileName) {
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                headerShown: false,
              
                "tabBarActiveTintColor": "tomato",
                "tabBarInactiveTintColor": "grey",
                // "tabBarInactiveBackgroundColor": "",
                // "tabBarActiveBackgroundColor": "",

                "tabBarLabelStyle": {
                    "paddingBottom": 10,
                    "fontSize": 10
                },
                "tabBarStyle": [
                    {
                    "display": "flex"
                    },
                    null
                ]
            })}
            
            >

                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={MapName} component={Map}/>
                <Tab.Screen name={AboutName} component={AboutPage}/>
                <Tab.Screen name={NewsName} component={Newsletter}/>
                <Tab.Screen name={ProfileName} component={ProfilePage}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}