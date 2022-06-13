import ArchivedPost from "@/components/ArchivedPost";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import type { NextPage } from "next";
import { useQuery } from "react-query";

// const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
const Home: NextPage = () => {
  async function fetchPosts() {
    const res = await supabaseClient.from("posts").select("*");

    return res;
  }

  function Posts() {
    const { data: posts, status } = useQuery("posts", fetchPosts, {
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
          {" "}
          <div className="flex flex-col items-center px-4">
            {posts.data.map((post) => (
              <ArchivedPost key={post.id} post={post} />
            ))}
          </div>
        </>
      );
    }
  }

  return (
    <>
      <Posts />
    </>
  );
};
export default Home;
