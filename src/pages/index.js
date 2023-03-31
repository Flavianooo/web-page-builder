import Head from "next/head";
import style from "@/styles/Home.module.css";
import Layout from "@/components/Layout/layout";
import BuilderMenu from "@/components/BuilderMenu/builderMenu";
import { useEffect, useState } from "react";
import Header from "@/components/Header/header";

export default function Home() {
  const [siteTitle, setSiteTitle] = useState("Web Page Builder Demo");
  const [siteDescription, setSiteDescription] = useState(
    "Web Page Builder Demo by Efe Tacirlioglu."
  );
  const [headerSettings, setHeaderSettings] = useState({
    headerType: "header1",
    headerBackground: "#ffffff",
    headerTextColor: "black",
    headerLogo: "logo",
    headerLogoColor: "black",
    headerLayout: 1 / 2,
    headerMenu: [],
    headerHeight: "100px",
    headerWidth: "100%",
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
      <BuilderMenu
        siteTitle={siteTitle}
        onSiteTitleChange={onSiteTitleChange}
        siteDescription={siteDescription}
        onSiteDescriptionChange={onSiteDescriptionChange}
        className={style.builderMenu}
        headerBuilderEnabled={headerBuilderEnabled}
        setHeaderBuilderEnabled={setHeaderBuilderEnabled}
        headerData={headerSettings}
        setHeaderData={setHeaderSettings}
      />
      <Header className={style.header} settings={headerSettings}></Header>
    </Layout>
  );
}
