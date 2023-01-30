import React from "react";
import regisroom from "../asset/regisroom.png";
import { Container, Row, Col, Form, Label, FormGroup, Button, Input, InputGroup, InputGroupText, NavbarBrand } from "reactstrap";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaUserAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { AiTwotonePhone, AiFillEyeInvisible } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { useState } from "react";
import { API_URL } from "../helper";
import Axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPasword] = useState("");
  const [lastId, setLastId] = useState("");

  const onBtnRegis = () => {
    Axios.post(API_URL + `/users/register`, {
      username,
      email,
      phone,
      gender,
      address,
      password,
    })
      .then((response) => {
        console.log(response.data);
        alert("Registrasi Sukses");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container className="m-3">
      <Row className="rounded">
        <Col className="bg-light " xs="12" md="4">
          <img alt="Sample" src={regisroom} style={{ height: 450, width: "100%", resizeMode: "stretch" }} />
          <Container style={{ background: "#192D71", color: "#939E10", height: 150, alignItems: "center", display: "flex" }}>
            <h3>Borrow books easily without any hassle</h3>
          </Container>
        </Col>
        <Col className="bg-light" xs="12" md="8">
          <h1>Register your Account</h1>
          <Form className="text-start m-2">
            <Container className="bg-light ">
              <Row>
                <Col md={6}>
                  <Label>Username</Label>
                  <FormGroup className="d-flex justify-content-between ">
                    <InputGroup>
                      <InputGroupText>
                        <FaUserAlt />
                      </InputGroupText>
                      <Input placeholder="input Name " type="text" md={4} onChange={(e) => setUsername(e.target.value)} />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Email</Label>
                    <InputGroup>
                      <InputGroupText>
                        <MdAttachEmail />
                      </InputGroupText>
                      <Input placeholder="input email " type="email" md={4} onChange={(e) => setEmail(e.target.value)} />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Phone Number</Label>
                    <InputGroup>
                      <InputGroupText>
                        <AiTwotonePhone />
                      </InputGroupText>
                      <Input placeholder="input phone number" type="number" md={4} onChange={(e) => setPhone(e.target.value)} />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label md={3}>Gender</Label>
                    <Form md={5}>
                      <FormGroup>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male" onChange={(e) => setGender(e.target.value)} />
                          <label className="form-check-label" for="inlineRadio1">
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female" onChange={(e) => setGender(e.target.value)} />
                          <label className="form-check-label" for="inlineRadio2">
                            Female
                          </label>
                        </div>
                      </FormGroup>
                    </Form>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label>Address</Label>
                    <InputGroup>
                      <InputGroupText>
                        <ImLocation2 />
                      </InputGroupText>
                      <Input placeholder="Input Adress" type="text" md={4} onChange={(e) => setAddress(e.target.value)} />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <Label>Password</Label>
                  <InputGroup>
                    <InputGroupText>
                      <AiFillEyeInvisible />
                    </InputGroupText>
                    <Input placeholder=" input password" type="password" md={4} onChange={(e) => setPasword(e.target.value)} />
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <Label>ID Number</Label>
                  <FormGroup className="d-flex justify-content-between ">
                    <Input placeholder="Generate Id Number " type="text" md={4} disabled />
                    <Button>Generate</Button>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="my-3">
                <Col md={12}>
                  <Button className="w-100" style={{ background: "#192D71" }} onClick={onBtnRegis}>
                    Create Account
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
          <Row className="my-2">
            <Col md={6}>
              <FormGroup style={{ background: "#FFFFFF", borderRadius: "5px" }} className="d-flex justify-content-center align-items-center">
                <FcGoogle size={36} className="m-2" /> <span> Sign up with Google</span>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style={{ background: "#FFFFFF", borderRadius: "5px" }} className="d-flex justify-content-center align-items-center">
                <FaFacebook size={36} className="m-2 " color="#4267B2" />
                <div> Sign up with Facebook</div>
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
