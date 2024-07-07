import React from 'react';

import { Svg, Path } from 'react-native-svg';

import { IconBase } from '../../components/Icon/Icon';

export function MoreHorizontalIcon({ size = 20, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path d="M6.66668 10C6.66668 10.9205 5.92048 11.6667 5.00001 11.6667C4.07954 11.6667 3.33334 10.9205 3.33334 10C3.33334 9.07952 4.07954 8.33333 5.00001 8.33333C5.92048 8.33333 6.66668 9.07952 6.66668 10Z" fill={color} />
      <Path d="M11.6667 10C11.6667 10.9205 10.9205 11.6667 10 11.6667C9.07954 11.6667 8.33334 10.9205 8.33334 10C8.33334 9.07952 9.07954 8.33333 10 8.33333C10.9205 8.33333 11.6667 9.07952 11.6667 10Z" fill={color} />
      <Path d="M16.6667 10C16.6667 10.9205 15.9205 11.6667 15 11.6667C14.0795 11.6667 13.3333 10.9205 13.3333 10C13.3333 9.07952 14.0795 8.33333 15 8.33333C15.9205 8.33333 16.6667 9.07952 16.6667 10Z" fill={color} />
    </Svg>
  );
}