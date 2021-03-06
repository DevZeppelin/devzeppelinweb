import Head from "next/head";
import Layout from "../../components/blog/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../../prismic-configuration";
import BlogLayout from "../../components/blog/BlogLayout";

export default function Politica({blogs}) {
  return (
    <div>
      <Head>
        <title>¡moonwatcher`s politics!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <BlogLayout tag="politica" title="Blog de Política 💼" blogs={blogs} />          
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
    const blogs = await Client().query(
      Prismic.Predicates.at("document.tags", ["politica"])
    );     

       
    return {
      props: {
        blogs: blogs,
        
      },
    };
  }
 