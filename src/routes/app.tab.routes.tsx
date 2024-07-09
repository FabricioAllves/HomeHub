
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CategoriesScreen, HomeScreen, ServicesProvided, ServicesScreen } from '@screens';
import { theme } from '@theme';

import { Platform } from 'react-native';

type AppRoutes = {
  HomeScreen: undefined,
  CategoriesScreen: undefined,
  ServicesScreen: undefined,
  ServicesProvided: undefined
}

export type AppNavigatorRoutesTabProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {


  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: theme.colors.purple,
      tabBarInactiveTintColor: theme.colors.gray,
      tabBarStyle: {
        paddingVertical: Platform.OS === 'ios' ? 2 : 2,
        height: Platform.OS === 'ios' ? 85 : 60,
        paddingBottom: Platform.OS === 'ios' ? 35 : 10,
      },
    }}>
      <Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather
              name="home"
              size={size}
              color={color}
            />
          )
        }}
      />

      <Screen
        name='ServicesProvided'
        component={ServicesProvided}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather
              name="file-text"
              size={size}
              color={color}
            />
          )
        }}
      />

      <Screen
        name='Categories'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather
              name="bell"
              size={size}
              color={color}
            />
          )
        }}
      />

      <Screen
        name='Perfil'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather
              name="message-square"
              size={size}
              color={color}
            />
          )
        }}
      />

    </Navigator>
  )
}