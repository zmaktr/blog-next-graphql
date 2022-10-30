import type { NextPage } from "next";
import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";

const posts = [
  { title: "React Testing", excerpt: "Learn React Testing" },
  { title: "React with Tailwind", excerpt: "Learn React with Tailwind" },
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-500">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1 bg-green-600 border-2">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
