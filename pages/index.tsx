import PostItem from "@/components/PostItem";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useQuery } from "react-query";
import { Post } from "types";

const Home: NextPage = () => {
  async function fetchPosts() {
    const res = await fetch("/api/posts");

    return res.json();
  }

  function Posts(): JSX.Element {
    const { data, status } = useQuery("posts", fetchPosts, {
      staleTime: 0,
      // cacheTime: 10,
    });

    if (status === "loading") {
      return <p>Loading...</p>;
    }
    if (status === "error") {
      return <p>Error...</p>;
    }

    if (status === "success") {
      return (
        <>
          <NextSeo
            title={`${process.env.SITE_TITLE} - Home`}
            description="Community safety through citizen awareness"
          />
          <div className="flex flex-col items-center">
            {data.data.map((post: Post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        </>
      );
    }
  }

  return (
    <div className="max-w-xl mx-auto px-4">
      <Posts />
    </div>
  );
};

export default Home;
