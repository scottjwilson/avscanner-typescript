import PersonCard from "@/components/PersonCard";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

const MissingIndex: NextPage = () => {
  const [persons, setPersons] = useState("");
  async function fetchPersons() {
    const { data } = await supabaseClient.from("missing_persons").select("*");
    setPersons(data);
  }
  useEffect(() => {
    fetchPersons();
  }, []);
  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/missing/add">
        <a className="btn btn-outline">add new</a>
      </Link>

      {persons && (
        <div className="flex flex-col items-center w-full ">
          {persons.map((person, i) => {
            return <PersonCard key={i} person={person} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MissingIndex;
