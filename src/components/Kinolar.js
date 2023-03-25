import Kino from "./Kino";

export default function Kinolar(props){
    const {films=[]} = props
    return(
       <div className="films row">
        {films.length ? films.map(film=>(
                <Kino key={film.imdbID} {...film} />
            )) : <h2>Not Found</h2>}
        
       </div>
    )
}