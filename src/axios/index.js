import axios from "axios";

const instance = axios.create({
  headers: { Host: "driveline-assessment-gateway.herokuapp.com" }
});

export default instance;
