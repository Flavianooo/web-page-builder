import Image from "next/image";
import style from "./builderSelections.module.scss";
import header from "/public/svgs/builder-menu/header.svg";
import footer from "/public/svgs/builder-menu/footer.svg";
import pageBuilder from "/public/svgs/builder-menu/page-builder.svg";

export default function BuilderSelections() {
  return (
    <div className={style.container}>
      <div className={style.selection}>
        <Image
          className={style.builderImages}
          id="header-builder"
          src={header}
          alt="Header"
        />
        <h5>Header</h5>
      </div>
      <div className={style.selection}>
        <Image
          className={style.builderImages}
          id="footer-builder"
          src={footer}
          alt="Footer"
        />
        <h5>Footer</h5>
      </div>
      <div className={style.selection}>
        <Image
          className={style.builderImages}
          id="page-builder"
          src={pageBuilder}
          alt="Page Builder"
        />
        <h5>Page Builder</h5>
      </div>
    </div>
  );
}
