import { Client } from "@/lib/prismic";
import Layout from "@/components/blog/Layout";
import Head from "next/head";
import SlugLayout from "@/components/blog/SlugLayout";

export default function RockSlug({ article }) {
  return (
    <div>
      <Head>
        <title>¡moonwatcher`s rock!</title>
      </Head>
      <Layout>
        <SlugLayout article={article}/>
      </Layout>
    </div>
  );
}

// this gets called on each request

export async function getServerSideProps(context) {
  const article = await Client().getByUID("blog", context.query.rock);

  return {
    props: {
      article: article,
    },
  };
}
