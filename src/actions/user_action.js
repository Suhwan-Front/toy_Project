export const LOGIN = "LOGIN";
export const LOGIN_KEEP = "LOGIN_KEEP";

export const authLogin = (email, password) => ({
  type: LOGIN,
  email: "test@gmail.com",
  password: "1234",
});

export const loginKeep = (userKeep) => ({
  type: LOGIN_KEEP,
  userKeep: false,
});

const initialState = {
  email: "test@gmail.com",
  passowrd: "1234",
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.email,
        password: action.password,
      };

    case LOGIN_KEEP:
      return {
        userKeep: action.loginKeep,
      };

    default:
      return state;
  }
};
