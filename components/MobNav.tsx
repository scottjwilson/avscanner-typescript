import { linkData } from "@/data/links";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  FaRegNewspaper,
  FaRegEye,
  FaRegQuestionCircle,
  FaRegEnvelopeOpen,
  FaRegIdCard,
} from "react-icons/fa";
export default function MobNav() {
  const router = useRouter();
  const navClasses = `fixed bottom-0 inset-x-0 flex md:hidden justify-between max-w-2xl mx-auto rounded-3xl z-50 bg-base-200`;
  const linkClasses = `w-full h-full p-4 text-center flex flex-col items-center capitalize border-t-4 border-transparent`;
  const activeClasses = `w-full h-full p-4 text-center flex flex-col items-center capitalize border-t-4 border-primary`;
  return (
    <nav className={navClasses}>
      <Link href="/">
        <a className={router.pathname === "/" ? activeClasses : linkClasses}>
          <FaRegNewspaper />
          News
        </a>
      </Link>
      <Link href="/missing">
        <a
          className={
            router.pathname === "/missing" ? activeClasses : linkClasses
          }
        >
          <FaRegEye />
          Missing
        </a>
      </Link>
      <Link href="/codes">
        <a
          className={router.pathname === "/codes" ? activeClasses : linkClasses}
        >
          <FaRegQuestionCircle />
          Codes
        </a>
      </Link>
      <Link href="/contact">
        <a
          className={
            router.pathname === "/contact" ? activeClasses : linkClasses
          }
        >
          <FaRegEnvelopeOpen />
          Contact
        </a>
      </Link>
      <Link href="/archive">
        <a
          className={
            router.pathname === "/archive" ? activeClasses : linkClasses
          }
        >
          <FaRegNewspaper />
          Archive
        </a>
      </Link>
    </nav>
  );
}
