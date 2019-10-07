const INITIAL_STATE = {};

const authReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
