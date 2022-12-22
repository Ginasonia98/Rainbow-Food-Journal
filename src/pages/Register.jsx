import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarSection from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Select from "react-select";

import { postRegisterUSer } from "../services/api";

const FormRegister = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [role, setRole] = useState("");
  const [choosenRole, setChoosenRole] = useState({
    value: "",
    label: "Select Your Role",
  });
  const [profilePictureUrl, setprofilePictureUrl] = useState("");
  const options = [
    { value: "general", label: "General" },
    { value: "admin", label: "Admin" },
  ];
  const [phoneNumber, setphoneNumber] = useState("");
  const handleGoToLogin = () => {
    navigate("/login");
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePasswordRepeat = (e) => {
    setPasswordRepeat(e.target.value);
  };

  const handleChangeRole = (e) => {
    setChoosenRole(e);
    setRole(e.value);
  };

  const handleChangeProfileUrl = (e) => {
    setprofilePictureUrl(e.target.value);
  };

  const handleChangePhoneNumber = (e) => {
    setphoneNumber(e.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
      passwordRepeat: passwordRepeat,
      role: role,
      profilePictureUrl: profilePictureUrl,
      phoneNumber: phoneNumber,
    };

    const response = await postRegisterUSer(data);
    if (response.code === "200") {
      handleGoToLogin();
    }
  };

  return (
    <div>
      <NavbarSection />
      <img
        className="food2 "
        src="https://i.pinimg.com/564x/03/5a/59/035a591e8dc57b67b32661ff79439188.jpg"
        alt="Food"
      />
      <Form className="register-container">
        <h1 className="register">Register</h1>
        <p className="already">
          Already have an account?
          <span onClick={handleGoToLogin} className="login">
            Login
          </span>
        </p>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <br />
          <Form.Control
            onChange={handleChangeName}
            type="name"
            placeholder="Input Your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <br />
          <Form.Control
            onChange={handleChangeEmail}
            type="email"
            placeholder="Input Your email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <br />
          <Form.Control
            onChange={handleChangePassword}
            type="password"
            placeholder="Input Your Password"
          />
          <Form.Text className="text-muted">
            Password must contain atleast one letter and one number
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={handleChangePasswordRepeat}
            type="password"
            placeholder="Input Your Password"
          />
          <Form.Text className="text-muted">Passwords must match</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Role</Form.Label>
          <Select
            value={choosenRole}
            onChange={handleChangeRole}
            options={options}
          />
          <Form.Text className="text-muted">Required</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Profile Picture URL</Form.Label>
          <Form.Control
            onChange={handleChangeProfileUrl}
            type="text"
            placeholder="Profile Picture URL"
          />
          <Form.Text className="text-muted">Required</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number </Form.Label>
          <Form.Control
            onChange={handleChangePhoneNumber}
            type="text"
            placeholder="Phone Number"
          />
          <Form.Text className="text-muted">Required</Form.Text>
        </Form.Group>
        <Button
          variant="warning"
          onClick={handleSubmit}
          type="submit"
          className="button2"
        >
          <div className="submit">Submit</div>
        </Button>
      </Form>
      <Footer />
    </div>
  );
};

export default FormRegister;
