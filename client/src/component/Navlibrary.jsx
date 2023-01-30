import React, { useState } from "react";
import { Navbar, NavbarBrand, DropdownToggle, DropdownItem, Button, Dropdown, DropdownMenu, ButtonGroup } from "reactstrap";
import library from "../asset/library.webp";
import { Avatar, AvatarBadge, Spinner, Menu, MenuButton, MenuList, MenuItem, MenuDivider } from "@chakra-ui/react";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/userActions";
import { useNavigate, Link } from "react-router-dom";

function Navlibrary(props, direction, ...args) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

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
      <Navbar {...args} style={{ background: "#01132B" }} className="mx-3 mb-0">
        <img src={library} style={{ height: 70, width: 70 }} />
        <NavbarBrand href="/" style={{ color: "#FFFFFF" }}>
          Beranda
        </NavbarBrand>
        <NavbarBrand href="/" style={{ color: "#FFFFFF" }}>
          Profil
        </NavbarBrand>
        <NavbarBrand href="/" style={{ color: "#FFFFFF" }}>
          Koleksi
        </NavbarBrand>
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} direction={direction}>
          <DropdownToggle caret style={{ background: "#01132B" }}>
            Layanan
          </DropdownToggle>
          <DropdownMenu {...args}>
            <DropdownItem href="/">Peminjaman</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="/">Pembelian</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="/">Unggah Skripsi</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarBrand href="/" style={{ color: "#FFFFFF" }}>
          Informasi
        </NavbarBrand>
        <div className="d-flex p-5"></div>
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
                  <MenuItem>Products Management</MenuItem>
                  <MenuItem>Transactions Management</MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem>Transactions</MenuItem>
                  <MenuItem>Profile</MenuItem>
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
          <ButtonGroup>
            <Link to="/login" className="mx-3">
              <Button style={{ background: "#01132B" }}>Login</Button>
            </Link>
            <Link to="/register" className="mx-3">
              <Button style={{ background: "#01132B" }}>Register</Button>
            </Link>
          </ButtonGroup>
        )}
      </Navbar>
    </>
  );
}

export default Navlibrary;
