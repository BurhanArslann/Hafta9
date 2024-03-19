function Ulke ({Ulke}){

    return(
    <div className="prop border  d-flex flex-column  align-items-center" key={Ulke.ccn3} >
    <span style={{fontWeight:"bolder"}}>{Ulke.name.official}</span>
    <span>{Ulke.capital}</span>
    <div style={{height:"13vh"}} className="image col-lg-10 ">
       <img src={Ulke.flags.png} /> 
    </div>
</div>
)
}

export default Ulke