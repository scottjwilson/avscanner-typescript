import { format } from "date-fns";
export default function PostItem({ post }) {
  //   const postedAt = moment(post.created_time).fromNow();

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl mb-8 outline rounded-md">
        <div>
          <div className="card-body">
            {post.created_time == post.updated_time ? (
              <h1 className="px-2 font-bold capitalize">
                {format(new Date(post.created_time), "eee h:mm a")}{" "}
              </h1>
            ) : (
              <div className="rounded-md">
                <h1 className="px-2 font-bold capitalize underline  rounded-md">
                  updated // {format(new Date(post.updated_time), "eee h:mm a")}
                </h1>
                <h1 className="px-2 font-bold capitalize">
                  {format(new Date(post.created_time), "eee h:mm a")}{" "}
                </h1>
              </div>
            )}
            <p>{post.message}</p>
          </div>
        </div>
        <figure>
          {post.full_picture && (
            <img src={post.full_picture} alt={post.permalink_url} />
          )}
        </figure>
      </div>
    </>
  );
}
