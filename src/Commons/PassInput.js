import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { actuatedNormalize } from '../Constants/PixelScaling'
import Fonts from '../Constants/Fonts'
import { Exclamatory_Info, Password_Eye_Icon, Password_Eye_Icon_Strike } from '../Constants/SvgLocations'

const PassInput = (props) => {
  return (
    <View>
        <View style={[styles.PasswordInput,{borderColor: props.errorMsg ? '#ff3300' : '#FFFFFF'}]}>
            <TextInput
              placeholder={props.placeholder}
              style={styles.InputText}
              value={props.value}
              secureTextEntry={!props.isPasswordVisible}
              onChangeText={(text)=>props.onChangeText(text)}
              keyboardType={props.keyboardType}
              maxLength={props.maxLength}
            />
             
            {
              props.errorMsg ? 
                <Exclamatory_Info height={actuatedNormalize(24)} width={actuatedNormalize(24)}/> 
                :   <TouchableOpacity onPress={()=>props.toogleVisible()}>
                        {props.isPasswordVisible ? 
                        <Password_Eye_Icon height={actuatedNormalize(24)} width={actuatedNormalize(24)} /> 
                        : <Password_Eye_Icon_Strike height={actuatedNormalize(24)} width={actuatedNormalize(24)} />}
                        
                    </TouchableOpacity>
            }
            
          </View>
          {
              props.errorMsg ? <Text style={styles.errorStyle}>{props.errorMsg}</Text> : null
            }
    </View>
  )
}

export default PassInput

const styles = StyleSheet.create({
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
        elevation:actuatedNormalize(25),
        borderWidth:2,
        borderColor:'#FFFFFF'
      },
      InputText:{
        fontSize: actuatedNormalize(16),
        fontFamily: Fonts.Medium,
        width:'90%'
      },
      errorStyle : {
        color : '#ff3300',
        marginBottom:actuatedNormalize(10),
        marginLeft:actuatedNormalize(20),
        fontFamily:Fonts.Medium,
        fontSize:actuatedNormalize(14)
      }
})