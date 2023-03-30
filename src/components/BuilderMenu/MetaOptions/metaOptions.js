import Image from "next/image";
import seo from "/public/svgs/builder-menu/seo.svg";
import socialLinks from "/public/svgs/builder-menu/social-links.svg";
import style from "./metaOptions.module.scss";

export default function MetaOptions({ siteTitle, onSiteTitleChange }) {
  const openPopup = (evt) => {
    let id = evt.target.id;
    if (id == "seo") {
      onSiteTitleChange("SEO");
    } else if (id == "social-links") {
    }
  };

  return (
    <div className={style.container}>
      <Image
        onClick={openPopup}
        id="social-links"
        src={socialLinks}
        alt="Social Links"
      />
      <Image onClick={openPopup} id="seo" src={seo} alt="SEO" />
    </div>
  );
}
