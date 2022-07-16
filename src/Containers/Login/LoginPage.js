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
import {Colors} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import {actuatedNormalize} from '../../Constants/PixelScaling';
import Fonts from '../../Constants/Fonts';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import { FacebookIcon, GoogleIcon, Password_Eye_Icon, Password_Eye_Icon_Strike } from '../../Constants/SvgLocations';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { updatePassword, updateUsername } from '../../Redux/Reducers/LoginReducer';



const LoginPage = () => {

  const navigation = useNavigation()
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.login.username)
  const pass = useSelector((state)=>state.login.password)
  const [ViewPass, setViewPass] = useState(false)

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
          <View style={styles.usernameinput}>
            <TextInput
              placeholder="Email"
              style={styles.InputText}
              value={user}
              onChangeText={(text)=>dispatch(updateUsername(text))}
            />
          </View>
          <View style={styles.PasswordInput}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!ViewPass}
              style={styles.InputText}
              value={pass}
              onChangeText={(text)=>dispatch(updatePassword(text))}
            />
            <TouchableOpacity onPress={()=>setViewPass(!ViewPass)}>
              {ViewPass ? 
                <Password_Eye_Icon height={actuatedNormalize(24)} width={actuatedNormalize(24)} /> 
                : <Password_Eye_Icon_Strike height={actuatedNormalize(24)} width={actuatedNormalize(24)} />}
              
            </TouchableOpacity>
          </View>

          <View style={styles.RecoveryPassContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate('ResetPassword')}>
              <Text style={styles.RecoveryText}>Recovery Password</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.SignInContainer} onPress={()=>navigation.navigate('Dashboard')}>
              <Text style={styles.SignInText}>Sign In</Text>
          </TouchableOpacity>

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
            <TouchableOpacity >
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
  usernameinput:{
    backgroundColor: '#FFFFFF',
    borderRadius: actuatedNormalize(10),
    height: actuatedNormalize(65),
    justifyContent: 'center',
    paddingLeft: actuatedNormalize(20),
  },
  InputText:{
    fontSize: actuatedNormalize(16),
    fontFamily: Fonts.Medium,
    width:'90%'
  },
  PasswordInput:{
    backgroundColor: '#FFFFFF',
    borderRadius: actuatedNormalize(10),
    height: actuatedNormalize(65),
    marginTop: actuatedNormalize(15),
    justifyContent: 'space-between',
    alignItems:'center',
    paddingLeft: actuatedNormalize(20),
    flexDirection:'row',
    paddingRight:actuatedNormalize(20)
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
    marginTop:actuatedNormalize(30)
  }
});
