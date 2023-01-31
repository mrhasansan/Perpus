import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { API_URL } from "./helper";
import { loginAction } from "./actions/userActions";
import Navlibrary from "./component/Navlibrary";
import Profil from "./pages/Profil";
import ProtectedRoute from "./routes/ProtectedRoute";
import Landing from "./pages/Landing";
import Navham from "./component/Navham";
import Product from "./pages/Product";
import RegisProduct from "./pages/RegisProduct";
import Detail from "./pages/Detail";
import VerificationPage from "./pages/Verification";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const keepLogin = () => {
    let getLocalStorage = localStorage.getItem("library");
    console.log(getLocalStorage);
    if (getLocalStorage) {
      Axios.get(API_URL + `/users/keep`, {
        headers: {
          Authorization: `Bearer ${getLocalStorage}`,
        },
      })
        .then((res) => {
          dispatch(loginAction(res.data));
          setLoading(false);
          localStorage.setItem("library", res.data.token);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };
  useEffect(() => {
    keepLogin();
  }, []);
  return (
    <div className="App">
      {/* <Navlibrary /> */}
      <Navham />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              {" "}
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/registerproduct" element={<RegisProduct />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute exact path="/">
              <Profil />
              {/* <Route path="/user" element={<Dashboard />} /> */}
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<h1>Page Not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
