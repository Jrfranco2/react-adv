import { Form, Formik } from "formik";
import { MyTextInput } from "../components";
import "../styles/styles.css";
import * as Yup from "yup";
import { FC } from "react";

const RegisterFormikPage: FC = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password1: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Required")
            .max(15, "Must be 15 characters or less")
            .min(2, "Must be 2 characters or more"),
          email: Yup.string()
            .required("Required")
            .email("Invalid email address"),
          password: Yup.string()
            .required("Required")
            .min(6, "Must be 6 characters or more"),
          password1: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords must match"
          ),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput
              label="Nombre"
              name="name"
              id="name"
              autoComplete="new-text"
            />
            <MyTextInput
              label="Email"
              placeholder="email@email.com"
              name="email"
              id="email"
              autoComplete="new-text"
              type="email"
            />
            <MyTextInput
              label="Password"
              name="password"
              id="password"
              autoComplete="new-text"
              type="password"
            />
            <MyTextInput
              label="Repeat password"
              name="password1"
              id="password1"
              autoComplete="new-text"
              type="password"
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormikPage;
