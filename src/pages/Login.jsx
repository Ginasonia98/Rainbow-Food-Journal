import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarSection from "../components/Navbar";
import { useState } from "react";

import { postLoginUser } from "../services/api";

const FormLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoToRegister = () => {
    navigate("/register");
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    const user = {
      email: email,
      password: password,
    };

    const response = await postLoginUser(user);

    if (response.code === "200") {
      localStorage.setItem("token", response.token);
      navigate("/home");
    }
  };

  return (
    <div>
      <NavbarSection />
      <img
        className="food "
        src="https://i.pinimg.com/564x/04/c5/ae/04c5ae01f5ae97af44b4c4b5fe3fb460.jpg"
        alt="Food"
      />
      <Form className="login-container">
        <h1 className="register">Login</h1>
        <p className="already">
          Don't have an account?
          <span onClick={handleGoToRegister} className="register1">
            Register
          </span>
        </p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChangeEmail}
            type="email"
            placeholder="Input Your email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChangePassword}
            type="password"
            placeholder="Input Your Password"
          />
          <Form.Text className="text-muted">
            Password must contain atleast one letter and one number
          </Form.Text>
        </Form.Group>
        <Button variant="warning" onClick={handleSubmit} className="button1">
          <div className="submit">Submit</div>
        </Button>
      </Form>
      <Footer />
    </div>
  );
};

export default FormLogin;
