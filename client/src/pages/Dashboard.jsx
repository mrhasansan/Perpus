import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Input, InputGroup, InputGroupText } from "reactstrap";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { RiDashboardFill, RiFileList2Fill } from "react-icons/ri";
import { SiBookstack } from "react-icons/si";
import { MdRecommend, MdPermContactCalendar } from "react-icons/md";
import { FaSearch, FaShoppingCart, FaBell } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import Navlibrary from "../component/Navlibrary";

function Dashboard() {
  const { username, role } = useSelector((state) => {
    return {
      username: state.userReducer.username,
      role: state.userReducer.role,
    };
  });

  return (
    <>
      <Row className="m-3">
        <Col xs="12" md="3" style={{ background: "#192D71", color: "white", alignItems: "center" }} className="my-3">
          <Avatar size="md" name={username} className="mt-4" />
          <p> Welcome {username}!</p>
          <ul className="list-unstyled ">
            <li className="d-flex my-3 align-items-center">
              <div>
                <RiDashboardFill size={24} className="me-2" color="#8190A3" />
              </div>
              <div className="mx-3">Dashboard</div>
            </li>
            <li className="d-flex my-3 align-items-center">
              <div>
                <SiBookstack size={24} className="me-2" color="#8190A3" />
              </div>
              <div className="mx-3">All Books</div>
            </li>
            <li className="d-flex my-3 align-items-center">
              <div>
                <RiFileList2Fill size={24} className="me-2" color="#8190A3" />
              </div>
              <div className="mx-3">My Order</div>
            </li>
            <li className="d-flex my-3 align-items-center">
              <div>
                <MdRecommend size={24} className="me-2" color="#8190A3" />
              </div>
              <div className="mx-3">Favourite Books</div>
            </li>
            <li className="d-flex my-3 align-items-center">
              <div>
                <MdPermContactCalendar size={24} className="me-2" color="#8190A3" />
              </div>
              <div className="mx-3">Contact Us</div>
            </li>
          </ul>
        </Col>
        <Col xs="12" md="9" style={{ background: "#F5F5F5" }} className="my-3">
          <Container className="d-flex justify-content-between my-3 mx-0">
            <h1>SnLibrary</h1>
            <div className="d-flex ">
              <FaBell className="mx-2" />
              <BsQuestionCircleFill className="mx-2" />
              <FaShoppingCart className="mx-2" />
            </div>
          </Container>
          <InputGroup>
            <InputGroupText>
              <FaSearch />
            </InputGroupText>
            <Input placeholder="Search..." type="text" />
          </InputGroup>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
