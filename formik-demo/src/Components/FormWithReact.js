import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    email: {
      value: "",
      error: "",
      valid: "",
      touched: "",
    },
    password: {
      value: "",
      error: "",
      valid: "",
      touched: "",
    },
  });

  const handleValidation = (target) => {
    const { value, name } = target;
    let error = "";
    let valid = true;
    const isEmail = name === "email";
    const isPassword = name === "password";
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (value.length === 0) {
      valid = false;
      error = "Required";
    } else if (isEmail && !emailTest.test(value)) {
      valid = false;
      error = "Invalid email address";
    } else if (isPassword && value.length < 6) {
      valid = false;
      error = "Password must be 6 characters or less";
    }
    return { valid, error };
  };

  const handleChange = (e) => {
    const updatedFormData = { ...formData };
    const { valid, error } = handleValidation(e.target);
    updatedFormData[e.target.name] = {
      ...updatedFormData[e.target.name],
      value: e.target.value,
      touched: true,
      valid,
      error,
    };
    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert(
        JSON.stringify(
          { email: email.value, password: password.value },
          null,
          2
        )
      );
    }, 400);
  };

  const { email, password } = formData;

  return (
    <div className="container">
      <h1>Subscribe!</h1>
      <form onSubmit={handleSubmit}>
        <div className="textInput">
          <label>Email</label>
          <input
            name="email"
            value={email.value}
            onBlur={handleChange}
            onChange={handleChange}
          />
          {email.error && email.touched ? (
            <div className="error">{email.error}</div>
          ) : (
            ""
          )}
        </div>
        <div className="textInput">
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={password.value}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {password.error && password.touched ? (
            <div className="error">{password.error}</div>
          ) : (
            ""
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
