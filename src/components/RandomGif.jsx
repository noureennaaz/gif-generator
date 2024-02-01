import {GenerateGif} from "../hooks/GenerateGif";
import Loader from "./Loader";
const RandomGif = () => {

  const { post,fetchData, loader}=GenerateGif()

  return (
    <div className="max-w-[700px] py-4 gap-4 min-w-fit w-2/3 rounded-md text-white flex flex-col items-center font-[450] border-2 border-sky-100 shadow-xl  bg-white">
      <h2 className="text-2xl underline text-center justify-self-start text-stone-500">Random Gif</h2>
      <div className="flex w-full h-full min-h-[300px] items-center justify-center">
      {
        loader? <Loader/> : <img src={post}/>
      }
      </div>
      <div>
      <button className="py-2 mx-auto w-[250px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-md text-2xl justify-self-end" onClick={()=>{fetchData()}}>Generate</button>
      </div>
    </div>
  );
};
export default RandomGif;
