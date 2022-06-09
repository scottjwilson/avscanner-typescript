import CodeNav from "@/components/CodeNav";
import type { NextPage } from "next";

const StandardIndex: NextPage = ({ standards }) => {
  return (
    <div>
      <CodeNav />

      {standards.map((standard) => (
        <h1>{JSON.stringify(standard)}</h1>
      ))}
    </div>
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
