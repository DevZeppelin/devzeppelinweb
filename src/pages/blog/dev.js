import Head from "next/head";
import Layout from "@/components/blog/Layout";
import Prismic from "prismic-javascript";
import { Client } from "@/lib/prismic";
import BlogLayout from "@/components/blog/BlogLayout";

export default function Dev({blogs}) {
  return (
    <div>
      <Head>
        <title>¡moonwatcher`s dev!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <BlogLayout tag="dev" title="Moonwatcher`s Dev 💻" blogs={blogs} />          
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
    const blogs = await Client().query(
      Prismic.Predicates.at("document.tags", ["dev"])
    );  
    
    return {
      props: {
        blogs: blogs     
      },
    };
  }
 