import React from 'react';

import { Svg, Path } from 'react-native-svg';

import { IconBase } from '../../components/Icon/Icon';

export function ArrowLeftIcon({ size = 20, color = 'black' }: IconBase) {
  return (
    <Svg width="24" height="24" viewBox="0 0 25 24" fill="none">
      <Path d="M11.6722 17.7929C12.0627 18.1834 12.0627 18.8166 11.6722 19.2071C11.2816 19.5976 10.6485 19.5976 10.258 19.2071L4.46506 13.4142C3.68401 12.6332 3.68401 11.3668 4.46506 10.5858L10.258 4.79289C10.6485 4.40237 11.2816 4.40237 11.6722 4.79289C12.0627 5.18342 12.0627 5.81658 11.6722 6.20711L6.87927 11H20.9651C21.5173 11 21.9651 11.4477 21.9651 12C21.9651 12.5523 21.5173 13 20.9651 13H6.87927L11.6722 17.7929Z"
        fill="#0F1621" />
    </Svg>


  );
}