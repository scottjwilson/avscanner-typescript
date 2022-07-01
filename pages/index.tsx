import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import PostItem from "@/components/PostItem";
import { Post } from "types";
import usePosts from "hooks/usePosts";
import Loading from "@/components/Loading";

const Home: NextPage = () => {
  const postsQuery = usePosts();

  return (
    <>
      <NextSeo
        title={`${process.env.NEXT_PUBLIC_SITE_TITLE} - Home`}
        description="Community safety through citizen awareness"
      />

      {/* <pre>{JSON.stringify(postsQuery, null, 2)}</pre> */}
      <section className="max-w-xl mx-auto px-4">
        {postsQuery.isLoading ? (
          <Loading />
        ) : postsQuery.isError ? (
          <span>Something went wrong</span>
        ) : (
          <div className="flex flex-col items-center">
            {postsQuery.data.data.map((post: Post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
