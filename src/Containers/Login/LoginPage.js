import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {actuatedNormalize} from '../../Constants/PixelScaling';
import Fonts from '../../Constants/Fonts';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import { FacebookIcon, GoogleIcon} from '../../Constants/SvgLocations';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../Commons/Input';
import { updateLoginMobile } from '../../Redux/Reducers/LoginReducer';
import Validate from '../../Commons/Validations/Validate';
import { setCurrentUser } from '../../Redux/Reducers/UserProfileReducer';



const LoginPage = () => {

  const navigation = useNavigation()
  const dispatch = useDispatch()
  const mobile = useSelector((state)=>state.login.mobile)
  const users = useSelector((state)=>state.users.user)

  const handleChange = (name , value) => {

    dispatch(updateLoginMobile({ field : 'value' , value : value }))
    dispatch(updateLoginMobile({ field : 'touched' , value : true }))
    let ValidationResult = Validate(value, mobile.validationRules)
    dispatch(updateLoginMobile({ field : 'valid' , value : ValidationResult.valid }))

    if (!ValidationResult.valid) {
      dispatch(updateLoginMobile({ field : 'errorMsg' , value : ValidationResult.errorMsg }))
    } else {
        dispatch(updateLoginMobile({ field : 'errorMsg' , value : '' }))
      }
  }

  const handleSubmit = () => {

    let ValidationResult = Validate(mobile.value, mobile.validationRules)
    dispatch(updateLoginMobile({ field : 'valid' , value : ValidationResult.valid }))

    if (!ValidationResult.valid) {
      dispatch(updateLoginMobile({ field : 'errorMsg' , value : ValidationResult.errorMsg }))
    } else {
        dispatch(updateLoginMobile({ field : 'errorMsg' , value : '' }))
      }
    if (mobile.valid && mobile.errorMsg === ''){

      const temp = users.filter(user => user.mobile == mobile.value)
      if (temp.length === 0) {
        dispatch(updateLoginMobile({ field : 'errorMsg' , value : 'Mobile Did not match the record try Sign up' }))
      }
      else 
      {
        dispatch(setCurrentUser(temp))
        navigation.navigate('OtpScreen',{number: mobile.value})
      }
    }
    
  }

  return (
    <LinearGradient
      colors={['#E8F3DD', '#BCC5D2', '#C0AEC3']}
      style={{ flex: 1 }}>
      <StatusBar translucent={true} barStyle="dark-content" backgroundColor={'#E8F3DD'}/>
      <View style={{ flex: 1 }}>
        <View style={styles.headerView}>
          <Text style={styles.heading}>Hello Gamer!</Text>
          <Text style={styles.subheading}>Welcome back you've</Text>
          <Text style={styles.subheading}>been missed!</Text>
        </View>

        <View style={styles.signincontainer}>
          <Input
              placeholder={'Mobile'}
              errorMsg={mobile.errorMsg}
              value={mobile.value}
              Touched={mobile.touched}
              onChangeText={(text)=>handleChange("mobile",text)}
              maxLength={10}
              keyboardType={'number-pad'}
          />
            {/* <PassInput
              placeholder={'Password'}
              errorMsg={pass.errorMsg}
              value={pass.value}
              onChangeText={(text)=>dispatch(updatePassword(text))}
              isPasswordVisible={ViewPass}
              toogleVisible={()=>setViewPass(!ViewPass)}
            /> */}

          {/* <View style={styles.RecoveryPassContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate('ResetPassword')}>
              <Text style={styles.RecoveryText}>Recovery Password</Text>
            </TouchableOpacity>
          </View> */}

          <TouchableOpacity style={styles.SignInContainer} onPress={()=>handleSubmit()}>
              <Text style={styles.SignInText}>Continue</Text>
          </TouchableOpacity>

          <View style={{
            alignItems:'center',
            marginTop:actuatedNormalize(20),
          }}>
            <Text style={{fontFamily:Fonts.Regular}}>By Registering, I agree to Game Seeker's</Text>
            <View style={{
              flexDirection:'row',
              marginVertical:actuatedNormalize(10),
              marginHorizontal:actuatedNormalize(5)
            }}>
              <TouchableOpacity>
                <Text style={{fontFamily:Fonts.Bold}}>Terms and Conditions </Text> 
              </TouchableOpacity>
              <Text style={{fontFamily:Fonts.Regular}}> and </Text>
              <TouchableOpacity>
                <Text style={{fontFamily:Fonts.Bold}}> Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.SignUpContainer}>
            <Text style={{ fontFamily:Fonts.Medium }}>Dont't have an account?</Text>
            <TouchableOpacity style={{ marginLeft:actuatedNormalize(5) }} onPress={()=>navigation.navigate('RegisterPage')}> 
              <Text style={styles.SignUpText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.SocialLoginContainer}>
          <Text style={{ fontFamily:Fonts.Medium }}>Or sign In With :</Text>
          <View style={styles.SocialLoginIcons}>
            <TouchableOpacity>
              <GoogleIcon height={actuatedNormalize(48)} width={actuatedNormalize(48)}/>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft:actuatedNormalize(30) }}>
              <FacebookIcon height={actuatedNormalize(48)} width={actuatedNormalize(48)} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  headerView :{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: actuatedNormalize(40 + getStatusBarHeight()),
  },
  heading:{
    fontSize: actuatedNormalize(30),
    fontFamily: Fonts.Bold,
    color: '#000000',
  },
  subheading:{
    fontFamily: Fonts.Regular,
    fontSize: actuatedNormalize(20),
  },
  signincontainer : {
    marginTop: actuatedNormalize(50),
    width: '80%',
    alignSelf: 'center',
  },
  RecoveryPassContainer : {
    marginTop: actuatedNormalize(20),
    alignItems: 'flex-end',
    marginRight: actuatedNormalize(5),
  },
  RecoveryText : {
    fontFamily: Fonts.SemiBold,
    fontSize: actuatedNormalize(15),
  },
  SignInContainer : {
    backgroundColor: '#E86568',
    height: actuatedNormalize(65),
    borderRadius: actuatedNormalize(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: actuatedNormalize(25),
    elevation:actuatedNormalize(25),
  },
  SignInText : {
    color: '#FFFFFF',
    fontSize: actuatedNormalize(18),
    fontFamily: Fonts.SemiBold,
  },
  SignUpContainer: {
    marginTop:actuatedNormalize(20),
    flexDirection:'row'
  },
  SignUpText : {
    color:'#0066cc',
    fontFamily:Fonts.SemiBold,
  },
  SocialLoginContainer : {
    marginTop:actuatedNormalize(50),
    justifyContent:'center',
    alignItems:'center'
  },
  SocialLoginIcons : {
    flexDirection:'row',
    marginTop:actuatedNormalize(30),
    // elevation:actuatedNormalize(25),
  }
});
