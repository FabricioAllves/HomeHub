import React from 'react';

import { Svg, Path } from 'react-native-svg';

import { IconBase } from '../../components/Icon/Icon';

export function MoonIcon({ size = 20, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M8.59839 6.89852C6.74589 8.15964 5.53271 10.2845 5.53271 12.6896C5.53271 16.5556 8.66672 19.6896 12.5327 19.6896C14.9378 19.6896 17.0627 18.4764 18.3238 16.6239C13.2144 16.0654 9.15692 12.0078 8.59839 6.89852ZM19.5327 14.6896C20.3988 14.6896 21.1445 15.4529 20.8018 16.2482C19.4225 19.4489 16.2393 21.6896 12.5327 21.6896C7.56215 21.6896 3.53271 17.6601 3.53271 12.6896C3.53271 8.98301 5.77339 5.79978 8.97411 4.4205C9.76946 4.07777 10.5327 4.82355 10.5327 5.6896C10.5327 10.6602 14.5622 14.6896 19.5327 14.6896Z" fill={color} />
    </Svg>
  );
}