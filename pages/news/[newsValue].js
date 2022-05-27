/* path: localhost:X/news/something-important  */
import { useRouter } from "next/router";

function DetailPage() {
    const router = useRouter()

    const newsV = router.query.newsValue //guardamos el valor de lo que llega por parametro de URL
    console.log(newsV)

  return (
    <>
      <h1>The perfection its in the details: {newsV}</h1>
    </>
  );
}

export default DetailPage;
