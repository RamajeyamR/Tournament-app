import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import Navigation from './src/Navigation/Navigation'
import Store from './src/Redux/Store/Store'

const App = () => {
  return (
    <Provider store={Store}>
      <Navigation/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})