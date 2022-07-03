import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import PostItem from "@/components/PostItem";
import { Post } from "types";
import usePosts from "hooks/usePosts";
import Loading from "@/components/Loading";

const title = `${process.env.NEXT_PUBLIC_SITE_TITLE} - Home`;
const description = "Community safety through citizen awareness";
const url = `${process.env.NEXT_PUBLIC_CLIENT_URL}`;
const imageUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/og.jpg`;
const alt = `${process.env.NEXT_PUBLIC_SITE_TITLE} - Home`;

const Home: NextPage = () => {
  const postsQuery = usePosts();

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: url,
          title: title,
          description: description,
          images: [
            {
              url: imageUrl,
              width: 800,
              height: 600,
              alt: alt,
              type: "image/jpeg",
            },
          ],
        }}
      />
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
