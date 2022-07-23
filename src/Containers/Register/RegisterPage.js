import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { actuatedNormalize } from '../../Constants/PixelScaling'
import Fonts from '../../Constants/Fonts'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import { onChange, validations } from '../../Redux/Reducers/RegisterReducer'
import Input from '../../Commons/Input'
import PassInput from '../../Commons/PassInput'
import Validate from '../../Commons/Validations/Validate'
import { createUser } from '../../Redux/Reducers/UserProfileReducer'
import LoadingModal from '../../Components/Modal/LoadingModal'

const RegisterPage = () => {

  const navigation = useNavigation()
  const dispatch = useDispatch()
  const state = useSelector((state)=>state.register)
  const [Loader, setLoader] = useState(false)

  const HandleChange = (name, value) => {
    // console.log('Name-->',name)
    for (let i in state){
      // console.log('state[i].field-->',state[i].field)
      if (state[i].field === name){
        // console.log('state[i].field-->',state[i].field)
        dispatch(onChange({ name : state[i].field , field : 'value' , value : value }))
        dispatch(onChange({ name : state[i].field , field : 'touched' , value : true }))

        let ValidationResult = Validate(value, state[i].validationRules)
        // console.log('ValidationReult -->',ValidationResult)
        dispatch(onChange({ name : state[i].field , field : 'valid' , value : ValidationResult.valid }))

        if (!ValidationResult.valid) {
          dispatch(onChange({ name : state[i].field , field : 'errorMsg' , value : ValidationResult.errorMsg }))

        } else {
          dispatch(onChange({ name : state[i].field, field : 'errorMsg' , value : '' }))
        }
      }
      
    }
  }

  const HandleSubmit = () => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
      for (let i in state){
        let ValidationResult = Validate(state[i].value, state[i].validationRules)
        // console.log('ValidationReult -->',ValidationResult)
        dispatch(validations({ name : i , field : 'valid' , value : ValidationResult.valid }))

        if (!ValidationResult.valid) {
          dispatch(validations({ name : i , field : 'errorMsg' , value : ValidationResult.errorMsg }))

        } else {
          dispatch(validations({ name : i , field : 'errorMsg' , value : '' }))
        }
      }
      let formIsValid = true;
      for (let i in state) {
        formIsValid = state[i].valid && formIsValid;
      }
      if (formIsValid) {
        dispatch(createUser({
          username: state.name.value, 
          mobile : state.mobile.value,
          email : state.email.value,
        }))
        navigation.navigate('OtpScreen',{number:state.mobile.value})
      }
    }, 5000)
  }

  return (
    <LinearGradient
      colors={['#E8F3DD', '#BCC5D2', '#C0AEC3']}
      style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{paddingBottom:actuatedNormalize(100)}}>
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex:1}}
            enabled={true}
          >
        <View style={styles.signincontainer}>
            <Input
              placeholder={'Enter Name'}
              errorMsg={state.name.errorMsg}
              value={state.name.value}
              Touched={state.name.touched}
              onChangeText={(text)=>HandleChange("name",text)}
            />
            <Input
              placeholder={'Mobile'}
              errorMsg={state.mobile.errorMsg}
              value={state.mobile.value}
              Touched={state.mobile.touched}
              onChangeText={(text)=>HandleChange("mobile",text)}
              maxLength={10}
              keyboardType={'number-pad'}
            />
            <Input
              placeholder={'Email'}
              errorMsg={state.email.errorMsg}
              value={state.email.value}
              Touched={state.email.touched}
              onChangeText={(text)=>HandleChange("email",text)}
              keyboardType={'email-address'}
            />
  
          <TouchableOpacity style={styles.SignInButtonContainer} onPress={() => HandleSubmit()}>
              <Text style={styles.SignInText}>Register</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
      </ScrollView>
      <LoadingModal visible={Loader}/>
    </LinearGradient>
  )
}

export default RegisterPage

const styles = StyleSheet.create({
  signincontainer : {
    marginTop: actuatedNormalize(50),
    width: '80%',
    alignSelf: 'center',
    flex:1
  },
  SignInButtonContainer : {
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
})