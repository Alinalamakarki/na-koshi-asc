'use client';
import { useTheme } from 'next-themes';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';
import { AppTheme } from '@/lib/utils';
import MoniterIcon from './svg/icons/MoniterSvgIcon';
import IconSun from './svg/icons/SunSvgIcon';
import IconMoon from './svg/icons/MoonSvgIcon';
import { type AppThemesType } from '@/types/theme.types';

type onSelectChangeProps = any;

interface ThemeOptionProps {
  value: AppThemesType;
  icon: React.ReactNode;
}
const themeOptions: ThemeOptionProps[] = [
  {
    value: AppTheme.LIGHT,
    icon: <IconSun className="group-hover:rotate-90" />,
  },
  {
    value: AppTheme.DARK,
    icon: <IconMoon className="group-hover:animate-swing" />,
  },
  {
    value: AppTheme.SYSTEM,
    icon: <MoniterIcon className="group-hover:animate-bounce" />,
  },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  function changeTheme(keys: onSelectChangeProps) {
    setTheme(keys?.currentKey);
  }
  const themeKey = theme || AppTheme.SYSTEM;
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant="bordered" className="capitalize">
          <IconSun className="dark:hidden block" />{' '}
          <IconMoon className="hidden dark:block" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="change theme"
        variant="shadow"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={[themeKey]}
        onSelectionChange={changeTheme}
      >
        {themeOptions.map((option: ThemeOptionProps) => {
          return (
            <DropdownItem
              startContent={option.icon}
              className="capitalize font-extrabold font-serif"
              key={option.value}
            >
              {option.value}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}
