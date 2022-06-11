import { format } from "date-fns";
export default function ArchivedPost({ post }) {
  //   const postedAt = moment(post.createdTime).fromNow();

  return (
    <>
      <div className="card max-w-lg bg-base-100 shadow-xl mb-8 outline rounded-md">
        <div>
          <div className="card-body">
            {post.createdTime == post.updatedTime ? (
              <h1 className="px-2 font-bold capitalize">
                {format(new Date(post.createdTime), "eee h:mm a")}{" "}
              </h1>
            ) : (
              <div className="rounded-md">
                <h1 className="px-2 font-bold capitalize underline  rounded-md">
                  updated // {format(new Date(post.updatedTime), "eee h:mm a")}
                </h1>
                <h1 className="px-2 font-bold capitalize">
                  {format(new Date(post.createdTime), "eee h:mm a")}{" "}
                </h1>
              </div>
            )}
            <p>{post.message}</p>
          </div>
        </div>
        <figure>
          {post.fullPicture && (
            <img src={post.fullPicture} alt={post.permalink_url} />
          )}
        </figure>
      </div>
    </>
  );
}
