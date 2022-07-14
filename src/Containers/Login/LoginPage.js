import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import {actuatedNormalize} from '../../Constants/PixelScaling';
import Fonts from '../../Constants/Fonts';

const LoginPage = () => {
  return (
    <LinearGradient
      colors={['#E8F3DD', '#BCC5D2', '#C0AEC3']}
      style={{
        flex: 1,
      }}>
      <View>
        <Text
          style={{
            fontSize: actuatedNormalize(24),
            fontFamily: Fonts.Bold,
          }}>
          Hello Gamer!
        </Text>
      </View>
    </LinearGradient>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
