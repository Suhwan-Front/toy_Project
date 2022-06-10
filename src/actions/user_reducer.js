const initialState = {
  loginAuth: {},
  loginKeep: true,
};

const loginReducer = (action, state = initialState) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, loginAuth: action};
    case 'LOGIN_KEEP':
      return {};
    default:
      return state;
  }
};

export default loginReducer;
