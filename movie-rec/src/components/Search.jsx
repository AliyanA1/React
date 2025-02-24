

function  Search({Srch, SetSrch}){
  return(
   <div className="search">
     <div>
        <img src="./search.svg" alt="" />

        <input 
        type="text"
        placeholder="Search throught thousand of movies"
        value={Srch}
        onChange={(e)=> SetSrch(e.target.value)}        
        />
     </div>
   </div>

  )
}

export default Search