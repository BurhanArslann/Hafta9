import { useEffect, useState } from "react";
import Ulke from "./Ulke";

function Ulkeler() {
    const [ulke, setUlke] = useState([]);
    const [yukleniyor, setYukleniyor] = useState(true);
    const [arama, setArama] = useState("");

    useEffect(() => {
        async function veriCek() {
            try {
                const resp = await fetch('https://restcountries.com/v3.1/all');
                const veri = await resp.json();
                setUlke(veri);
                setTimeout(() => {
                    setYukleniyor(false);
                }, 2000);
            } catch (error) {
                console.error("error", error);
            }
        }
        veriCek();
    }, []);

    if (yukleniyor) {
        return <p>Yükleniyor...</p>;
    }

    function filtreleme(e) {
        setArama(e.target.value);
    }

    const filtrelenmisUlkeler = ulke.filter((item) =>
    item.name.common.toLowerCase().includes(arama.toLowerCase()) ||
    (Array.isArray(item.capital) && item.capital.some((capital) => capital.toLowerCase().includes(arama.toLowerCase())))
);


    return (
        <>
        <div className="col-lg-12 d-flex justify-content-start align-items-center ">
            <input
                id="arama"
                placeholder="Arama Yapın..."
                className="form-control mt-5"
                type="text"
                value={arama}
                onChange={filtreleme}
                style={{ width: "50vh", marginLeft: "25vh", marginBottom: "5vh" }}
            />
</div>
            <div className="all col-lg-10 col-md-10 col-sm-10 d-flex flex-wrap gap-3 justify-content-center border">
                {filtrelenmisUlkeler.map((item) => (
                    <Ulke key={item.ccn3} Ulke={item} />
                ))}
            </div>
        </>
    );
}

export default Ulkeler;
