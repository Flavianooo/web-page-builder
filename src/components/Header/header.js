import style from "./header.module.scss";
import { useState } from "react";
import Image from "next/image";
import header from "/public/svgs/builder-menu/header.svg";

const defaultSettings = {
  headerPreset: 0,
  headerWidth: "100%",
  headerBackground: "#000",
  headerTextColor: "#000",
  headerLogo: <Image src={header} width="50" height="50" />,
  headerLogoColor: "black",
  headerLayout: 1 / 2,
  headerMenu: [],
};

export default function Header({ settings }) {
  const [headerSettings, setHeaderSettings] = useState(defaultSettings);

  return (
    <div
      style={{
        backgroundColor: headerSettings.headerBackground,
        width: headerSettings.headerWidth,
      }}
    >
      safsa
    </div>
  );
}
