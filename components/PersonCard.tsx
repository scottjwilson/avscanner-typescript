import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Person } from "types";

const PersonCard = ({
  person: {
    id,
    name,
    created_at,
    age,
    description,
    lastSeen,
    photoUrl,
    status,
  },
}: Person[]) => {
  const sburl =
    "https://vudbxrkcwwrwjoetsfzm.supabase.co/storage/v1/object/public/images/";

  const spanClass = `font-black`;
  return (
    <div className="card outline w-96 ">
      <div className="card-body">
        <p>{format(new Date(created_at), "MM/dd/yy  eee h:mm a")} </p>
        <h1 className="card-title">
          {" "}
          <span className={spanClass}>Name:</span> {name}
        </h1>
        <p>
          {" "}
          <span className={spanClass}>Age:</span> {age}
        </p>
        <p>
          <span className={spanClass}>Description:</span>
          {description}
        </p>
        <p>
          <span className={spanClass}>Last Seen:</span>

          {lastSeen}
          {status}
        </p>
        {photoUrl && (
          <div className="relative h-[14rem]">
            <Image
              layout="fill"
              objectFit="contain"
              src={`${sburl}/${photoUrl}`}
            />
          </div>
        )}
        <div className="card-actions justify-end">
          <Link href={`/missing/${id}`}>
            <a className="btn btn-primary">More Info</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
