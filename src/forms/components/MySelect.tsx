import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  id: string;
  [x: string]: any;
}

const MySelect = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
      {/* {meta.touched && meta.error && <span>{meta.error}</span>} */}
    </>
  );
};

export default MySelect;
