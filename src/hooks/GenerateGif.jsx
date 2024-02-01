import axios from "axios";
import {toast} from "react-toastify"
import { useEffect, useState } from "react";

;
const api_key=process.env.REACT_APP_GIPHY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`

export function GenerateGif(tag){
    const [post, setPost] = useState(null);
    const [loader , setLoader]=useState(false)

    async function fetchData(tag){

        setLoader(true);
        const response=await axios.get( tag? `${url}&tag=${tag}` :`${url}`).catch( (error)=>{
            console.log(error.toJSON())
        })
        
        if(!response.data.data || response.data.data.length===0){
            toast.error(`No match for "${tag}"`, {
                position: "top-left"
              });
        }
        else{
            setPost(response.data.data.images.downsized.url);
        }
        setLoader(false);
        
          
    }
    useEffect(()=>{
        fetchData();
    },[]);


  return {post, fetchData, loader };
    

}


