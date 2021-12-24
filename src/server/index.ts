import axios from "axios";

function login(uname: any, psw: any) {
  return axios.post("http://localhost:8080/login", {
    uname,
    psw,
  });
}

export { login };
