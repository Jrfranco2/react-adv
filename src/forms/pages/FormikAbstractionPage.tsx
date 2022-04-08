import { Form, Formik } from "formik";
import * as Yup from "yup";
import MyChechbox from "../components/MyChechbox";
import MySelect from "../components/MySelect";
import MyTextInput from "../components/MyTextInput";
import "../styles/styles.css";

const FormikAbstractionPage = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
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
          terms: Yup.boolean().oneOf(
            [true],
            "Please, accept terms && conditions"
          ),
          jobType: Yup.string().required("Required"),
        })}
      >
        {() => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              id="firstName"
              autoComplete="new-text"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              id="lastName"
              autoComplete="new-text"
            />

            <MyTextInput
              label="Email Address"
              placeholder="email@email.com"
              name="email"
              id="email"
              autoComplete="new-text"
              type="email"
            />

            <MySelect label="Job Type" name="jobType" id="jobType">
              <option value="">Pick a job...</option>
              <option value="FrontEnd Developer">FrontEnd Developer</option>
              <option value="Designer">Designer</option>
              <option value="BackEnd Developer">BackEnd Developer</option>
              <option value="DevOps">DevOps</option>
            </MySelect>

            <MyChechbox label="Terms && Conditions" id="terms" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikAbstractionPage;
