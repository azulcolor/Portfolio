import { StaticImport } from "next/dist/shared/lib/get-img-props";

import reactIcon from "@/public/svg/react-original.svg";
import expressIcon from "@/public/svg/express-original.svg";
import figmaIcon from "@/public/svg/figma-original.svg";
import gitIcon from "@/public/svg/git-original.svg";
import mongoIcon from "@/public/svg/mongodb-original.svg";
import mySql from "@/public/svg/mysql-original.svg";
import nestIcon from "@/public/svg/nestjs-original.svg";
import nextIcon from "@/public/svg/nextjs-original.svg";
import oracleIcon from "@/public/svg/oracle-original.svg";
import postgresIcon from "@/public/svg/postgresql-original.svg";
import reduxIcon from "@/public/svg/redux-original.svg";
import tailwindIcon from "@/public/svg/tailwindcss-original.svg";
import typescriptIcon from "@/public/svg/typescript-original.svg";
import dockerIcon from "@/public/svg/docker-original.svg";
import javascriptIcon from "@/public/svg/javascript-original.svg";
import jestIcon from "@/public/svg/jest-plain.svg";
import materialuiIcon from "@/public/svg/materialui-original.svg";
import postmanIcon from "@/public/svg/postman-original.svg";
import openIAIcon from "@/public/svg/openia.svg";

export const logosPath: StaticImport[] = [
  reactIcon,
  openIAIcon,
  expressIcon,
  figmaIcon,
  gitIcon,
  mongoIcon,
  mySql,
  nestIcon,
  nextIcon,
  oracleIcon,
  postgresIcon,
  reduxIcon,
  tailwindIcon,
  typescriptIcon,
  dockerIcon,
  javascriptIcon,
  jestIcon,
  materialuiIcon,
  postmanIcon,
];
export const myMessageLogosPath: StaticImport[] = [
  nextIcon,
  tailwindIcon,
  figmaIcon,
  openIAIcon,
  expressIcon,
  reduxIcon,
  postgresIcon,
  jestIcon,
];
export const flightAbsorberLogosPath: StaticImport[] = [
  nextIcon,
  tailwindIcon,
  figmaIcon,
  expressIcon,
  oracleIcon,
];
export const veSignLogosPath: StaticImport[] = [
    nextIcon,
    figmaIcon,
    materialuiIcon,
    reduxIcon,
    expressIcon,
    mySql,
]

export const logosPathLength = logosPath.length;
