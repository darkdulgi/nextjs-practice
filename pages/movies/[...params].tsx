import Seo from "../components/seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Detail({ params, overview }: InferGetServerSidePropsType<GetServerSideProps>) {
  const [title] = params;
  return <div className="grid mx-5">
    <Seo title={title} />
    <p className="text-5xl font-bold">{title}</p>
    <p className="text-lg font-medium mt-5">{overview}</p>
  </div>;
}

export async function getServerSideProps({ params: { params } }: any) {
  console.log(params);
  const { overview } = await (await (fetch(`https://nextjs-practice-darkdulgi.vercel.app/api/movies/${params[1]}`))).json();
  console.log(overview);
  return {
    props: {
      params,
      overview,
    },
  };
}