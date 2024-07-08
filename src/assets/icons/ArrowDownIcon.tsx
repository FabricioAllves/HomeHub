import React from 'react';

import { Svg, Path } from 'react-native-svg';

import { IconBase } from '../../components/Icon/Icon';

export function ArrowDownIcon({ size = 20, color = 'black' }: IconBase) {
  return (
    <Svg width="9" height="6" viewBox="0 0 9 6" fill="none" >
      <Path d="M3.79289 4.79289L0.707107 1.70711C0.077142 1.07714 0.523309 0 1.41421 0H7.58579C8.47669 0 8.92286 1.07714 8.29289 1.70711L5.20711 4.79289C4.81658 5.18342 4.18342 5.18342 3.79289 4.79289Z" fill="#172B4D" />
    </Svg>
  );
}