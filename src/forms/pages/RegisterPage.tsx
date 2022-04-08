import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

const RegisterPage = () => {
  const { email, name, password, password1, onChange, formData, resetForm } =
    useForm({
      name: "",
      email: "",
      password: "",
      password1: "",
    });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Repeat Password"
          name="password1"
          value={password1}
          onChange={onChange}
        />
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
