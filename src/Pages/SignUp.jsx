import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault()
    // 1. Hubi password & confirm password
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // 2. hel users hore u jiray
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // 3. hubi email hore u jiray
    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      alert("User already exists");
      return;
    }

    // 4. samee user cusub
    const newUser = {
      username,
      email,
      password,
    };

    // 5. ku dar array
    users.push(newUser);

    // 6. ku keydi localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
  };

  return (
    <form onSubmit={handleSignUp} className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 w-[300px] mx-auto mt-10">
      <h2 className="text-center text-xl font-bold">Sign Up</h2>

      <input onChange={(e) => setUsername(e.target.value)} className="border p-2 rounded-md" type="text" placeholder="Username" />
      <input onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded-md" type="email" placeholder="Email" />
      <input onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded-md" type="password" placeholder="Password" />
      <input onChange={(e) => setConfirmPassword(e.target.value)} className="border p-2 rounded-md" type="password" placeholder="Confirm Password" />

      <button className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600' type="submit">Sign Up</button>

      <p className="text-center">
        Already have an account? <Link className="pl-2 underline" to="/SignIn">Login</Link>
      </p>
    </form>
  );
};

export default SignUp;
