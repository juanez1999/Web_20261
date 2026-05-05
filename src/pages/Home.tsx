import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { authService } from "../firebase/firebaseConfig";

export const Home = () => {
  const context = useContext(AuthContext);
  console.log(context?.user?.uid);

  //   const { data, error } = await supabase
  //   .from('your_table_name')
  //   .update({ status: 'completed' })
  //   .eq('id', context?.user?.uid)

  return (
    <>
      <h1>Home</h1>
      <button style={{ width: "150px" }} onClick={() => signOut(authService)}>
        Sign out
      </button>
    </>
  );
};
