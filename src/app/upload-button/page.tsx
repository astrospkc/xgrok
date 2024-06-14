
"use client"
import "@uploadthing/react/styles.css"

import { UploadButton } from "@uploadthing/react";
 
import { OurFileRouter, ourFileRouter } from "../api/uploadthing/core";
import React from "react";
import Link from "next/link";
import { useState } from "react";
 
const UploadButtonPage = () => {
    const [images, setImages] = useState<{
        url:string;
        fileKey:string;
    }[]>([])

    const title = images.length ? (
        <>
        <p>Upload complete !</p>
        <p className="mt-3">{images.length} files</p>
        </>
    ):null

    const imglist = ()=>{
        <>
        {title}
        <ul>
            {images.map(image=>(
                <li key={image.url} className="mt-2">
                    <Link href={image.url} target="_blank">{image.url}</Link>

                </li>
            ))}
        </ul>
        </>
    }

    return (
        <>
        <main className="flex min-h-screen flex-col items-center justify-center">
        <UploadButton<OurFileRouter>
    endpoint="imageUploader"
    onClientUploadComplete={(res) => {
        if(res){
            setImages(res)
            const json = JSON.stringify(res)
// Do something with the response
            
console.log(json);
console.log(json.url);
        }
      
    //   alert("Upload Completed");
    }} 
    onUploadError={(error: Error) => {
      // Do something with the error.
      alert(`ERROR! ${error.message}`);
    }}
    onBeforeUploadBegin={(files) => {
      // Preprocess files before uploading (e.g. rename them)
      return files.map(
        (f) => new File([f], "renamed-" + f.name, { type: f.type }),
      );
    }}
    onUploadBegin={(name) => {
      // Do something once upload begins
      console.log("Uploading: ", name);
    }}
  />
  <div className="flex bg-white text-black justify-center">
    <p>
        the file will be uploaded in this area.
    </p>
  </div>
  <div className="bg-white">
  {imglist}
  </div>
  
        </main>
        
        
        </>

    );
}
    

  
export default UploadButtonPage