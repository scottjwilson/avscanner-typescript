import CodeNav from "@/components/CodeNav";
import type { NextPage } from "next";
import { Codes } from "types";

const CodesIndex: NextPage<{ radios: Codes[] }> = ({ radios }) => {
  return (
    <div>
      <CodeNav />
      {radios.map((radio) => (
        <h1>{JSON.stringify(radio)}</h1>
      ))}
    </div>
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
