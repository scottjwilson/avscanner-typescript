import PostItem from "@/components/PostItem";
import type { NextPage } from "next";
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
          {" "}
          <div className="flex flex-col items-center px-4">
            {data.data.map((post: Post) => (
              <PostItem key={post.id} post={post} />
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
