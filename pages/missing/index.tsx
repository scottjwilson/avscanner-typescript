import PersonCard from "@/components/PersonCard";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "react-query";

const MissingIndex: NextPage = () => {
  const [persons, setPersons] = useState("");
  async function fetchPersons() {
    const res = await supabaseClient.from("missing_persons").select("*");
    return res;
  }

  function Persons() {
    const { data: persons, status } = useQuery("posts", fetchPersons, {
      staleTime: 0,
      // cacheTime: 10,
    });
    if (status === "loading") {
      return <p>Loading...</p>;
    }
    if (status === "error") {
      return <p>Error...</p>;
    }
    if (status === "success") {
      return (
        <>
          {" "}
          <div className="flex flex-col items-center w-full ">
            {persons.data.map((person, i) => {
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
        </>
      );
    }
  }

  return (
    <>
      <NextSeo
        title={`${process.env.NEXT_PUBLIC_SITE_TITLE} -  Missing Persons`}
        description="AV Scanner News Missing Persons"
      />
      <div className="max-w-xl mx-auto px-4">
        <Link href="/missing/add">
          <a className="btn btn-outline mb-4">add new</a>
        </Link>

        <Persons />
      </div>
    </>
  );
};

export default MissingIndex;
