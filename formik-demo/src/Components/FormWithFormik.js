import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be 6 characters or less";
  }
  return errors;
};

const SignupForm = () => {
  return (
    <div className="container">
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validate={validate}
        onSubmit={(values) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 400);
        }}
      >
        <Form>
          <div className="textInput">
            <label>Email</label>
            <Field name="email" type="email" />
            <div className="error">
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="textInput">
            <label>Password</label>
            <Field name="password" type="text" />
            <div className="error">
              <ErrorMessage name="password" />
            </div>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
