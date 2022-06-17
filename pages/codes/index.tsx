import CodeNav from "@/components/CodeNav";
import Radio from "@/components/Radio";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Codes } from "types";

const CodesIndex: NextPage<{ radios: Codes[] }> = ({ radios }) => {
  return (
    <>
      <NextSeo
        title={`${process.env.NEXT_PUBLIC_SITE_TITLE} -  Radio Codes`}
        description="AV Scanner News Radio Codes. What do the codes mean?"
      />
      <div className="code-container">
        <CodeNav />
        {radios.map((radio) => (
          <Radio radio={radio} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://avscanner.herokuapp.com/radios?_limit=-1&_sort=created_at:asc"
  );
  const radios = await res.json();

  return {
    props: { radios },
  };
}

export default CodesIndex;
