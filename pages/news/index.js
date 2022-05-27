/* path: localhost:X/news  */ //toma el nombre de la carpeta como argumento de url y se dirige al index para renderizar

function NewsPage(){
    return <>
    <h1>
        The news
    </h1>
    <ul>
        <li><a href="/news/next-js-itsmylife-getitdone">Next.js, what a great thing to be alive</a></li>
        <li>Tomate un te</li>
    </ul>
    </>
}

export default NewsPage