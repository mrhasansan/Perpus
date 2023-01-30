export const loginAction = (data) => {
  console.log("data from component ", data);
  return {
    type: "LOGIN_SUKSES",
    payload: data,
  };
};
export const logoutAction = () => {
  localStorage.removeItem("library");
  return {
    type: "LOGOUT",
  };
};
