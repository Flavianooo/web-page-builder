import Image from "next/image";
import style from "./builderSelections.module.scss";
import header from "/public/svgs/builder-menu/header.svg";
import footer from "/public/svgs/builder-menu/footer.svg";
import pageBuilder from "/public/svgs/builder-menu/page-builder.svg";
import { useState } from "react";

export default function BuilderSelections({ setHeaderBuilderEnabled }) {
  return (
    <div className={style.container}>
      <div className={style.selection}>
        <Image
          className={style.builderImages}
          id="header-builder"
          src={header}
          alt="Header"
          onClick={setHeaderBuilderEnabled}
        />
        <h6>Header</h6>
      </div>
      <div className={style.selection}>
        <Image
          className={style.builderImages}
          id="footer-builder"
          src={footer}
          alt="Footer"
        />
        <h6>Footer</h6>
      </div>
      <div className={style.selection}>
        <Image
          className={style.builderImages}
          id="page-builder"
          src={pageBuilder}
          alt="Page Builder"
        />
        <h6>Page Builder</h6>
      </div>
    </div>
  );
}
