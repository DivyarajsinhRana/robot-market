import axios from "axios";
import baseURL from "./Api";

// const getRobot = axios.get(baseURL);
const getRobot = async () => {
    const { data } = await axios.get(baseURL); // this holds the correct data {id:1,...}
    return data
    // setUser(data);
    // console.log(user); // setting this return nothing
  }

export default getRobot;