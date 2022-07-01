import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { useQuery } from "react-query";

const getPersons = async () => {
  const { data, error } = await supabaseClient
    .from("missing_persons")
    .select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export default function usePersons() {
  return useQuery("persons", () => getPersons());
}
