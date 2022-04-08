import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  id: string;
  [x: string]: any;
}

const MyChechbox = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label htmlFor={props.id}>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </>
  );
};

export default MyChechbox;
