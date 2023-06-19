import styled from 'styled-components/native'
import { Banner as BannerComponent, Avatar } from 'react-native-paper'

export const Container = styled.View`
  flex: 1;
`
export const Banner = styled(BannerComponent)`
  margin-top: 15%;
`

export const Body = styled.View`
  flex: 1;
  padding: 30px;
`

export const Image = styled(Avatar.Image)`
  align-self: center;
  margin-bottom: 30px;
`
