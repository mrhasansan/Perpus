const INITIAL_STATE = {
  username: "",
  idNumber: "",
  role: "",
  authenticated: false,
};
export const userReducer = (state = INITIAL_STATE, action) => {
  console.log("data from action", action);
  switch (action.type) {
    case "LOGIN_SUKSES":
      return { ...state, ...action.payload, authenticated: true };
    case "LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
};
