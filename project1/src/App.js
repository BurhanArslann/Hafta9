import { useEffect, useState } from "react";
import Kisi from "./bilesenler/Kisi";
import KisiListe from "./bilesenler/KisiListe";
import KisiEkleForm from "./bilesenler/KisiEkleForm";

function App() {
  

  return (
    <>
      <section className="container mt-5">
        <h1>Rehber</h1>
        <KisiEkleForm/>
        <KisiListe />
      </section>
    </>
  );
}

export default App;
