import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

const FormikYupPage = () => {
  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .required("Required")
          .max(15, "Must be 15 characters or less"),
        lastName: Yup.string()
          .required("Required")
          .max(20, "Must be 20 characters or less"),
        email: Yup.string().required("Required").email("Invalid email address"),
      }),
    });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="new-text"
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="new-text"
        />
        {touched.firstName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="new-text"
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikYupPage;
