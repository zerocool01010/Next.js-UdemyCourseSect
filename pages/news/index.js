/* path: localhost:X/news  */ //toma el nombre de la carpeta como argumento de url y se dirige al index para renderizar
import Link from 'next/link'

function NewsPage(){
    return <>
    <h1>
        The news
    </h1>
    <ul>
        <li><Link href="/news/next-js-itsmylife-getitdone">Next.js, what a great thing to be alive</Link></li> {/* con Link evitamos mandar una request al server y volvemos a la reactividad que caracteriza React sin hacer todo server side rendering*/}
        <li>Tomate un te</li>
    </ul>
    </>
}

export default NewsPage