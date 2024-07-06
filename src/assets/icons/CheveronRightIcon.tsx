import React from 'react';

import { Svg, Path } from 'react-native-svg';

import { IconBase } from '../../components/Icon/Icon';

export function ChevronRightIcon({ size = 20, color = 'black' }: IconBase) {
  return (
    <Svg width="13" height="14" viewBox="0 0 13 14" fill="none">
      <Path d="M4.875 10.25L8.125 7L4.875 3.75" stroke="#6F767E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
}