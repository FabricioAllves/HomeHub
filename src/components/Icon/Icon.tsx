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
import { Categorie1Icon } from 'src/assets/icons/Categorie1Icon';
import { Categorie2Icon } from 'src/assets/icons/Categorie2Icon';
import { Categorie3Icon } from 'src/assets/icons/Categorie3Icon';
import { Categorie4Icon } from 'src/assets/icons/Categorie4Icon copy';
import { Categorie5Icon } from 'src/assets/icons/Categorie5Icon';
import { Categorie6Icon } from 'src/assets/icons/Categorie6Icon';
import { Categorie7Icon } from 'src/assets/icons/Categorie7Icon';
import { Categorie8Icon } from 'src/assets/icons/Categorie8con';
import { TrofellIcon } from 'src/assets/icons/TrofellIcon';

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
  Trofell: TrofellIcon,
  ArrowDown: ArrowDownIcon,
  Categorie1: Categorie1Icon,
  Categorie2: Categorie2Icon,
  Categorie3: Categorie3Icon,
  Categorie4: Categorie4Icon,
  Categorie5: Categorie5Icon,
  Categorie6: Categorie6Icon,
  Categorie7: Categorie7Icon,
  Categorie8: Categorie8Icon,
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;