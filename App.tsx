import { StatusBar } from 'expo-status-bar'
import { PaperProvider } from 'react-native-paper'

import './ReactotronConfig'
import Router from './src/routes/bottomTabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import MovieProvider from './src/context/MovieContext'

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MovieProvider>
          <StatusBar style="auto" />
          <Router />
        </MovieProvider>
      </NavigationContainer>
    </PaperProvider>
  )
}
