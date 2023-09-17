import Link from "next/link";
import MovieDetailsPage from "../movies/[id]/page";
import "./Card.css";

function Card({ movie }) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";

  return (
    <div>
      <Link className="text-decoration-none" href={"/movies/" + movie.id}>
        <div className="card" data-testid="movie-card">
          <img
            data-testid="movie-poster"
            src={IMAGE_BASE_URL + movie.poster_path}
            alt=""
            className=""
          />

          <div className="">
            <h5
              data-testid="movie-title"
              className="text-sm font-medium mt-2 mb-2"
            >
              {movie.title}
            </h5>
            <p className="text-xs mt-2 text-gray-500" data-testid= "movie-release-date">{movie.release_date}</p>

            <div id="ratingcard">
              <div id="imbd">
                <img src="/imdb.png" />
                <p className="text-xs">86.0/100</p>
              </div>
              <div id="imbdcard">
                <img src="/tomatoe.png" />
                <p className="text-xs">97%</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;

