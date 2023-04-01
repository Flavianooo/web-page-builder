import { useState } from "react";
import style from "./tabs.module.scss";

export default function Tabs({ children }) {
  return <div className={style.tabs}>{children}</div>;
}
