import { useEffect, useState } from "react";
import Seo from "../components/seo";

export default function Detail({ params }: any) {
  const [title, id] = params || [];
  const [overview, setOverview] = useState('');
  useEffect(() => {
    (async () => {
      const json = await (await (fetch(`/api/movies/${id}`))).json();
      setOverview(json.overview);
    })();
  }, [])
  return <div className="grid mx-5">
    <Seo title={title} />
    <p className="text-5xl font-bold">{title}</p>
    <p className="text-lg font-medium mt-5">{overview}</p>
  </div>;
}

export async function getServerSideProps({ params: { params } }: any) {
  return {
    props: {
      params,
    },
  };
}