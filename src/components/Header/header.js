import style from "./header.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import header from "/public/svgs/builder-menu/header.svg";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import isWindowLoaded from "@/utils/isWindowLoaded";

export default function Header({ settings, setHeaderSettings }) {
  return (
    <header className="header draggableContainer">
      <div
        style={{
          backgroundColor: settings.headerBackground,
          width: settings.headerWidth,
          height: settings.headerHeight,
          color: settings.headerPrimaryTextColor,
          fontSize: settings.headerFontSize,
          display: "flex",
          justifyContent: settings.headerAlign,
        }}
      >
        <div className="page-header--isDropzone " data-dropzone="1">
          <h3 className="draggable-text--isDraggable">test</h3>
        </div>
      </div>
    </header>
  );
}
