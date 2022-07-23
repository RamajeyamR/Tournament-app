import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native'

const LoadingModal = (props) => {
  return (
    <Modal
        visible={props.visible}
        transparent={true}
        animationType={'fade'}
        statusBarTranslucent={true}
    >
        <View style={styles.rootContainer}>
            <Lottie
            // visible={Loader}
                autoPlay={true}
                source={require('../../../Assets/Lottie/106663-gaming-loading-animation.json')}
                style={styles.lottie}
            />
        </View>
        
    </Modal>
  )
}

export default LoadingModal

const styles = StyleSheet.create({
    lottie : {
        width: 300, 
        height: 300
      },
      rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#00000090'
      }
})