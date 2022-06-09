import CodeNav from "@/components/CodeNav";

const TensIndex: NextPage = ({ tens }) => {
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
