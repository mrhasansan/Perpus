import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const chekUserToken = () => {
    const userToken = localStorage.getItem("library");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      return navigate("/login");
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    chekUserToken();
  }, [isLoggedIn]);
  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};
export default ProtectedRoute;
