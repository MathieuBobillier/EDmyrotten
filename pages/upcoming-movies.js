import tmdb from "../configs/tmdb";
import Moviescontainer from "../components/Cardcontainer";
export default function upcomingMovies({ movies }) {
  return (
    <div className="container ">
      <section className="mt-8">
        <Moviescontainer data={movies} type="movies" />
      </section>
    </div>
  );
}

export const getStaticProps = async () => {
  const movies = await tmdb.discover("movie", [
    {
      param: "primary_release_date.gte",
      value: "2021-07-01",
    },
    {
      param: "primary_release_date.lte",
      value: "2022-12-31",
    },
  ]);
  return {
    props: {
      movies: movies.results,
    },
  };
};
