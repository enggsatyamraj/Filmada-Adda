
import { useEffect, useState } from 'react';
import './App.css'



const API_URL = "https://www.omdbapi.com?apikey=589ec800"


function App() {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const searchMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  }
  const doingSet = (e)=> {
    setInputValue(e.target.value);
  }

  const btnClick = ()=>{
    searchMovies(inputValue)
  }

  const x = movies.map((move)=>(
    <div key={move.imdbId} className='flex flex-col items-center justify-center rounded-lg overflow-hidden'>
      <img src={move.Poster} className='w-[100%]' alt="" />
      <div className='bg-slate-800 text-white  w-[100%] px-3 py-4'>
      <h1>{move.Type}</h1>
      <h1 className='font-bold text-[1.1rem]'>{move.Title}</h1>
      </div>
    </div>
  ))

  console.log(movies);

 
  return (
    <div className='overflow-x-hidden pb-[40px]'>
    <h1 className='text-3xl md:text-4xl flex items-center justify-center mt-2 mb-4 w-[100%] px-2 font-bold '>Filmada Adda</h1>
      <div className='w-[100%] flex gap-2 items-center justify-center'>
        <input placeholder='Movie Name' onChange={doingSet} className='border-2 border-black px-3 py-1 rounded-lg' value={inputValue}/>
        <button onClick={btnClick} className='bg-black text-white px-4 md:px-6 py-2 rounded-lg'>Search</button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-5 px-3 mt-[20px]' >
        {x}
      </div>
      

    </div>
  )
}

export default App

// {
//   "Title": "The Tender Bar",
//   "Year": "2021",
//   "imdbID": "tt3108894",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BZjU2ODY2M2YtZWM3ZS00NzJiLTg2YzEtY2M1ODNhMGJmZDdjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
// }
