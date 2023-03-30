import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout/layout";
import BuilderMenu from "@/components/BuilderMenu/builderMenu";
import { useState } from "react";

export default function Home() {
  const [siteTitle, setSiteTitle] = useState("Web Page Builder Demo");

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Web Page Builder Demo by Efe Tacirlioglu."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BuilderMenu
        siteTitle={siteTitle}
        onSiteTitleChange={setSiteTitle}
        className={styles.builderMenu}
      />
    </Layout>
  );
}
