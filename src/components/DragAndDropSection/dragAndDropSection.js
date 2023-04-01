import isWindowLoaded from "@/utils/isWindowLoaded";
import React, { useState } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import BuilderMenu from "../BuilderMenu/builderMenu";
import Header from "../Header/header";
import style from "./dragAndDropSection.module.scss";

export default function DragAndDropSection({
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
    <div container={style.container}>
      <BuilderMenu
        siteTitle={siteTitle}
        onSiteTitleChange={onSiteTitleChange}
        siteDescription={siteDescription}
        onSiteDescriptionChange={onSiteDescriptionChange}
        className={style.builderMenu}
        headerBuilderEnabled={headerBuilderEnabled}
        setHeaderBuilderEnabled={setHeaderBuilderEnabled}
        headerData={headerData}
        setHeaderData={setHeaderData}
      />
      <Header className={style.header} settings={headerData}></Header>
    </div>
  );
}
