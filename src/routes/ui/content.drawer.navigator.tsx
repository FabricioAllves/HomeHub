import { Icon, IconName, ProfileInfoUser } from '@components';
import {
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { AppStackNavigatorRoutesProps } from '@routes/app.stack.routes';
import { theme } from '@theme';
import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Pressable } from 'react-native';

type DataProps = {
  navigate: string;
  icon: IconName
}[]

export const ContentDrawerNavigation = (props: DrawerContentComponentProps) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [modeTheme, setModeTheme] = useState(true);

  const {navigate} = useNavigation<AppStackNavigatorRoutesProps>();

  const option: DataProps = [
    { navigate: 'Calendar', icon: 'Calendar' },
    { navigate: 'Payments Methods', icon: 'Cart' },
    { navigate: 'Address', icon: 'Address' },
    { navigate: 'Notification', icon: 'Bell' },
    { navigate: 'Offers', icon: 'Offers' },
    { navigate: 'Refer a Friend', icon: 'Persons' },
  ]

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigate('ProfileScreen')}>
        <ProfileInfoUser />
      </Pressable>

      <View style={{ gap: theme.spacing.s12, flex: 1 }}>
        {option.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              selectedOption === index ? styles.selectedButton : styles.unselectedButton,
            ]}
            onPress={() => {
              setSelectedOption(index);
              // ... (function)
            }}
          >
            <Icon name={option.icon} size={24} color={selectedOption === index ? 'purple' : 'white_200'} />
            <Text style={[
              styles.textButtonNavigation,
              { color: selectedOption === index ? theme.colors.purple : theme.colors.white_200 },
            ]}>
              {option.navigate}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.footer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Icon name='Help' color='white_200' size={24} />
          <Text style={styles.textMode}>Colour Scheme</Text>
        </View>

        <View style={styles.wrapperThemeApp}>
          <TouchableOpacity
            onPress={() => setModeTheme(true)}
            style={[modeTheme ? styles.buttonModeSelected : styles.unButtonModeSelected]}
            activeOpacity={0.5}
          >
            <Icon name='Sol' color={modeTheme ? 'black_100' : 'white_200'} />
            <Text style={{ color: modeTheme ? 'black' : 'white' }}>Light</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModeTheme(false)}
            style={[!modeTheme ? styles.buttonModeSelected : styles.unButtonModeSelected]}
            activeOpacity={0.5}
          >
            <Icon name='Moon' color={modeTheme ? 'white_200' : 'black_100'} />
            <Text style={{ color: modeTheme ? 'white' : 'black' }}>Dark</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.purple,
    padding: 24,
  },
  textButtonNavigation: {
    color: theme.colors.purple,
    fontFamily: theme.font.semiBold,
    fontSize: theme.fontSize.paragraphLarge
  },
  selectedButton: {
    height: 48,
    backgroundColor: theme.colors.white_200,
    borderRadius: theme.borderRadius.s8,
    alignItems: 'center',
    flexDirection: 'row',
    padding: theme.spacing.s12,
    gap: theme.spacing.s12
  },
  unselectedButton: {
    height: 48,
    backgroundColor: theme.colors.purple,
    borderRadius: theme.borderRadius.s8,
    alignItems: 'center',
    flexDirection: 'row',
    padding: theme.spacing.s12,
    gap: theme.spacing.s12
  },
  footer: {
    borderTopWidth: 1,
    borderColor: theme.colors.gray,
    paddingVertical: theme.spacing.s10,
  },
  wrapperThemeApp: {
    backgroundColor: '#FFFFFF26',
    borderRadius: 100,
    marginTop: theme.spacing.s16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  buttonModeSelected: {
    height: 32,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  unButtonModeSelected: {
    backgroundColor: 'transparent',
    flex: 1,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  textMode: {
    color: theme.colors.white_200,
    fontFamily: theme.font.bold,
    fontSize: theme.fontSize.paragraphLarge,
    paddingVertical: 10
  }
})