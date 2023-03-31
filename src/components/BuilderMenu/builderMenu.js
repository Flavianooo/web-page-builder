import style from "./builderMenu.module.scss";
import BuilderSelections from "./BuilderSelections/builderSelections";
import MetaOptions from "./MetaOptions/metaOptions";

export default function BuilderMenu({
  siteTitle,
  onSiteTitleChange,
  siteDescription,
  onSiteDescriptionChange,
}) {
  return (
    <div className={style.container}>
      <BuilderSelections />
      <div className={style.rightCorner}>
        <h3 className={style.siteTitle}>
          Web Page Builder Demo
          <br />
          <span className={style.small}>by Efe Tacirlioglu</span>
        </h3>
        <MetaOptions
          siteTitle={siteTitle}
          onSiteTitleChange={onSiteTitleChange}
          siteDescription={siteDescription}
          onSiteDescriptionChange={onSiteDescriptionChange}
        />
      </div>
    </div>
  );
}
