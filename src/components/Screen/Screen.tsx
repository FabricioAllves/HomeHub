import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useAppSafeArea } from '@hooks';

import { theme } from '@theme';
import { ScrollViewContainer, ViewContainer } from './components/ScreeenContainer';
import { Header } from '../Headers/Header';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  scrollable = false,
}: ScreenProps) {
  const { bottom, top } = useAppSafeArea();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={theme.colors.background}>
        <View
          style={{ paddingTop: top, paddingBottom: bottom }}>
          <Header />
          <View style={styles.container}>
          {children}
          </View>
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.s24,
    gap: theme.spacing.s16,
    marginVertical: theme.spacing.s16,
  }
})