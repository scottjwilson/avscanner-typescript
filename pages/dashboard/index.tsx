import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { useRouter } from "next/router";

type Props = {};

export default function Dashboard({}: Props) {
  const router = useRouter();
  const handleLogout = async (e) => {
    e.preventDefault();

    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <h1>Welcomne</h1>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
}
