import axios from "axios";
import authTypes from "./auth.types";
import server from "../../server";

export const fetchUser = () => {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${server}/api/auth/current_user`);
      dispatch({
        type: authTypes.FETCH_USER,
        payload: response
      });
    } catch (error) {}
  };
};
