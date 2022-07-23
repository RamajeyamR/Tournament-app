import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Containers/Homepage/HomePage';
import { Text, View } from 'react-native';
import { AlarmTab_Icon, AlarmTab_Icon_Gold, Arrow_back_color, Arrow_right, GamepadTab_Icon, GamepadTab_Icon_Gold, ResultTab_Icon, ResultTab_Icon_Gold, ShareTab_Icon, ShareTab_Icon_Gold, UserTab_Icon, UserTab_Icon_Gold } from '../Constants/SvgLocations';
import { actuatedNormalize } from '../Constants/PixelScaling';
import Fonts from '../Constants/Fonts';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import EarnPage from '../Containers/Earn/EarnPage';
import OngoingPage from '../Containers/Ongoing/OngoingPage';
import PlayPage from '../Containers/Play/PlayPage';
import ResultPage from '../Containers/Result/ResultPage';
import ProfilePage from '../Containers/Profile/ProfilePage';
import TabHeader from './Headers/TabHeader';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    let size = 24
    let navigation = useNavigation()
    // console.log(navigation)
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
                headerShown : true,
                tabBarStyle : {
                    height : actuatedNormalize(60)
                },
                tabBarItemStyle : {
                    paddingTop :actuatedNormalize(10),
                    backgroundColor : 'black',
                    paddingBottom : actuatedNormalize(10)
                },
                tabBarIcon: ({ focused }) => {
                    if (route.name === 'EarnPage') {
                        return focused
                            ? <ShareTab_Icon_Gold  height={actuatedNormalize(size)} width={actuatedNormalize(size)} />
                            : <ShareTab_Icon  height={actuatedNormalize(size)} width={actuatedNormalize(size)} />;
                    }else if (route.name === 'OngoingPage') {
                        return focused
                            ? <AlarmTab_Icon_Gold  height={actuatedNormalize(size)} width={actuatedNormalize(size)} />
                            : <AlarmTab_Icon  height={actuatedNormalize(size)} width={actuatedNormalize(size)} />;
                    }else if (route.name === 'PlayPage') {
                        return focused
                            ? <GamepadTab_Icon_Gold  height={actuatedNormalize(size)} width={actuatedNormalize(size)} />
                            : <GamepadTab_Icon  height={actuatedNormalize(size)} width={actuatedNormalize(size)} />;
                    }else if (route.name === 'ResultPage') {
                        return focused
                            ? <ResultTab_Icon_Gold  height={actuatedNormalize(size)} width={actuatedNormalize(size)} />
                            : <ResultTab_Icon  height={actuatedNormalize(size)} width={actuatedNormalize(size)} />;
                    }else if (route.name === 'ProfilePage') {
                        return focused
                            ? <UserTab_Icon_Gold  height={actuatedNormalize(size-2)} width={actuatedNormalize(size-2)} />
                            : <UserTab_Icon  height={actuatedNormalize(size-2)} width={actuatedNormalize(size-2)} />;
                    }
                },
                header : () => <TabHeader/>
                
            })}
            initialRouteName='PlayPage'
            
        >
            <Tab.Screen 
                name="EarnPage" 
                component={EarnPage} 
                options={()=>({
                    tabBarLabel : 'Earn',
                    tabBarLabelStyle : { 
                        fontSize : actuatedNormalize(12),
                        fontFamily : Fonts.Medium,
                    },
                    tabBarIconStyle : {
                        padding : actuatedNormalize(5)
                    },
                    
                })}
            />

            <Tab.Screen 
                name="OngoingPage" 
                component={OngoingPage} 
                options={({route, })=>({
                    tabBarLabel : 'Ongoing',
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
                name="PlayPage" 
                component={PlayPage} 
                options={()=>({
                    tabBarLabel : 'Play',
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
                name="ResultPage" 
                component={ResultPage} 
                options={()=>({
                    tabBarLabel : 'Result',
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
                name="ProfilePage" 
                component={ProfilePage} 
                options={()=>({
                    tabBarLabel : 'Profile',
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