import axios from "axios";

function login(username: String, password: string) {
  return axios.post("http://localhost:8080/login", {
    username,
    password,
  });
}

export { login };
