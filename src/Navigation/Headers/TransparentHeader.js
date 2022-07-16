import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Arrow_right, Arrow_right_Simple } from '../../Constants/SvgLocations'
import { actuatedNormalize, actuatedNormalizeVertical } from '../../Constants/PixelScaling'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Fonts from '../../Constants/Fonts'
import PngLocations from '../../Constants/PngLocations'
import { useNavigation } from '@react-navigation/native'

const TransparentHeader = (props) => {
    const navigation = useNavigation()
  return (
    <View style={{
        flexDirection:'row',
        paddingTop: actuatedNormalizeVertical(18) + getStatusBarHeight(),
        paddingBottom: actuatedNormalizeVertical(18),
        paddingHorizontal: actuatedNormalize(27),
        width:'100%',
        backgroundColor:'#E8F3DD'
    }}>
        <StatusBar translucent={true} barStyle="dark-content" backgroundColor={'#E8F3DD'}/>
        <View style={{flex:1, justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image
                    source={PngLocations.BackArrow}
                    style={{
                        height:actuatedNormalize(30),
                        width:actuatedNormalize(30)
                    }}
                />
            </TouchableOpacity>
            {/* <Arrow_right_Simple height={actuatedNormalize(40)} width={actuatedNormalize(40)} /> */}
            {/* <Arrow_right height={actuatedNormalize(40)} width={actuatedNormalize(40)} /> */}
        </View>
        <View style={{flex:5, alignItems:'center'}}>
            <Text style={{
                fontSize:actuatedNormalize(30),
                fontFamily:Fonts.Bold,
                color:'#000000'
            }}>{props.title}</Text>
        </View>
        <View style={{flex:1}}>

        </View>
    </View>
  )
}

export default TransparentHeader