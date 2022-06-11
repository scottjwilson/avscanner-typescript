import PostItem from "@/components/PostItem";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { useQuery } from "react-query";
import { Post } from "types";

const Home: NextPage<{ posts: Post[] }> = ({ posts, url }) => {
  async function fetchPosts() {
    const res = await fetch(url);

    return res.json();
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
            {posts.data.map((post, i) => (
              <PostItem key={i} post={post} />
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

export async function getServerSideProps() {
  const url = process.env.FB_URL;

  return {
    props: { url },
  };
}

export default Home;
