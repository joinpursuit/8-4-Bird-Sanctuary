import React from "react"
import "./App.css"
import birdData from "./data/birds";
import Birds from "./components/Birds";

const App = () => {
return (
  <div>
    <h1>Bird Sanctuary</h1>
    <Birds birds={birdData}/>
  </div>
)
}

export default App;
// asjdadoia
