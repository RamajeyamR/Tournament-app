import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { actuatedNormalize } from '../../Constants/PixelScaling'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Fonts from '../../Constants/Fonts'
import { Arrow_right, Password_Eye_Icon, Password_Eye_Icon_Strike } from '../../Constants/SvgLocations'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import { resetState, updateconfirmPassword, updateEmail, updateMobile, updateName, updatePassword } from '../../Redux/Reducers/RegisterReducer'

const RegisterPage = () => {

  const navigation = useNavigation()
  const dispatch = useDispatch()
  const name = useSelector((state)=>state.register.name)
  const mobile = useSelector((state)=>state.register.mobile)
  const email = useSelector((state)=>state.register.email)
  const pass = useSelector((state)=>state.register.password)
  const cnfpass = useSelector((state)=>state.register.confirmPassword)
  const [ViewPass, setViewPass] = useState(false)
  const [ViewCnfPass, setViewCnfPass] = useState(false)

  return (
    <LinearGradient
      colors={['#E8F3DD', '#BCC5D2', '#C0AEC3']}
      style={{ flex: 1 }}>
      <View style={{flex:1}}>
        {/* <View style={styles.headerView}>
          <TouchableOpacity style={{width:'30%', marginLeft:actuatedNormalize(20), }} onPress={()=> {dispatch(resetState()), navigation.navigate('LoginPage')}}>
            <Arrow_right width={actuatedNormalize(40)} height={actuatedNormalize(40)} />
          </TouchableOpacity>
          <View style={{ width:'50%'}}>
          <Text style={styles.subheading}>REGISTER</Text>
          </View>
        </View> */}

        <View style={styles.signincontainer}>
          <View style={styles.usernameinput}>
            <TextInput
              placeholder="Enter Name"
              style={styles.InputText}
              value={name}
              onChangeText={(text)=>dispatch(updateName(text))}
            />
          </View>
          <View style={styles.usernameinput}>
            <TextInput
              placeholder="Mobile"
              style={styles.InputText}
              value={mobile}
              onChangeText={(text)=>dispatch(updateMobile(text))}
              keyboardType={'number-pad'}
            />
          </View>
          <View style={styles.usernameinput}>
            <TextInput
              placeholder="Email"
              style={styles.InputText}
              value={email}
              onChangeText={(text)=>dispatch(updateEmail(text))}
              keyboardType={'email-address'}
            />
          </View>
          <View style={styles.PasswordInput}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!ViewPass}
              style={styles.InputText}
              value={pass}
              onChangeText={(text)=>dispatch(updatePassword(text))}
              // keyboardType={'visible-password'}
            />
            <TouchableOpacity onPress={()=>setViewPass(!ViewPass)}>
              {ViewPass ? 
                <Password_Eye_Icon height={actuatedNormalize(24)} width={actuatedNormalize(24)} /> 
                : <Password_Eye_Icon_Strike height={actuatedNormalize(24)} width={actuatedNormalize(24)} />}
              
            </TouchableOpacity>
          </View>
          <View style={styles.PasswordInput}>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={!ViewCnfPass}
              style={styles.InputText}
              value={cnfpass}
              onChangeText={(text)=>dispatch(updateconfirmPassword(text))}
            />
            <TouchableOpacity onPress={()=>setViewCnfPass(!ViewCnfPass)}>
              {ViewCnfPass ? 
                <Password_Eye_Icon height={actuatedNormalize(24)} width={actuatedNormalize(24)} /> 
                : <Password_Eye_Icon_Strike height={actuatedNormalize(24)} width={actuatedNormalize(24)} />}
              
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.SignInContainer}>
              <Text style={styles.SignInText}>Register</Text>
          </TouchableOpacity>

        </View>

      </View>

    </LinearGradient>
  )
}

export default RegisterPage

const styles = StyleSheet.create({
  headerView :{
    justifyContent:'flex-start',
    alignItems: 'center',
    flexDirection:'row',
    width:'100%'
  },
  subheading : {
    fontFamily:Fonts.Bold,
    fontSize:actuatedNormalize(30),
    color:'#C42014'
    // marginLeft:actuatedNormalize(70)

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
    marginBottom: actuatedNormalize(15),
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
    justifyContent: 'space-between',
    alignItems:'center',
    paddingLeft: actuatedNormalize(20),
    flexDirection:'row',
    paddingRight:actuatedNormalize(20),
    marginBottom: actuatedNormalize(15),
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
})