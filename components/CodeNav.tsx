import Link from "next/link";
import { useRouter } from "next/router";
import { linkData } from "@/data/codelinks";

export default function CodeNav() {
  const router = useRouter();
  const active = `btn btn-ghost border-primary border-b-4`;
  const notactive = `btn btn-ghost`;
  return (
    <ul className="flex justify-center">
      {linkData.map((link) => (
        <Link key={link.id} href={link.href}>
          <a className={router.pathname === link.href ? active : notactive}>
            {link.text}
          </a>
        </Link>
      ))}
    </ul>
  );
}
