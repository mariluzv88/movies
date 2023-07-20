import './App.css';
import { useState,useEffect } from 'react';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
  const apiKey="98e3fb1f"
// api data
  const [movie,setMovie] = useState("")
  // --------State

  const getMovie = async(searchTerm) =>{
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
    // go to site search for title
    const data = await response.json()
    //   turn info into JSON format
    setMovie(data)
    // take retrived data and set it as current movie
  }
  // function that uses async-await to fetch movie data

  useEffect(()=>{
    getMovie("Clueless")
  },[])
  return (
    <div className="App">
      <Form movieSearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
