import CodeNav from "@/components/CodeNav";
import { NextPage } from "next";
import { Codes } from "types";

const TensIndex: NextPage<{ tens: Codes[] }> = ({ tens }) => {
  return (
    <div>
      {" "}
      <CodeNav />{" "}
      {tens.map((ten) => (
        <h1>{JSON.stringify(ten)}</h1>
      ))}
    </div>
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
