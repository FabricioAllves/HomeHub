import { useAppTheme } from "@hooks";
import { theme } from "@theme";
import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { SearchInput } from "../SearchInput/SearchInput";
import { Icon } from "../Icon/Icon";
import { DrawerActions, useNavigation } from "@react-navigation/native";

type HeaderProps = {
  isHome?: boolean
}

const { colors } = useAppTheme()

export function Header({ isHome = false }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {isHome ? (
        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', flex: 1 }}>
          <View style={styles.wrapper}>
            <Icon name="Menu" size={32} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
            <View style={{ justifyContent: 'center' }}>
              <Text style={styles.textLocation}>Current Location</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <Text style={{ fontFamily: theme.font.semiBold }}>15A, James Streetn</Text>
                <Icon name="ArrowDown" />
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <View>
              <Text style={{color: '#FAC153', fontFamily: theme.font.bold}}>Bronze</Text>
              <Text>0 Points</Text>
            </View>
            <Icon name="Trofell" />
          </View>
        </View>
      ) : (
        <SearchInput
          canBack
          placeholder="Search what you need..."
          rightComponent={
            <Icon name="Search" color="white_200" size={14} />
          }
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPrimary,
    height: 72,
    width: '100%',
    paddingHorizontal: theme.spacing.s24,
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    gap: theme.spacing.s16
  },
  textLocation: {
    fontSize: 9,
    fontFamily: theme.font.regular
  }
})