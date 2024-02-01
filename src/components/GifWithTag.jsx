import Loader from "./Loader";
import {GenerateGif} from "../hooks/GenerateGif";
import { useState } from "react";
const GifWithTag=()=>{
    

    const [tag, setTag]=useState('car');
    const { post,fetchData, loader}=GenerateGif(tag);
    const HandleChange= (event)=>{

        setTag(event.target.value);
        
    }
  return (

    <div className="min-w-fit max-w-[700px] py-4 gap-4 w-2/3 rounded-md text-white flex flex-col items-center font-[450] border-2 border-sky-100 shadow-xl  bg-white">
      <h2 className="text-2xl underline text-center justify-self-start text-stone-400">Random {tag} Gif</h2>
      <div className="flex w-full h-full min-h-[300px] items-center justify-center">
      {
        loader? <Loader/> : <img src={post}/>
      }
      </div>
      <input className="bg-white outline-2 text-stone-600 border-2 border-blue-300 rounded-md w-2/3 text-2xl justify-self-end focus:outline-none text-center" type='text' value={tag} onChange={HandleChange}/>

      <button className="py-2 mx-auto w-[250px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-md text-2xl justify-self-end"onClick={()=>{fetchData(tag)}}>
        Generate
      </button>
    </div>
  );

}
export default GifWithTag;