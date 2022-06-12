import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Person } from "types";

const PersonCard = (props: Person) => {
  const sburl =
    "https://vudbxrkcwwrwjoetsfzm.supabase.co/storage/v1/object/public/images/";

  const spanClass = `font-black`;
  return (
    <div className="card outline w-96 ">
      <div className="card-body">
        <p>{format(new Date(props.created_at), "MM/dd/yy  eee h:mm a")} </p>
        <h1 className="card-title">
          {" "}
          <span className={spanClass}>Name:</span> {props.name}
        </h1>
        <p>
          {" "}
          <span className={spanClass}>Age:</span> {props.age}
        </p>
        <p>
          <span className={spanClass}>Description:</span>
          {props.description}
        </p>
        <p>
          <span className={spanClass}>Last Seen:</span>

          {props.lastSeen}
          {status}
        </p>
        {props.photoUrl && (
          <div className="relative h-[14rem]">
            <Image
              layout="fill"
              objectFit="contain"
              src={`${sburl}/${props.photoUrl}`}
            />
          </div>
        )}
        <div className="card-actions justify-end">
          <Link href={`/missing/${props.id}`}>
            <a className="btn btn-primary">More Info</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
