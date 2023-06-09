import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomNavigation } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../pages/Home'
import { ITabBarIcon } from '../types/navigation'
import SettingsScreen from '../pages/Settings'

const Tab = createBottomTabNavigator()

export default function Router() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (event.defaultPrevented) {
              preventDefault()
            } else {
              navigation.navigate(route.name, route.params)
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key]
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 })
            }

            return null
          }}
          getLabelText={({ route }: any) => {
            const { options } = descriptors[route.key]
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route?.title

            return label
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }: ITabBarIcon) => {
            return <Icon name="home" size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Configuração',
          tabBarIcon: ({ size, color }: ITabBarIcon) => {
            return <Icon name="cog" size={size} color={color} />
          },
        }}
      />
    </Tab.Navigator>
  )
}
