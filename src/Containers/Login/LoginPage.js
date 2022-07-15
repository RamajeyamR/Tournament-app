import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import {actuatedNormalize} from '../../Constants/PixelScaling';
import Fonts from '../../Constants/Fonts';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const LoginPage = () => {
  return (
    <LinearGradient
      colors={['#E8F3DD', '#BCC5D2', '#C0AEC3']}
      style={{
        flex: 1,
      }}>
      <StatusBar translucent={true} barStyle="dark-content" />
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: actuatedNormalize(40 + getStatusBarHeight()),
          }}>
          <Text
            style={{
              fontSize: actuatedNormalize(30),
              fontFamily: Fonts.Bold,
              color: '#000000',
            }}>
            Hello Gamer!
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Regular,
              fontSize: actuatedNormalize(20),
              // width: '60%',
            }}>
            Welcome back you've
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Regular,
              fontSize: actuatedNormalize(20),
              // width: '60%',
            }}>
            been missed!
          </Text>
        </View>

        <View
          style={{
            marginTop: actuatedNormalize(20),
            width: '80%',
            alignSelf: 'center',
            // marginVertical: actuatedNormalize(15),
          }}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: actuatedNormalize(10),
              height: actuatedNormalize(65),
              justifyContent: 'center',
              paddingLeft: actuatedNormalize(20),
            }}>
            <TextInput
              placeholder="Enter Username"
              style={{
                fontSize: actuatedNormalize(16),
                fontFamily: Fonts.Medium,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: actuatedNormalize(10),
              height: actuatedNormalize(65),
              marginTop: actuatedNormalize(15),
              justifyContent: 'center',
              paddingLeft: actuatedNormalize(20),
            }}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={{
                fontSize: actuatedNormalize(16),
                fontFamily: Fonts.Medium,
              }}
            />
          </View>
          <View
            style={{
              marginTop: actuatedNormalize(20),
              alignItems: 'flex-end',
              marginRight: actuatedNormalize(5),
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: Fonts.SemiBold,
                  fontSize: actuatedNormalize(15),
                }}>
                Recovery Password
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#E86568',
                height: actuatedNormalize(65),
                borderRadius: actuatedNormalize(10),
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: actuatedNormalize(25),
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: actuatedNormalize(18),
                  fontFamily: Fonts.SemiBold,
                }}>
                Sign In
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
