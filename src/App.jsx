import GifWithTag from "./components/GifWithTag";
import RandomGif from "./components/RandomGif"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 p-5 flex flex-col items-center  gap-5">
       <div className="bg-white rounded mx-2 text-4xl text-center w-full">Random Gif Generator</div>
      <RandomGif/>
      <GifWithTag/>
      <ToastContainer autoClose={4000}/>
    </div>
  );
}