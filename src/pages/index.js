import Head from "next/head";
import style from "@/styles/Home.module.css";
import Layout from "@/components/Layout/layout";
import BuilderMenu from "@/components/BuilderMenu/builderMenu";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header/header";
import DragAndDropSection from "@/components/DragAndDropSection/dragAndDropSection";

export default function Home() {
  const [siteTitle, setSiteTitle] = useState("Web Page Builder Demo");
  const [siteDescription, setSiteDescription] = useState(
    "Web Page Builder Demo by Efe Tacirlioglu."
  );
  const [headerSettings, setHeaderSettings] = useState({
    headerBackground: "#ffffff",
    headerPrimaryTextColor: "#000000",
    headerFontSize: "16px",
    headerLayout: 1 / 2,
    headerMenu: [],
    headerHeight: "100px",
    headerWidth: "100%",
    headerAlign: "center",
  });

  useEffect(() => {
    const siteTitle = localStorage.getItem("siteTitle");
    const siteDescription = localStorage.getItem("siteDescription");
    const headerSettings = localStorage.getItem("headerSettings");
    if (siteTitle) {
      setSiteTitle(siteTitle);
    }
    if (siteDescription) {
      setSiteDescription(siteDescription);
    }
    if (headerSettings) {
      setHeaderSettings(JSON.parse(headerSettings));
    }
  }, []);

  const onSiteTitleChange = (val) => {
    setSiteTitle(val);
    localStorage.setItem("siteTitle", val);
  };

  const onSiteDescriptionChange = (val) => {
    setSiteDescription(val);
    localStorage.setItem("siteDescription", val);
  };

  const [headerBuilderEnabled, setHeaderBuilderEnabled] = useState(false);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ErrorBoundary fallback={<p>Loading...</p>}>
        <DragAndDropSection
          siteTitle={siteTitle}
          onSiteTitleChange={onSiteTitleChange}
          siteDescription={siteDescription}
          onSiteDescriptionChange={onSiteDescriptionChange}
          className={style.builderMenu}
          headerBuilderEnabled={headerBuilderEnabled}
          setHeaderBuilderEnabled={setHeaderBuilderEnabled}
          headerData={headerSettings}
          setHeaderData={setHeaderSettings}
        ></DragAndDropSection>
      </ErrorBoundary>
    </Layout>
  );
}

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
