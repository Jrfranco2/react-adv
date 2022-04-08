import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  id: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

const MyTextInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </>
  );
};

export default MyTextInput;
