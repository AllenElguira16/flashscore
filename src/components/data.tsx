import { faker } from "@faker-js/faker";
import * as Icons from "@mui/icons-material";
import * as CountryIcons from "country-flag-icons/react/3x2";

export const getRandomCountryIcon = () => {
  const keys = Object.keys(CountryIcons) as (keyof typeof CountryIcons)[];
  const count = keys.length;
  const selectedKeyIndex = Math.floor(Math.random() * count) + 1;
  return CountryIcons[keys[selectedKeyIndex]];
};

export const getRandomIcon = () => {
  const keys = Object.keys(Icons) as (keyof typeof Icons)[];
  const count = keys.length;
  const selectedKeyIndex = Math.floor(Math.random() * count) + 1;
  return Icons[keys[selectedKeyIndex]];
};

export const navbar = Array.from({ length: 10 }).map(() => ({
  title: faker.word.noun({ length: { min: 6, max: 8 } }).toLocaleUpperCase(),
  Icon: getRandomIcon(),
}));
