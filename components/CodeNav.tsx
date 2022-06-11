import Link from "next/link";
import { useRouter } from "next/router";
import { linkData } from "@/data/codelinks";

export default function CodeNav() {
  const router = useRouter();
  return (
    <ul>
      {linkData.map((link) => (
        <Link key={link.id} href={link.href}>
          <a className="btn btn-ghost">{link.text}</a>
        </Link>
      ))}
    </ul>
  );
}