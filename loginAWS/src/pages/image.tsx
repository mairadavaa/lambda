import * as React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Login_data } from "../context/context";
import { useContext } from "react";
export default function Images() {
    const [image, setImage]: any = React.useState()
    const [imageUrl, setImageUrl]: any = React.useState()

    const handleChange =  (e: any) => {
        e.preventDefault()
        setImage(e.target.files[0])
        
        console.log(image,'zaa')
    }
    
    
    const getUserAccount = async (e: any) => {
        e.preventDefault();
        const url = await axios.post("https://wdejbw4o5d.execute-api.us-east-1.amazonaws.com/dev/post", {
            key: image.name,
            type: image.type
        });

        const jpegUrl = url.data.message
        setImageUrl(jpegUrl)
       
        console.log(image.name)
        console.log(image.type)
    }
    const getImageurl = async () =>{
        console.log("url", imageUrl)
        const response = await axios.put(`${imageUrl}`)

    }
    return (
        <div>
            <label htmlFor="first">daily-face</label>
            <input type="file" onChange={handleChange}></input>

            <button type="submit" onClick={getUserAccount}>Submit</button>
            <button onClick={getImageurl}>Get Image url</button>

        </div>
           
    )
}