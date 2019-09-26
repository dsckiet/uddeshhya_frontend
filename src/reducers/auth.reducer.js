const reducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return { user: action.user, token: action.token };
    case "UNSET":
      return { user: "", token: "" };
    default:
      return state;
  }
};
export default reducer;
