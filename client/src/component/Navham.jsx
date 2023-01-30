import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import library from "../asset/library.webp";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/userActions";
import { Avatar, AvatarBadge, Spinner, Menu, MenuButton, MenuList, MenuItem, MenuDivider } from "@chakra-ui/react";

function Navham(props) {
  const [collapsed, setCollapsed] = useState(false);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { authenticated, username, role } = useSelector((state) => {
    return {
      username: state.userReducer.username,
      role: state.userReducer.role,
      authenticated: state.userReducer.authenticated,
    };
  });
  return (
    <>
      <Navbar color="faded" light className=" mx-3 mb-0" style={{ background: "#001C3D" }}>
        <NavbarBrand href="/" className="me-auto">
          <img src={library} style={{ height: 70, width: 70 }} />
        </NavbarBrand>
        {props.loading ? (
          <Spinner />
        ) : username && !props.loading ? (
          <Menu>
            <MenuButton type="button">
              <Avatar size="md" name={username}>
                <AvatarBadge boxSize="1em" bg="green.500" />
              </Avatar>
            </MenuButton>
            <MenuList textColor="black">
              {role == "admin" ? (
                <div>
                  <MenuItem>
                    <NavLink href="/registerproduct" style={{ color: "black" }}>
                      Products Management
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink href="/" style={{ color: "black" }}>
                      Transactions Management
                    </NavLink>
                  </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem>
                    <NavLink href="/product" style={{ color: "black" }}>
                      Tracsaction
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink href="/user" style={{ color: "black" }}>
                      Profil
                    </NavLink>
                  </MenuItem>
                </div>
              )}
              <MenuDivider />
              <MenuItem onClick={() => dispatch(logoutAction())}>
                Logout
                <AiOutlineLogout className="ms-2" />
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <>
            <FaBars onClick={toggleNavbar} className="me-2  " style={{ color: "#FFFFFF" }} />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavLink href="/login" style={{ color: "#FFFFFF" }} className=" d-flex justify-content-end me-3">
                  Login
                </NavLink>
                <NavLink href="/register" style={{ color: "#FFFFFF" }} className=" d-flex justify-content-end me-3">
                  Register
                </NavLink>
              </Nav>
            </Collapse>
          </>
        )}
        <Container className="d-flex justify-content-center align-items-center py-2 mx-3 mb-0" style={{ background: "#001F47" }}>
          <ul className={" d-flex list-unstyled "}>
            <li className="py-0 px-3">
              <Link to="/" style={{ color: "#FFFFFF" }}>
                BERANDA
              </Link>
            </li>
            <li className="py-0  px-3">
              <Link to="/" style={{ color: "#FFFFFF" }}>
                TUTORIAL
              </Link>
            </li>
            <li className="py-0  px-3">
              <Link to="/product" style={{ color: "#FFFFFF" }}>
                KATALOG
              </Link>
            </li>
            <li className="py-0  px-3">
              <Link to="/" style={{ color: "#FFFFFF" }}>
                JURNAL
              </Link>
            </li>
            <li className="py-0  p-3">
              <Link to="/" style={{ color: "#FFFFFF" }}>
                LAYANAN
              </Link>
            </li>
            <li className="py-0  pe-3">
              <Link to="/" style={{ color: "#FFFFFF" }}>
                KONTAK
              </Link>
            </li>
          </ul>
        </Container>
      </Navbar>
    </>
  );
}

export default Navham;
