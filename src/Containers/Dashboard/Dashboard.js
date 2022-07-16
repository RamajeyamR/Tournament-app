import { Image, StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { actuatedNormalize } from '../../Constants/PixelScaling'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Fonts from '../../Constants/Fonts'
import PngLocations from '../../Constants/PngLocations'

const Dashboard = () => {
  
  return (
    <View style={{
      flex:1, 
      marginHorizontal:actuatedNormalize(20),
     
    }}>
      <View style={{
        marginTop: actuatedNormalize(40 + getStatusBarHeight()),
        justifyContent:'center',
        flex:0.2,
      }}>
        <Text style={{
          fontSize:actuatedNormalize(25),
          fontFamily:Fonts.Bold,
          color:'#000'
        }}>Welcome, Ramajeyam</Text>
        
      </View>
      <View style={{
        marginTop:actuatedNormalize(20),
        flex:1
      }}>
        <Text style={{
          fontFamily:Fonts.Medium,
          fontSize:actuatedNormalize(15),
          color:'#000'
        }}>Select Your Game :</Text>
        <View style={{
          flexDirection:'row',
          justifyContent: 'space-evenly',
          marginTop:actuatedNormalize(20)
        }}>
          <TouchableOpacity style={{
            alignItems:'center'
          }}>
            <Image
              source={PngLocations.Bgmi_Cover}
              style={{
                width:actuatedNormalize(100),
                height:actuatedNormalize(100)
              }}
            />
            <Text style={{
              marginTop:actuatedNormalize(10),
              fontSize:actuatedNormalize(18),
              fontFamily:Fonts.SemiBold,
              color:'#000'
            }}>BGMI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            alignItems:'center'
          }}>
            <Image
              source={PngLocations.FreeFire_Cover}
              style={{
                width:actuatedNormalize(100),
                height:actuatedNormalize(100)
              }}
            />
            <Text style={{
              marginTop:actuatedNormalize(10),
              fontSize:actuatedNormalize(18),
              fontFamily:Fonts.SemiBold,
              color:'#000'
            }}>FREE FIRE</Text>
          </TouchableOpacity>

        </View>

        <View style={{
          flexDirection:'row',
          justifyContent: 'space-evenly',
          marginTop:actuatedNormalize(20)
        }}>
          <TouchableOpacity style={{
            alignItems:'center'
          }}>
            <Image
              source={PngLocations.COD_Cover}
              style={{
                width:actuatedNormalize(100),
                height:actuatedNormalize(100)
              }}
            />
            <Text style={{
              marginTop:actuatedNormalize(10),
              fontSize:actuatedNormalize(18),
              fontFamily:Fonts.SemiBold,
              color:'#000'
            }}>COD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            alignItems:'center'
          }}>
            <Image
              source={PngLocations.Fornite_Cover}
              style={{
                width:actuatedNormalize(100),
                height:actuatedNormalize(100)
              }}
            />
            <Text style={{
              marginTop:actuatedNormalize(10),
              fontSize:actuatedNormalize(18),
              fontFamily:Fonts.SemiBold,
              color:'#000'
            }}>FORTNITE</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})