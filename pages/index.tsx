import Seo from "./seo";
import Link from "next/link";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

interface IMovieProps {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: [number];
}

export default function Home({ results }: InferGetServerSidePropsType<GetServerSideProps>) {
  return (
    <div>
      <Seo title="Home" />
      <div className="grid grid-cols-2 place-items-center gap-20 mt-5">
        {results?.map((movie: IMovieProps) =>
          <Link key={movie.id} href={`/movies/${movie.title}/${movie.id}`}>
            <div>
              <img className="max-w-full rounded-3xl hover:scale-105 ease-in-out duration-200 shadow-lg shadow-gray-500" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              <p className="font-semibold text-2xl text-center mt-3">{movie.original_title}</p>
            </div>
          </Link>
        )}
      </div>

      {/* <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          text-align: center;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
        }
      `}</style> */}
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (await (fetch("http://localhost:3000/api/movies"))).json();
  return {
    props: {
      results,
    },
  };
}