import hideAllPopups from "@/utils/hidePopups";
import style from "./builderMenu.module.scss";
import BuilderSelections from "./BuilderSelections/builderSelections";
import HeaderBuilder from "./HeaderBuilder/headerBuilder";
import MetaOptions from "./MetaOptions/metaOptions";

export default function BuilderMenu({
  siteTitle,
  onSiteTitleChange,
  siteDescription,
  onSiteDescriptionChange,
  headerBuilderEnabled,
  setHeaderBuilderEnabled,
  headerData,
  setHeaderData,
}) {
  return (
    <div className={style.container}>
      <div className={style.leftCorner}>
        {!headerBuilderEnabled ? (
          <BuilderSelections
            setHeaderBuilderEnabled={setHeaderBuilderEnabled}
          />
        ) : (
          // return button
          <div className="">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold xl:text-base text-xs py-2 px-3 rounded"
              onClick={() => setHeaderBuilderEnabled(false)}
            >
              ← Return
            </button>
          </div>
        )}
        {headerBuilderEnabled && (
          <HeaderBuilder
            headerData={headerData}
            setHeaderData={setHeaderData}
          />
        )}
      </div>

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
