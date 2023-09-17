import { getMovieDetails } from "@/utils/requests";
import Link from "next/link";
import "./page.css";

async function MovieDetailsPage({ params }) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const movieDetails = await getMovieDetails(params.id);

  return (
    <div id="container">
      <div className="hidden md:block" id="sidebar">
        <Link className="" href="/" id="sidelogo">
          <img src="/tvlogo.png" width="20%" />
          <h3>MovieBox</h3>
        </Link>
        <ul className="links" id="sidelinks">
          <li id="link">
            <img src="/Home.png" />
            <Link href="/">Home</Link>
          </li>
          <li id="link">
            <img src="/Movie.png" />
            <Link href="/">Movies</Link>
          </li>
          <li id="link">
            <img src="/TV.png" />
            <Link href="/">TV series</Link>
          </li>
          <li id="link">
            <img src="/Calendar.png" />
            <Link href="/">Upcoming</Link>
          </li>
        </ul>
        <img src="/play.png" id="playimg" width="70%" />
        <Link className="" href="/" id="logout">
          <img src="/Logout.png" width="20%" />
          <h3>Log out</h3>
        </Link>
      </div>

      <main className="content" id="content">
        <div>
          <img src="/trailer.png" />
        </div>
        <div id="moviedetails">
          <div >
            <h3 className="" data-testid= "movie-title">Title: {movieDetails.title}</h3>
            <p className="mt-4" data-testid= "movie-release-date">Release Date: {movieDetails.release_date}</p>
            <p className="mt-4" data-testid= "movie-runtime">Runtime: {movieDetails.runtime} mins</p>
            <p  className="mt-4" data-testid= "movie-overview" id="overview">Overview: {movieDetails.overview} </p>
           <img  className=" mt-4 lg:mt-16" src="/rated.png"/>
          </div>
          <div id="">
            <img src="/showtime.png"/>
            <img className="mt-4" src="/more.png"/>
            <img className="mt-8" src="/best.png"/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MovieDetailsPage;
