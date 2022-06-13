import { format } from "date-fns";
import { Post, ArchivedPost } from "types";
const ArchivedPost = ({
  post: { updatedTime, createdTime, message, fullPicture, permalinkUrl },
}: ArchivedPost) => {
  //   const postedAt = moment(post.createdTime).fromNow();

  return (
    <>
      <div className="card max-w-lg bg-base-100 shadow-xl mb-8 outline rounded-md">
        <div>
          <div className="card-body">
            {createdTime == updatedTime ? (
              <h1 className="px-2 font-bold capitalize">
                {format(new Date(createdTime), "eee h:mm a")}{" "}
              </h1>
            ) : (
              <div className="rounded-md">
                <h1 className="px-2 font-bold capitalize underline  rounded-md">
                  updated // {format(new Date(updatedTime), "eee h:mm a")}
                </h1>
                <h1 className="px-2 font-bold capitalize">
                  {format(new Date(createdTime), "eee h:mm a")}{" "}
                </h1>
              </div>
            )}
            <p>{message}</p>
          </div>
        </div>
        <figure>
          {fullPicture && <img src={fullPicture} alt={permalinkUrl} />}
        </figure>
      </div>
    </>
  );
};

export default ArchivedPost;
