import * as React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Login_data } from "../context/context";
import { useContext } from "react";
export default function Homes() {
  const {data, setData } = useContext(Login_data)
  
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
   
  }
  function getUserAccount(e: any) {
    console.log(data)
    e.preventDefault();
    return axios.post(`https://vivc8rg09c.execute-api.us-east-1.amazonaws.com/dev/post`, data );
  }
    return(
        <form onSubmit={getUserAccount}>
        <label htmlFor="first">email</label>
        <input type="email" name="email" onChange={(e) => handleChange(e)} />

        <label htmlFor="last">password</label>
        <input name="password" type="password" onChange={(e) => handleChange(e)} />
     <Link href="/time">

        <button type="submit">Submit</button>
     </Link>
      </form>
    )
}
