import style from "./header.module.scss";
import { useState } from "react";
import Image from "next/image";
import header from "/public/svgs/builder-menu/header.svg";

export default function Header({ settings, setHeaderSettings }) {
  return (
    <header className={style.header}>
      <div
        style={{
          backgroundColor: settings.headerBackground,
          width: settings.headerWidth,
          height: settings.headerHeight,
        }}
      >
        Header
      </div>
    </header>
  );
}
