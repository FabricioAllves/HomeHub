import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { theme } from '@theme';
import { ScrollViewContainer, ViewContainer } from './components/ScreeenContainer';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  scrollable = false,
}: ScreenProps) {

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={theme.colors.background}>
        {children}
      </Container>
    </KeyboardAvoidingView>
  );
}