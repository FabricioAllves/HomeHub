import React from 'react';
import {Pressable} from 'react-native';

import {SearchIcon} from '../../assets/icons/SearchIcon';

import { AcRepairIcon } from 'src/assets/icons/AcRepairIcon';
import { ChevronRightIcon } from 'src/assets/icons/CheveronRightIcon';
import { MoreHorizontalIcon } from 'src/assets/icons/MoreHorizontal';
import { ThemeColors } from '@theme';
import { ArrowLeftIcon } from 'src/assets/icons/ArrowLeftIcon';
import { useAppTheme } from '@hooks';
import { CalendarIcon } from 'src/assets/icons/CalendarIcon';
import { CartIcon } from 'src/assets/icons/Cart';
import { AddressIcon } from 'src/assets/icons/AddressIcon';
import { BellIcon } from 'src/assets/icons/BellIcon';
import { OffersIcon } from 'src/assets/icons/OffersIcon';
import { PersonsIcon } from 'src/assets/icons/PersonsIcon';
import { PhoneIcon } from 'src/assets/icons/PhoneIcon';
import { SolIcon } from 'src/assets/icons/SolIcon';
import { MoonIcon } from 'src/assets/icons/MoonIcon';
import { HelpIcon } from 'src/assets/icons/HelpIcon';
import { MenuIcon } from 'src/assets/icons/MenuIcon';
import { ArrowDownIcon } from 'src/assets/icons/ArrowDownIcon';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}
export function Icon({
  name,
  size,
  color = 'black_200',
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon size={size} color={colors[color]}/>;
}

const iconRegistry = {
  Search: SearchIcon,
  ArrowLeft: ArrowLeftIcon,
  AcRepair: AcRepairIcon,
  ChevronRight: ChevronRightIcon,
  MoreHorizontal: MoreHorizontalIcon,
  Calendar: CalendarIcon,
  Cart: CartIcon,
  Address: AddressIcon,
  Bell: BellIcon,
  Offers: OffersIcon,
  Persons: PersonsIcon,
  Phone: PhoneIcon,
  Sol: SolIcon,
  Moon: MoonIcon,
  Help: HelpIcon,
  Menu: MenuIcon,
  ArrowDown: ArrowDownIcon
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;