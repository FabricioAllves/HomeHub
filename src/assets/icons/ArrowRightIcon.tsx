import React from 'react';

import { Svg, Path } from 'react-native-svg';

import { IconBase } from '../../components/Icon/Icon';

export function ArrowRightIcon({ size = 20, color = 'black' }: IconBase) {
  return (
    <Svg width="19" height="16" viewBox="0 0 19 16" fill="none" >
      <Path d="M10.2929 13.7929C9.90237 14.1834 9.90237 14.8166 10.2929 15.2071C10.6834 15.5976 11.3166 15.5976 11.7071 15.2071L17.5 9.41421C18.281 8.63317 18.281 7.36684 17.5 6.58579L11.7071 0.792894C11.3166 0.402369 10.6834 0.402369 10.2929 0.792894C9.90237 1.18342 9.90237 1.81658 10.2929 2.20711L15.0858 7H1C0.447715 7 0 7.44772 0 8C0 8.55229 0.447715 9 1 9H15.0858L10.2929 13.7929Z" fill="#6F767E" />
    </Svg>
  );
}