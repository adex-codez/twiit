import React, { useState } from "react"
import Home from "./components/Home";
import Menu from "./components/Menu";
import Upload from "./components/Upload";


function App() {
  return (
    <div className="App font-body px-10">
      <Menu />
      <Upload />
    </div>
  )
}

export default App
