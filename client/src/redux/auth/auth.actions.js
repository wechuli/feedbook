import axios from "axios";
import authTypes from "./auth.types";
import server from "../../server";

export const fetchUser = () => {
  return function(dispatch) {
    axios
      .get(`${server}/api/auth/current_user`)
      .then(res =>
        dispatch({
          type: authTypes.FETCH_USER,
          payload: res
        })
      )
      .catch(error =>
        dispatch({
          type: authTypes.FETCH_USER,
          payload: error
        })
      );
  };
};
