const INITIAL_STATE = {};

const authReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        user: {
          name: "Paul"
        }
      };
    default:
      return state;
  }
};

export default authReducer;
