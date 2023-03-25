export default function Kino(props){

    const {Poster, Title, Year, imdbID, Type} = props

    return(
        <div key={imdbID} className="card col-md-3 col-sm-4 col-12">
            <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={Poster} alt="" />
            </div>
            <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{Title}</span>
            <div className="card-text">
                <b className="">{Year}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i>{Type}</i>
            </div>
            </div>

        </div>
    )
}