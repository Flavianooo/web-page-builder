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
              className="bg-gray-600 hover:bg-gray-800 transition duration-500 text-white font-bold  text-base px-6 py-2 rounded"
              onClick={() => setHeaderBuilderEnabled(false)}
            >
              Return
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
