import * as React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Login_data } from "../context/context";
import { useContext } from "react";
import Image from 'next/image'
export default function Images() {
    const [file, setFile]: any = React.useState()
    const [imageUrl, setImageUrl]: any = React.useState()
    const [photoUrls, setPhotoUrls]: any = React.useState()

    const handleChange = (e: any) => {
        e.preventDefault()
        setFile(e.target.files[0])

        console.log('zaa')
    }


    const getImageUrl = async (e: any) => {
        e.preventDefault();
        const url = await axios.post("https://wdejbw4o5d.execute-api.us-east-1.amazonaws.com/dev/post", {
            key: file.name,
            type: file.type
        });

        const jpegUrl = url.data.message
        setImageUrl(jpegUrl)

        console.log(file.name)
        console.log(file.type)
    }
    const sendImage = async () => {
        console.log("url", imageUrl)

        // const formdata = new FormData()
        // formdata.append("file", imageUrl)
        const res = await fetch(imageUrl, { body: file, method: "PUT" })
        console.log(res)



    }
    const photoImage = async () => {
        const photos = await axios.get(`https://wdejbw4o5d.execute-api.us-east-1.amazonaws.com/dev/listBucket`)
        const photoUrls = photos.data.message
        setPhotoUrls(photoUrls)

        console.log(photoUrls)
    }
    return (
        <div>
            <label htmlFor="first">daily-face</label>
            <input type="file" onChange={handleChange}></input>

            <button onClick={getImageUrl}>getImageUrl</button>
            <button type="submit" onClick={sendImage}>Submit</button>
            <button onClick={photoImage}>Photo</button>
            
            {photoUrls?.map((el) => {
                return(

                <div>
                    <img
                        
                        src= {el}
                        alt="aws photos"
                     
                    />
                </div>
                )

            })}

        </div>

    )
}