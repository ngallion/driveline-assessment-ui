import axios from "axios";

const instance = axios.create({
  headers: { Host: "driveline-assessment-ui.herokuapp.com" }
});

export default instance;
