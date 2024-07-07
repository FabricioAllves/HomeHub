import React from 'react';

import { Svg, Path, Line, Rect } from 'react-native-svg';

import { IconBase } from '../../components/Icon/Icon';

export function CalendarIcon({ size = 20, color = 'black' }: IconBase) {
  return (
<Svg width={size} height={size} viewBox="0 0 24 24">
    <Rect x="3" y="4" width="18" height="18" rx="2" stroke={color} strokeWidth="2" fill="none" />
    <Line x1="16" y1="2" x2="16" y2="6" stroke={color} strokeWidth="2" />
    <Line x1="8" y1="2" x2="8" y2="6" stroke={color} strokeWidth="2" />
    <Line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="2" />
  </Svg>
  );
}