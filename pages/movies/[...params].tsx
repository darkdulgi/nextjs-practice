import { useEffect, useState } from "react";
import Seo from "../seo";

export default function Detail({ params }: any) {
  const [title, id] = params || [];
  const [overview, setOverview] = useState('');
  useEffect(() => {
    (async () => {
      const json = await (await (fetch(`/api/movies/${id}`))).json();
      setOverview(json.overview);
    })();
  }, [])
  return <div>
    <Seo title={title} />
    <h1>{title}</h1>
    <h4>{overview}</h4>
  </div>;
}

export async function getServerSideProps({ params: { params } }: any) {
  return {
    props: {
      params,
    },
  };
}