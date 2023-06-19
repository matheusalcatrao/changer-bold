import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { PaperProvider } from 'react-native-paper'

import './ReactotronConfig'
import Router from './src/routes/bottomTabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import MovieProvider from './src/context/MovieContext'
import { render } from '@testing-library/react-native'

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

const customRender = (ui: React.ReactElement, options: any) =>
  render(ui, { wrapper: App, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
