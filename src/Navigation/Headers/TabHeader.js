import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { actuatedNormalize, actuatedNormalizeVertical } from '../../Constants/PixelScaling'
import Fonts from '../../Constants/Fonts'
import { Wallet_Icon } from '../../Constants/SvgLocations'
import { useSelector, useDispatch } from 'react-redux';

const TabHeader = () => {
    const user = useSelector(state => state.users.currentUser)
    let wallet;
    user.map(map => wallet = map.walletamount )
  return (
    <View style={{ justifyContent : 'center'}}>
        <View style={styles.rootContainer}>
            <Text style={styles.Header}>Game Seeker's Esports Tournament</Text>
            <View style={styles.WalletContainer}>
                <Wallet_Icon height={actuatedNormalize(20)} width={actuatedNormalize(20)} />
                <Text style={styles.AmountText}>{wallet}</Text>
            </View>
        </View>
    </View>
  )
}

export default TabHeader

const styles = StyleSheet.create({
    rootContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems: 'center',
        backgroundColor : '#000000',
        height : actuatedNormalizeVertical(75),
        paddingRight :actuatedNormalize(20),
        paddingTop : actuatedNormalize(10),
        paddingLeft : actuatedNormalize(10)
    },
    Header : {
        color : '#FFFFFF',
        fontFamily :Fonts.Bold,
        fontSize : actuatedNormalize(14)
    },
    WalletContainer : {
        backgroundColor : '#ffaa00',
        width :'28%',
        height : '70%',
        borderRadius : actuatedNormalize(5),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    AmountText : {
        color : '#FFFFFF',
        fontFamily : Fonts.Bold,
        fontSize : actuatedNormalize(18),
        paddingLeft :actuatedNormalize(7),
        paddingTop:actuatedNormalize(7)
    }
})