import PostItem from "@/components/PostItem";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { useQuery } from "react-query";
import { Post } from "types";

// const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
const Home: NextPage = () => {
  async function fetchPosts() {
    const res = await fetch(
      `https://graph.facebook.com/v11.0/240300483115456/posts?fields=full_picture,created_time,updated_time,message,permalink_url&transport=cors&access_token=EAACldn3rRnUBAOZBWh5irw8bZAWsyEZClRd2Bbkvl5rL5WAVsegdt8j55qJgKd7xCPQdyDXVhQF38r62V8DjRemL1UOTnfVcZCPoG5C5pMkRZBSe7eo9gCu95FTNbIZBkG4IfOBgTtpyxYi3xWZAQe8FkriRt7lkNQgTiP0C4KpwlO1NGzn8Hnbtvh4DiC4brg8XyVzG0P2PgZDZD`
    );
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
          <div className="flex flex-col items-center">
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

export default Home;
