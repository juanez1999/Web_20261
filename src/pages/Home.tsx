import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { authService } from "../firebase/firebaseConfig";
import { supabase } from "../services/supabase";

export const Home = () => {
  const context = useContext(AuthContext);
  const [title, setTitle] = useState<string>();
  const [tasksList, setTasksList] = useState<any>([]);

  //Traer datos de supabase
  const getTasks = async () => {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", context?.user.uid);

    if (error) console.error(error);
    setTasksList(data);
  };

  //Agregar datos a supabase
  const createTask = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("tasks")
      .insert([{ title: title, user_id: context?.user?.uid }]);

    if (error) console.error(error);

    getTasks();
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <main>
        <form>
          <input
            placeholder="Titulo de la tarea"
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={(e) => createTask(e)}>Crear tarea</button>
        </form>
        {tasksList.map((task) => (
          <div>
            <h3>{task.title}</h3>
            <img src={task.image} />
          </div>
        ))}
      </main>
      <button style={{ width: "150px" }} onClick={() => signOut(authService)}>
        Sign out
      </button>
    </>
  );
};
