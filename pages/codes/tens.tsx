import CodeNav from "@/components/CodeNav";
import Radio from "@/components/Radio";
import { NextPage } from "next";
import { Codes } from "types";

const TensIndex: NextPage<{ tens: Codes[] }> = ({ tens }) => {
  return (
    <div className="code-container">
      {" "}
      <CodeNav />{" "}
      {tens.map((ten) => (
        <Radio radio={ten} />
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
