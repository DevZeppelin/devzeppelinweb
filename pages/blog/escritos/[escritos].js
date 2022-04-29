import { Client } from "../../../prismic-configuration";
import Layout from "../../../components/blog/Layout";
import Head from "next/head";
import SlugLayout from "../../../components/blog/SlugLayout";

export default function EscritosSlug({ article }) {
  return (
    <div>
      <Head>
        <title>¡moonwatcher`s escritos!</title>
      </Head>
      <Layout>
        <SlugLayout article={article}/>
      </Layout>
    </div>
  );
}

// this gets called on each request

export async function getServerSideProps(context) {
  const article = await Client().getByUID("blog", context.query.escritos);

  return {
    props: {
      article: article,
    },
  };
}
