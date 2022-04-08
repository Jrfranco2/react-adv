import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  id: string;
  [x: string]: any;
}

const MySelect = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </>
  );
};

export default MySelect;