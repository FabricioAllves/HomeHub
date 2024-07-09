import React, { useRef } from 'react';
import {
  Pressable,
  TextInput,
  TextInputProps as RNTextInputProps,
  View,
  StyleSheet,
} from 'react-native';
import { theme } from '@theme'
import { Icon } from '../Icon/Icon';
import { useNavigation } from '@react-navigation/native'

export interface TextInputProps extends RNTextInputProps {
  rightComponent?: React.ReactElement;
  canBack?: boolean
}

export function SearchInput({
  rightComponent,
  canBack = false,
  ...rnTextInputProps
}: TextInputProps) {
  const inputRef = useRef<TextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={focusInput} style={styles.pressable}>
        <View style={styles.inputContainer}>
          {canBack && (
            <View style={styles.leftComponent}>
              <Icon name='ArrowLeft' onPress={goBack} />
            </View>
          )}
          <TextInput
            ref={inputRef}
            placeholderTextColor={theme.colors.gray_100}
            style={styles.textInput}
            {...rnTextInputProps}
          />
          {rightComponent && (
            <View style={styles.rightComponent}>
              {rightComponent}
            </View>
          )}
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: theme.borderRadius.s10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressable: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: theme.colors.white_200,
  },
  textInput: {
    flex: 1,
  },

  leftComponent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    borderRadius: theme.borderRadius.s8,
  },

  rightComponent: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.purple,
    width: 32,
    height: 32,
    borderRadius: theme.borderRadius.s8,
  },
});

