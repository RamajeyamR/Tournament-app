import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { actuatedNormalize } from '../../Constants/PixelScaling'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Fonts from '../../Constants/Fonts'
import Input from '../../Commons/Input'
import { Arrow_back_color, Arrow_right_Simple } from '../../Constants/SvgLocations'
import PngLocations from '../../Constants/PngLocations'
import { useNavigation } from '@react-navigation/native'

const OtpScreen = () => {
    const navigation = useNavigation()
  return (
    <View style={{
        flex:1,
        backgroundColor:'#000066'
    }}>
        <StatusBar translucent={true} barStyle="dark-content" backgroundColor={'#000066'}/>
        <View style={{
            // height: 30
            transform : [{ scaleX : -1}],
            height: actuatedNormalize(50),
            width: actuatedNormalize(50),
            marginTop:actuatedNormalize(30+getStatusBarHeight()),
            marginLeft:actuatedNormalize(20)
        }}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Arrow_back_color  />
            </TouchableOpacity>
        </View>
        <View style={{
            flex:1,
            backgroundColor:'#FFFFFF',
            marginTop:actuatedNormalize(90),
            borderTopLeftRadius:actuatedNormalize(30),
            borderTopRightRadius:actuatedNormalize(30),
            paddingTop:actuatedNormalize(30),
        }}>
            <View style={{alignItems:'center',marginTop:actuatedNormalize(50)}}>
            <Text style={{
                fontFamily:Fonts.Bold,
                fontSize:actuatedNormalize(25),
                color:'#000000'
            }}>Enter OTP</Text>
            <Text style={{
                fontFamily:Fonts.Light,
                color:'#000000'
            }}>We have sent an OTP on your number</Text>
            <Text style={{
                fontFamily:Fonts.SemiBold,
                fontSize:actuatedNormalize(15),
                color:'#000000',
                marginTop:actuatedNormalize(10)
            }}>+91 - 7010963625</Text>
            <Text style={{
                fontFamily:Fonts.Light,
                color:'#000000',
                marginTop:actuatedNormalize(20)
            }}>Enter the OTP you recieved</Text>

            <View style={{
                width:'60%',
                marginTop:actuatedNormalize(20),
                height:actuatedNormalize(50)
            }}>
                <Input
                    textContainerStyle={{
                        borderRadius:actuatedNormalize(50),
                        borderColor:'#cccccc',
                        borderWidth:actuatedNormalize(4),
                        elevation:0,
                        height:actuatedNormalize(50),
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                    inputTextStyle={{
                        fontSize:actuatedNormalize(18),
                        justifyContent:'center'
                    }}
                    placeholder={'Enter OTP'}
                    keyboardType={'numeric'}
                />
            </View>
            <Text style={{
                marginTop:actuatedNormalize(20),
                fontFamily:Fonts.Light,
                color:'#000000',

            }}>Didn't recieve the OTP?</Text>
            <TouchableOpacity>
                <Text style={{
                    fontFamily:Fonts.Bold,
                    fontSize:actuatedNormalize(15),
                    color:'#ff3300',
                    textDecorationLine:'underline',
                    marginTop:actuatedNormalize(20)
                }}>Resend OTP</Text>
            </TouchableOpacity>
            </View>
        </View>

    </View>
  )
}

export default OtpScreen

const styles = StyleSheet.create({})