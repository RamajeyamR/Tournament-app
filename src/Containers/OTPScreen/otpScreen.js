import { Image, KeyboardAvoidingView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { actuatedNormalize } from '../../Constants/PixelScaling'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Fonts from '../../Constants/Fonts'
import Input from '../../Commons/Input'
import { Arrow_back_color, Arrow_right, Arrow_right_Simple } from '../../Constants/SvgLocations'
import PngLocations from '../../Constants/PngLocations'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { updateOtp } from '../../Redux/Reducers/LoginReducer'
import Validate from '../../Commons/Validations/Validate'

const OtpScreen = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const OTP = useSelector((state)=>state.login.otp)
    const number = props.route.params.number
    // console.log('number==>',number)
    useEffect(() => {
        if(OTP.value.length === 6){
            navigation.navigate('Dashboard')
            navigation.reset({
                index: 0,
                routes: [{ name: 'Dashboard'}],
                
            });
        }
    })

    const HandleChange = (value) => {
        dispatch(updateOtp({ field : 'value' , value : value }))
        dispatch(updateOtp({ field : 'touched' , value : true }))
        let ValidationResult = Validate(value, OTP.validationRules)
        dispatch(updateOtp({ field : 'valid' , value : ValidationResult.valid }))

        if (!ValidationResult.valid) {
        dispatch(updateOtp({ field : 'errorMsg' , value : ValidationResult.errorMsg }))
        } else {
            dispatch(updateOtp({ field : 'errorMsg' , value : '' }))
        }
    }

  return (
    <View style={styles.root}>
        <StatusBar translucent={true} barStyle="dark-content" backgroundColor={'#000066'}/>
        <View style={styles.backgroundView}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Arrow_back_color fill={'#FFFFFF'} />
                {/* <Arrow_right fill={'#FFFFFF'}/> */}
            </TouchableOpacity>
        </View>
        <KeyboardAvoidingView>
            <View style={styles.foregroundView}>
                <View style={styles.ContentView}>
                    <Text style={styles.Heading}>Enter OTP</Text>
                    <Text style={styles.Subheading}>We have sent an OTP on your number</Text>
                    <Text style={styles.number}>+91 - {number}</Text>
                    <Text style={styles.info}>Enter the OTP you recieved</Text>

                    <View style={styles.inputContainer}>
                        <Input
                            textContainerStyle={styles.input}
                            inputTextStyle={styles.inputText}
                            placeholder={'Enter OTP'}
                            keyboardType={'number-pad'}
                            onChangeText={(text)=>HandleChange(text)}
                            value={OTP.value}
                            Touched={OTP.touched}
                            maxLength={6}
                            autoFocus={true}
                        />
                    </View>
                    <Text style={styles.HelpText}>Didn't recieve the OTP?</Text>
                    <TouchableOpacity>
                        <Text style={styles.ResentOtp}>Resend OTP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>

    </View>
  )
}

export default OtpScreen

const styles = StyleSheet.create({
    root: {
        flex:1,
        backgroundColor:'#000066'
    },
    backgroundView: {
        transform : [{ scaleX : -1}],
        height: actuatedNormalize(50),
        width: actuatedNormalize(50),
        marginTop:actuatedNormalize(30+getStatusBarHeight()),
        marginLeft:actuatedNormalize(20)
    },
    foregroundView : {
        flex:1,
        backgroundColor:'#FFFFFF',
        marginTop:actuatedNormalize(90),
        borderTopLeftRadius:actuatedNormalize(30),
        borderTopRightRadius:actuatedNormalize(30),
        paddingTop:actuatedNormalize(30),
    },
    ContentView : {
        alignItems:'center',
        marginTop:actuatedNormalize(50)
    },
    Heading : {
        fontFamily:Fonts.Bold,
        fontSize:actuatedNormalize(25),
        color:'#000000'
    },
    Subheading : {
        fontFamily:Fonts.Light,
        color:'#000000'
    },
    number : {
        fontFamily:Fonts.SemiBold,
        fontSize:actuatedNormalize(15),
        color:'#000000',
        marginTop:actuatedNormalize(10)
    },
    info : {
        fontFamily:Fonts.Light,
        color:'#000000',
        marginTop:actuatedNormalize(20)
    },
    inputContainer : {
        width:'60%',
        marginTop:actuatedNormalize(20),
        height:actuatedNormalize(50)
    },
    input : {
        borderRadius:actuatedNormalize(50),
        borderColor:'#cccccc',
        borderWidth:actuatedNormalize(4),
        elevation:0,
        height:actuatedNormalize(50),
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    inputText : {
        fontSize:actuatedNormalize(18),
        justifyContent:'center'
    },
    HelpText : {
        marginTop:actuatedNormalize(20),
        fontFamily:Fonts.Light,
        color:'#000000',
    },
    ResentOtp : {
        fontFamily:Fonts.Bold,
        fontSize:actuatedNormalize(15),
        color:'#ff3300',
        textDecorationLine:'underline',
        marginTop:actuatedNormalize(20)
    }
})