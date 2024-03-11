import { useState } from "react";
import "./index.css"



function App
() {
    
    const [min, setMin] = useState()
    const [max, setMax] = useState()
    const [random, setRandom] = useState()

    const changeMax =(e) =>{
        setMax(Number(e.target.value))
    }
    
    const changeMin = (e) =>{
        setMin(Number(e.target.value))
    }

    const generateRandom = ()=>{
      
        setRandom(Math.floor(Math.random()*(max-min +1)))
    }

    return(
        <div className="App">
            <h1>Ranom Number</h1>
            <div className="container">
                <p>Random Number:{random}</p>
                <input className="form-control" aria-label="Dollar amount"
                 placeholder="Enter a min number"
                 onChange={changeMin}
                />
                <input type="number"
                 placeholder="Enter a max number" 
                 onChange={changeMax}
                />
                <button onClick={generateRandom}>Give a Random Number</button>
                
            </div>
        </div>
    )

}

export default App;
