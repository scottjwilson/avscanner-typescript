import { format } from "date-fns";
import { FbPost } from "types";
export default function PostItem({
  post: { created_time, updated_time, message, full_picture, permalink_url },
}: FbPost) {
  return (
    <>
      <div className="card w-full max-w-lg bg-base-100 shadow-xl mb-8 outline rounded-md">
        <div>
          <div className="card-body">
            {created_time == updated_time ? (
              <h1 className="px-2 font-bold capitalize">
                {format(new Date(created_time), "eee h:mm a")}{" "}
              </h1>
            ) : (
              <div className="rounded-md">
                <h1 className="px-2 font-bold capitalize underline  rounded-md">
                  updated // {format(new Date(updated_time), "eee h:mm a")}
                </h1>
                <h1 className="px-2 font-bold capitalize">
                  {format(new Date(created_time), "eee h:mm a")}{" "}
                </h1>
              </div>
            )}
            <p>{message}</p>
          </div>
        </div>
        <figure>
          {full_picture && <img src={full_picture} alt={permalink_url} />}
        </figure>
      </div>
    </>
  );
}
