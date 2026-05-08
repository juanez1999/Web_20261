import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { authService } from "../firebase/firebaseConfig";

export const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(authService, email, password)
      .then()
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorCode === "auth/email-already-in-use") {
          alert("Email ya en uso, intenta con uno nuevo");
        }
        // ..
      });
  };

  return (
    <>
      <h1>Register</h1>
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
        <button onClick={(e: any) => handleSubmit(e)}>Register</button>
      </form>
    </>
  );
};
