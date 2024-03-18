import React, { useEffect } from "react";
import './App.css';
import NavBar from "./components/navbar";
import { fetchFixtures } from "./lib/fetch-data";


function App() {

const fetchData = async () => {

  const fixtures = await fetchFixtures();
  console.log(fixtures)
}


useEffect(() => {

fetchData();
})

  return <div className=""> 
      <NavBar />
    </div>

}

export default App;
