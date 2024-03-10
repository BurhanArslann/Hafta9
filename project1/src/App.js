import { useEffect, useState } from "react"

function App() {
  
  const [sayac, sayacGuncelle] = useState(0)

  useEffect(() => {
    console.log("1. effect calısti");
  },[])
  useEffect(() => {
    console.log("2. effect calısti");
  })
  


  return (
    <>
      sayaç:{sayac}
    </>
  )

}

export default App;
