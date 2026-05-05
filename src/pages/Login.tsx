import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { authService } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(authService, email, password)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <button onClick={(e: any) => handleSubmit(e)}>Login</button>
      </form>
    </>
  );
};
