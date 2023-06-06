import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import {
  withTheme,
  Banner,
  Avatar,
  TextInput,
  Snackbar,
} from 'react-native-paper'

const SettingsScreen: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true)
  const [showSnackBar, setShowSnackbar] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')

  const handleSave = () => {
    setShowSnackbar(true)
  }

  const disableSnackBar = () => setShowSnackbar(false)

  const closeBanner = () => setVisible(false)

  return (
    <View style={styles.container}>
      <Banner
        style={styles.banner}
        visible={visible}
        actions={[
          {
            label: 'Fechar',
            onPress: () => closeBanner(),
          },
        ]}
        icon={({ size }) => (
          <Avatar.Icon size={24} icon="email" />
          // <Icon name="email" size={25} color={theme.colors.primary} />
        )}
      >
        Configure seu email para receber mais informações
      </Banner>

      <View style={styles.body}>
        <Avatar.Image
          style={styles.image}
          size={150}
          source={{ uri: 'https://i.pravatar.cc/300' }}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={handleSave}
        />
      </View>
      <Snackbar
        visible={showSnackBar}
        onDismiss={disableSnackBar}
        action={{
          label: 'Fechar',
          onPress: () => {
            // Do something
            disableSnackBar()
          },
        }}
      >
        Email salvo com sucesso
      </Snackbar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  banner: {
    marginTop: '15%',
  },
  body: {
    flex: 1,
    // justifyContent: 'center',
    padding: 30,
  },
  image: {
    alignSelf: 'center',
    marginBottom: 30,
  },
})

export default withTheme(SettingsScreen)
