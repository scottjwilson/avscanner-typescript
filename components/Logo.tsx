import Link from "next/link";

export default function Logo() {
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
