import { StatusBar } from 'expo-status-bar'
import { PaperProvider } from 'react-native-paper'

import Home from './src/pages/Home'
import './ReactotronConfig'
import Router from './src/routes/bottomTabNavigator'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Router />
      </NavigationContainer>
    </PaperProvider>
  )
}
