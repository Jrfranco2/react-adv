import { Formik, Form } from "formik";
import { FC } from "react";
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/customForm.json";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input.validations?.length) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `Este campo debe tener al menos ${(rule as any).value} caracteres`
      );
    }
    if (rule.type === "email") {
      schema = schema.email("Este campo debe ser un email válido");
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

const DynamicFormPage: FC = () => {
  return (
    <div>
      <h1>Dynamic Form Page</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <Form noValidate>
            {formJson.map(({ type, name, label, id, placeholder, options }) => {
              switch (type) {
                case "input":
                case "password":
                case "textarea":
                case "email":
                  return (
                    <MyTextInput
                      key={id}
                      id={id}
                      type={type}
                      name={name}
                      label={label}
                      placeholder={placeholder}
                    />
                  );
                case "select":
                  return (
                    <MySelect
                      key={id}
                      id={id}
                      type={type}
                      name={name}
                      label={label}
                    >
                      <option value="">Select an option</option>
                      {options?.map(({ id, label }) => (
                        <option key={id} value={label}>
                          {label}
                        </option>
                      ))}
                    </MySelect>
                  );
              }
              throw new Error(`El type: ${type} no es soportado`);
            })}
            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicFormPage;
