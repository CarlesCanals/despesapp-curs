import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { iniciarSessio } from "../../firebase/firebase";
import LoginForm from "../../components/loginform/LoginForm";


export default function Login() {
  return (
    <div>
      <h1>Pàgina de Login</h1>
      <LoginForm />
    </div>
  );
}