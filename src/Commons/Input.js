import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { actuatedNormalize } from '../Constants/PixelScaling'
import Fonts from '../Constants/Fonts'
import { Check_Green, Exclamatory_Info } from '../Constants/SvgLocations'

const Input = (props) => {
  return (
    <View>
        <View style={[styles.usernameinput,{borderColor: props.errorMsg ? '#ff3300' : '#FFFFFF'},props.textContainerStyle]}>
            <TextInput
              placeholder={props.placeholder}
              style={[styles.InputText,props.inputTextStyle]}
              value={props.value}
              onChangeText={(text)=>props.onChangeText(text)}
              keyboardType={props.keyboardType}
              maxLength={props.maxLength}
              autoFocus={props.autoFocus}
            />
            {
              props.errorMsg ? <Exclamatory_Info height={actuatedNormalize(24)} width={actuatedNormalize(24)}/> : null
            }
            {
                props.Touched && props.errorMsg === '' ? <Check_Green height={actuatedNormalize(24)} width={actuatedNormalize(24)}/> : null
            }
            
          </View>
          {
              props.errorMsg ? <Text style={styles.errorStyle}>{props.errorMsg}</Text> : null
            }
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    usernameinput:{
        backgroundColor: '#FFFFFF',
        borderRadius: actuatedNormalize(10),
        height: actuatedNormalize(65),
        justifyContent: 'space-between',
        paddingLeft: actuatedNormalize(20),
        marginBottom: actuatedNormalize(15),
        elevation:actuatedNormalize(25),
        borderWidth:2,
        borderColor:'#FFFFFF',
        flexDirection:'row',
        alignItems:'center',
        paddingRight:actuatedNormalize(20),
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