import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

const Form = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="passwors" />
        <label htmlFor="cpassword">Confirm Password</label>
        <input type="password" name="cpassword" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
