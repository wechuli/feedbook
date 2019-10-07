import axios from "axios";
import authTypes from "./auth.types";

export const fetchUser = () => {
  return function(dispatch) {
    axios.get("/api/auth/current_user").then(res =>
      dispatch({
        type: authTypes.FETCH_USER,
        payload: res
      })
    );
  };
};
