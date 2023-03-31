import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout/layout";
import BuilderMenu from "@/components/BuilderMenu/builderMenu";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const [siteTitle, setSiteTitle] = useState("Web Page Builder Demo");
  const [siteDescription, setSiteDescription] = useState(
    "Web Page Builder Demo by Efe Tacirlioglu."
  );

  const { data: session } = useSession();
  if (session) console.log(session);

  const onSiteTitleChange = (val) => {
    setSiteTitle(val);
    localStorage.setItem("siteTitle", val);
  };

  const onSiteDescriptionChange = (val) => {
    setSiteDescription(val);
    localStorage.setItem("siteDescription", val);
  };

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
        className={styles.builderMenu}
      />
    </Layout>
  );
}
