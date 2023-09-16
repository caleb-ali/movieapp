import Link from "next/link"
import MovieDetailsPage from "../movies/[id]/page"

function Card({movie}) {
  const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
  
  return (
    <div data-testid= "movie-card">
        <Link className="text-decoration-none" href={"/movies/" + movie.id}>
            <div className="card" style={{width: '15rem'}}>
                <img data-testid= "movie-poster" src={IMAGE_BASE_URL + movie.poster_path} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 data-testid= "movie-title" className="card-title">{movie.title}</h5>
                    <p className="card-text overflow-y-auto" style={{height: "150px"}}>{movie.release_date}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Card