import { format } from "date-fns";
import { Post, PostProps } from "types";
const ArchivedPost = (props: PostProps) => {
  //   const postedAt = moment(post.createdTime).fromNow();

  return (
    <>
      <div className="card max-w-lg bg-base-100 shadow-xl mb-8 outline rounded-md">
        <div>
          <div className="card-body">
            {props.createdTime == props.updatedTime ? (
              <h1 className="px-2 font-bold capitalize">
                {format(new Date(props.createdTime), "eee h:mm a")}{" "}
              </h1>
            ) : (
              <div className="rounded-md">
                <h1 className="px-2 font-bold capitalize underline  rounded-md">
                  updated // {format(new Date(props.updatedTime), "eee h:mm a")}
                </h1>
                <h1 className="px-2 font-bold capitalize">
                  {format(new Date(props.createdTime), "eee h:mm a")}{" "}
                </h1>
              </div>
            )}
            <p>{props.message}</p>
          </div>
        </div>
        <figure>
          {props.fullPicture && (
            <img src={props.fullPicture} alt={props.permalinkUrl} />
          )}
        </figure>
      </div>
    </>
  );
};

export default ArchivedPost;
