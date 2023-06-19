import React from 'react'

import { Center } from './styles'
import { ActivityIndicator, useTheme } from 'react-native-paper'

const Loading: React.FC = () => {
  const theme = useTheme()
  return (
    <Center>
      <ActivityIndicator
        testID="loading"
        animating
        color={theme.colors.onPrimaryContainer}
      />
    </Center>
  )
}

export default Loading
