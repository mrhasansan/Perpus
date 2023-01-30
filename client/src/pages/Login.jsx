import React from "react";
import { Col, Container, Row, FormGroup, InputGroupText, Label, Input, InputGroup, Button } from "reactstrap";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import login from "../asset/login.png";
import Axios from "axios";
import { useState } from "react";
import { API_URL } from "../helper";
import { loginAction } from "../actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onBtnLogin = () => {
    // alert(` pasword : ${inputPassword} and username :${inputUsername}`);
    Axios.post(API_URL + `/users/login`, {
      username: inputUsername,
      password: inputPassword,
    })
      .then((response) => {
        console.log(response.data);
        dispatch(loginAction(response.data));
        localStorage.setItem("library", response.data.token);
        navigate("/", { replace: true });
        // alert(response.data.message);
      })
      .catch((error) => {
        console.log("Check error", error);
      });
  };

  return (
    <Container className="m-3">
      <Row>
        <Col xs="12" md="6" style={{ background: "#192D71", color: "#FFFFFF" }}>
          <h1>WE SHARE</h1>
          <Container>
            <img alt="Sample" src={login} style={{ height: 400, width: 400 }} />
          </Container>
          <h2> Visit us to read your favourite book</h2>
        </Col>
        <Col className="bg-light border text-start" xs="12" md="6" style={{ background: "#ECECEC" }}>
          <h2>Welcome Back</h2>
          <FormGroup>
            <Label>username</Label>
            <InputGroup>
              <InputGroupText>
                <FaUserAlt />
              </InputGroupText>
              <Input placeholder="input username" type="text" md={4} onChange={(e) => setInputUsername(e.target.value)} />
            </InputGroup>
            <Label>Password</Label>
            <InputGroup>
              <InputGroupText>
                <AiFillEyeInvisible />
              </InputGroupText>
              <Input placeholder=" input password" type="password" md={4} onChange={(e) => setInputPassword(e.target.value)} />
            </InputGroup>
            <Container className="form-check d-flex justify-content-between my-2">
              <div>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label">Remember Me</label>
              </div>
              <h6> Forgot Password</h6>
            </Container>
          </FormGroup>
          <Col className="justify-content-center my-3">
            <Button className="w-100" style={{ background: "#192D71" }} onClick={onBtnLogin}>
              Sign In
            </Button>
          </Col>
          <FormGroup style={{ background: "#FFFFFF", borderRadius: "5px" }} className="d-flex justify-content-center align-items-center">
            <FcGoogle size={36} className="m-2" /> <span> Sign up with Google</span>
          </FormGroup>
          <FormGroup style={{ background: "#FFFFFF", borderRadius: "5px" }} className="d-flex justify-content-center align-items-center">
            <FaFacebook size={36} className="m-2 " color="#4267B2" />
            <div> Sign up with Facebook</div>
          </FormGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
