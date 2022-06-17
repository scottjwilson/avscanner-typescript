import CodeNav from "@/components/CodeNav";
import Radio from "@/components/Radio";

import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Codes } from "types";

const StandardIndex: NextPage<{ standards: Codes[] }> = ({ standards }) => {
  return (
    <>
      <NextSeo
        title={`${process.env.NEXT_PUBLIC_SITE_TITLE} -  Standard Codes`}
        description="AV Scanner News Standard Codes. What do the codes mean?"
      />
      <div className="code-container">
        <CodeNav />
        {standards.map((standard) => (
          <Radio radio={standard} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://avscanner.herokuapp.com/codes?_sort=created_at:asc"
  );
  const standards = await res.json();

  return {
    props: { standards },
  };
}

export default StandardIndex;
