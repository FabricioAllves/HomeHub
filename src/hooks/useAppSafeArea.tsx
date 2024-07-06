import { theme } from '@theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';



export function useAppSafeArea() {
  const {top, bottom} = useSafeAreaInsets();

  return {
    top: Math.max(top, theme.spacing.s20),
    bottom: Math.max(bottom, theme.spacing.s20),
  };
}