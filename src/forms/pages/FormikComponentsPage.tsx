import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

const FormikComponentsPage = () => {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required("Required")
            .max(15, "Must be 15 characters or less"),
          lastName: Yup.string()
            .required("Required")
            .max(20, "Must be 20 characters or less"),
          email: Yup.string()
            .required("Required")
            .email("Invalid email address"),
        })}
      >
        {() => (
          <Form noValidate>
            <label htmlFor="firstName">First Name</label>
            <Field
              name="firstName"
              type="text"
              autoComplete="new-text"
              id="firstName"
            />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field
              name="lastName"
              type="text"
              autoComplete="new-text"
              id="lastName"
            />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email Address</label>
            <Field
              name="email"
              type="text"
              autoComplete="new-text"
              id="email"
            />
            <ErrorMessage name="email" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikComponentsPage;
