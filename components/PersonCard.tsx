import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Person } from "types";

const PersonCard = ({ person }: Person) => {
  const sburl =
    "https://vudbxrkcwwrwjoetsfzm.supabase.co/storage/v1/object/public/images/";

  const spanClass = `font-black`;
  return (
    <div className="card w-full bg-base-100 shadow-xl mb-8 outline rounded-md">
      <div className="card-body">
        <p>{format(new Date(person.created_at), "MM/dd/yy  eee h:mm a")} </p>
        <h1 className="card-title">
          {" "}
          <span className={spanClass}>Name: </span>
          {person.name}
        </h1>
        <p>
          {" "}
          <span className={spanClass}>Age: </span>
          {person.age}
        </p>
        <p>
          <span className={spanClass}>Description: </span>
          {person.description}
        </p>
        <p>
          <span className={spanClass}>Last Seen: </span>
          {person.lastSeen}
        </p>
        <p>
          <span className={spanClass}>Status: </span>
          {person.status}
        </p>

        {person.photoUrl && (
          <div className="relative h-[20rem]">
            <Image
              layout="fill"
              objectFit="contain"
              src={`${sburl}/${person.photoUrl}`}
              className="rounded-md"
            />
          </div>
        )}
        <div className="card-actions justify-end">
          <Link href={`/missing/${person.id}`}>
            <a className="btn btn-primary">More Info</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
