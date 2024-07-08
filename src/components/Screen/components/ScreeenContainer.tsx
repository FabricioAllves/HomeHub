import React from 'react';
import { SafeAreaView, ScrollView,  } from 'react-native';

interface Props {
  children: React.ReactNode;
  backgroundColor: string;
}
export function ScrollViewContainer({ children, backgroundColor }: Props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor, flex: 1 }}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

export function ViewContainer({ children, backgroundColor }: Props) {
  return <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>{children}</SafeAreaView>;
}