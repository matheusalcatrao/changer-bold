import React, { useState } from 'react'
import { withTheme, Avatar, TextInput, Snackbar } from 'react-native-paper'
import { Container, Banner, Body, Image } from './styles'

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
    <Container>
      <Banner
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

      <Body>
        <Image size={150} source={{ uri: 'https://i.pravatar.cc/300' }} />
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={handleSave}
        />
      </Body>
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
    </Container>
  )
}

export default withTheme(SettingsScreen)
