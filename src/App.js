// import React from 'react'
import React, { useState } from 'react'
import Axios from 'axios'
export default function App() {

  const [joke, setjoke] = useState("")
  const getjoke=()=>{
    Axios.get("https://reactnative.dev/movies.json").then((response)=>{
      console.log(response);
    
      setjoke("Title -->" + response.data.title  +"movies-->" + response.data.description+"description-->" + response.data.movies)
    })
  }
  return (
    <div>
      <button onClick={getjoke}>Get </button>
      {joke}
    </div>
  )
}
