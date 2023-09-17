import { getTrendingMovies } from "@/utils/requests";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default async function HomePage() {
  const movies = await getTrendingMovies();

  return (
    <div>
      <Header></Header>
      <div className="">
        <div className="flex justify-between ml-28 mr-28 mt-12 mb-12">
          <h1 className="text-3xl font-semibold">Featured Movie</h1>
          <p className="text-red-700">See more &gt; </p>
        </div>
        <div  className="ml-20 lg:ml-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => {
            return <Card movie={movie}></Card>;
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
