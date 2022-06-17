import CodeNav from "@/components/CodeNav";
import Radio from "@/components/Radio";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Codes } from "types";

const TensIndex: NextPage<{ tens: Codes[] }> = ({ tens }) => {
  return (
    <>
      <NextSeo
        title={`${process.env.NEXT_PUBLIC_SITE_TITLE} -  Sign Up`}
        description="AV Scanner News Sign Up"
      />
      <div className="code-container">
        {" "}
        <CodeNav />{" "}
        {tens.map((ten) => (
          <Radio radio={ten} />
        ))}
      </div>
    </>
  );
};
export async function getStaticProps() {
  const res = await fetch(
    "https://avscanner.herokuapp.com/tens?_sort=created_at:asc"
  );
  const tens = await res.json();

  return {
    props: { tens },
  };
}

export default TensIndex;
