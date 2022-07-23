import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Containers/Homepage/HomePage';
import { Text, View } from 'react-native';
import { AlarmTab_Icon, AlarmTab_Icon_Gold, Arrow_back_color, Arrow_right, GamepadTab_Icon, ResultTab_Icon, ShareTab_Icon, UserTab_Icon } from '../Constants/SvgLocations';
import { actuatedNormalize } from '../Constants/PixelScaling';
import Fonts from '../Constants/Fonts';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    let size = 24
    // let name  = (route) => {
    //     // If the focused route is not found, we need to assume it's the initial screen
    //     // This can happen during if there hasn't been any navigation inside the screen
    //     // In our case, it's "Feed" as that's the first screen inside the navigator
    //     const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomePage';
      
    //     switch (routeName) {
    //       case 'HomePage':
    //         return 'Home Page';
    //       case 'Profile':
    //         return 'My profile';
    //       case 'Account':
    //         return 'My account';
    //     }
    //   }
    //   name()
    //   console.log('route name ===>', name)
    return (
        <Tab.Navigator 
            screenOptions={({route})=>({
                tabBarActiveTintColor : '#ffaa00',
                tabBarInactiveTintColor: 'white',
                headerShown : false,
                tabBarStyle : {
                    height : actuatedNormalize(60)
                },
                tabBarItemStyle : {
                    paddingTop :actuatedNormalize(10),
                    backgroundColor : 'black',
                    paddingBottom : actuatedNormalize(10)
                }
                
                
            })}
            initialRouteName='HomePage2'
            
        >
            <Tab.Screen 
                name="HomePage" 
                component={HomePage} 
                options={()=>({
                    tabBarLabel : 'Earn',
                    tabBarIcon : ()=> <ShareTab_Icon height={actuatedNormalize(size)} width={actuatedNormalize(size)} />,
                    tabBarLabelStyle : { 
                        fontSize : actuatedNormalize(12),
                        fontFamily : Fonts.Medium,
                    },
                    tabBarIconStyle : {
                        padding : actuatedNormalize(5)
                    }
                })}
            />

            <Tab.Screen 
                name="HomePage1" 
                component={HomePage} 
                options={({route, })=>({
                    tabBarLabel : 'Ongoing',
                    tabBarIcon : ()=> route.name === 'HomePage1' ? <AlarmTab_Icon_Gold  height={actuatedNormalize(size)} width={actuatedNormalize(size)} /> : <AlarmTab_Icon  height={actuatedNormalize(size)} width={actuatedNormalize(size)} />,
                    tabBarLabelStyle : { 
                        fontSize : actuatedNormalize(12),
                        fontFamily : Fonts.Medium,
                    },
                    tabBarIconStyle : {
                        padding : actuatedNormalize(5)
                    }
                })}
            />

            <Tab.Screen 
                name="HomePage2" 
                component={HomePage} 
                options={()=>({
                    tabBarLabel : 'Play',
                    tabBarIcon : ()=> <GamepadTab_Icon height={actuatedNormalize(size)} width={actuatedNormalize(size)} />,
                    tabBarLabelStyle : { 
                        fontSize : actuatedNormalize(12),
                        fontFamily : Fonts.Medium,
                    },
                    tabBarIconStyle : {
                        padding : actuatedNormalize(5)
                    }
                })}
            />

            <Tab.Screen 
                name="HomePage3" 
                component={HomePage} 
                options={()=>({
                    tabBarLabel : 'Result',
                    tabBarIcon : ()=> <ResultTab_Icon height={actuatedNormalize(size)} width={actuatedNormalize(size)} />,
                    tabBarLabelStyle : { 
                        fontSize : actuatedNormalize(12),
                        fontFamily : Fonts.Medium,
                    },
                    tabBarIconStyle : {
                        padding : actuatedNormalize(5)
                    }
                })}
            />

            <Tab.Screen 
                name="HomePage4" 
                component={HomePage} 
                options={()=>({
                    tabBarLabel : 'Me',
                    tabBarIcon : ()=> <UserTab_Icon height={actuatedNormalize(size-2)} width={actuatedNormalize(size-2)} />,
                    tabBarLabelStyle : { 
                        fontSize : actuatedNormalize(12),
                        fontFamily : Fonts.Medium,
                    },
                    tabBarIconStyle : {
                        padding : actuatedNormalize(5)
                    }
                })}
            />
        </Tab.Navigator>
    );
  }