import React from 'react';
import {Pressable} from 'react-native';

import {SearchIcon} from '../../assets/icons/SearchIcon';
import { ArrowLeftIcon } from 'src/assets/icons/ArrowLeftIcon';
import { AcRepairIcon } from 'src/assets/icons/AcRepairIcon';
import { ChevronRightIcon } from 'src/assets/icons/CheveronRightIcon';
import { MoreHorizontalIcon } from 'src/assets/icons/MoreHorizontal';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  size?: number;
  onPress?: () => void;
}
export function Icon({
  name,
  size,
  onPress,
}: IconProps) {
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon  size={size} />
      </Pressable>
    );
  }

  return <SVGIcon size={size} color='white'/>;
}

const iconRegistry = {
  Search: SearchIcon,
  ArrowLeft: ArrowLeftIcon,
  AcRepair: AcRepairIcon,
  ChevronRight: ChevronRightIcon,
  MoreHorizontal: MoreHorizontalIcon
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;