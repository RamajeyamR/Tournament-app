import { Image, StyleSheet, Text, View , TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import { actuatedNormalize } from '../../Constants/PixelScaling'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Fonts from '../../Constants/Fonts'
import PngLocations from '../../Constants/PngLocations'
import { useSelector } from 'react-redux'
import CommonHelper from '../../Constants/CommonHelper'

const Dashboard = () => {
  const user = useSelector(state => state.users.currentUser)
  let username;
  user.map(user => username = user.username )

  const GameData = [
    {
      id : CommonHelper.uniqueIdGenerator(),
      title : 'BGMI',
      imagesrc : PngLocations.Bgmi_Cover
    },
    {
      id : CommonHelper.uniqueIdGenerator(),
      title : 'FREE FIRE',
      imagesrc : PngLocations.FreeFire_Cover
    },
    {
      id : CommonHelper.uniqueIdGenerator(),
      title : 'COD',
      imagesrc : PngLocations.COD_Cover
    },
    {
      id : CommonHelper.uniqueIdGenerator(),
      title : 'FORTNITE',
      imagesrc : PngLocations.Fornite_Cover
    }
  ]
  return (
    <View style={styles.rootContainer}>
      <View style={styles.HederContainer}>
        <Text style={styles.HeaderText}>Welcome, {username}</Text>
      </View>
      <View style={styles.SecondContainer}>
        <Text style={styles.subHeader}>Select Your Game :</Text>
        <FlatList 
          data={GameData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({item})=> {
            return (
              <View style={styles.Row1}>
                <TouchableOpacity style={{ alignItems:'center' }}>
                  <Image
                    source={item.imagesrc}
                    style={styles.ImageStyle}
                  />
                  <Text style={styles.TitleText}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            )
          }}
        />
      </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  rootContainer : {
    flex:1, 
    marginHorizontal:actuatedNormalize(20),
  },
  HederContainer : {
    marginTop: actuatedNormalize(40 + getStatusBarHeight()),
    justifyContent:'center',
    flex:0.2,
  },
  HeaderText : {
    fontSize:actuatedNormalize(25),
    fontFamily:Fonts.Bold,
    color:'#000'
  },
  SecondContainer : {
    marginTop:actuatedNormalize(20),
    flex:1
  },
  subHeader : {
    fontFamily:Fonts.Medium,
    fontSize:actuatedNormalize(15),
    color:'#000'
  },
  Row1 : {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    margin:actuatedNormalize(20)
  },
  ImageStyle : {
    width:actuatedNormalize(100),
    height:actuatedNormalize(100)
  },
  TitleText : {
    marginTop:actuatedNormalize(10),
    fontSize:actuatedNormalize(18),
    fontFamily:Fonts.SemiBold,
    color:'#000'
  },
})