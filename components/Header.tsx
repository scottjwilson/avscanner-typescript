import { linkData } from "@/data/links";
import Link from "next/link";

import { useUser } from "@supabase/supabase-auth-helpers/react";
import { useRouter } from "next/router";

export default function Header() {
  const { user, isLoading } = useUser();

  return (
    <div className=" w-full p-2 flex justify-center md:justify-between items-center mb-4">
      <Logo />
      <div className="flex items-center space-x-4">
        <Navbar />
        <UserDiv user={user} />
      </div>
    </div>
  );
}

function Logo() {
  const classes =
    "font-brand uppercase italic font-extrabold md:text-3xl text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-900 px-6";
  return (
    <div>
      <Link href="/">
        <a className={classes}>avscannernews</a>
      </Link>
    </div>
  );
}

function Navbar() {
  const classes = `hidden md:flex space-x-4`;
  const router = useRouter();
  return (
    <div className={classes}>
      {linkData.map((link) => (
        <Link key={link.id} href={link.href}>
          <a
            className={
              router.pathname === link.href
                ? "btn btn-ghost border-primary border-b-4"
                : "btn btn-ghost"
            }
          >
            {link.text}
          </a>
        </Link>
      ))}
    </div>
  );
}

function UserDiv({ user }: any) {
  return (
    <div className="md:flex hidden">
      {user ? (
        <Link href="/dashboard">
          <a className="btn">my account</a>
        </Link>
      ) : (
        <Link href="/signin">
          <a className="btn ">login</a>
        </Link>
      )}
    </div>
  );
}
