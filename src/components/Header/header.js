import style from "./header.module.scss";
import { useState } from "react";
import Image from "next/image";
import header from "/public/svgs/builder-menu/header.svg";

export default function Header({ settings, setHeaderSettings }) {
  return (
    <div
      style={{
        backgroundColor: settings.headerBackground,
        width: settings.headerWidth,
      }}
    >
      safsa
    </div>
  );
}
