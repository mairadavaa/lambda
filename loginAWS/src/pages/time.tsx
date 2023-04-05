import axios from 'axios';
import { Login_data } from "../context/context";
import { useContext } from "react";
function Time() {
  const { data, setData } = useContext(Login_data)
  console.log(data)

  function getUserTime(e) {
    e.preventDefault()
    return axios.post(`https://vivc8rg09c.execute-api.us-east-1.amazonaws.com/dev/timepost`, data);
  }
  return (

    <form onSubmit={getUserTime}>
      <button type="submit">tsagaa byrtgyylne yy</button>
    </form>
  )
}
export default Time