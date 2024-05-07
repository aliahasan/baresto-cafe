import { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const useData = () => {
  const { logout } = useContext(AuthContext);
  useEffect(() => {
    instance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        console.error("Axios Error", error);
        if (error.response.status === 401 || error.response.status === 403) {
          logout();
        }
      }
    );
  }, [logout]);
  return instance;
};
export default useData;
