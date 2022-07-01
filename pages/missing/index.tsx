import Loading from "@/components/Loading";
import PersonCard from "@/components/PersonCard";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";

import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useQuery } from "react-query";

const MissingIndex: NextPage = () => {
  // const personsQuery = usePersons();
  const title = `${process.env.NEXT_PUBLIC_SITE_TITLE} -  Missing Persons`;
  const description = "AV Scanner News Missing Persons";

  const getPersons = async () => {
    const { data, error } = await supabaseClient
      .from("missing_persons")
      .select("*");
    if (error) {
      throw new Error(error.message);
    }
    return data;
  };

  const personsQuery = useQuery("persons", () => getPersons());

  return (
    <>
      <NextSeo title={title} description={description} />
      <section className="max-w-xl mx-auto px-4">
        <h1 className="text-center mb-4">Missing Persons</h1>
        {personsQuery.isLoading ? (
          <Loading />
        ) : personsQuery.isError ? (
          <span>Something went wrong</span>
        ) : (
          <div className="flex flex-col items-center w-full ">
            {personsQuery.data.map((person, i) => {
              return (
                <PersonCard
                  key={i}
                  person={person}
                  photoUrl={undefined}
                  id={""}
                />
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default MissingIndex;
