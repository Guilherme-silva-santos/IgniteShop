import { Html, Head, Main, NextScript } from "next/document"
import { getCssText } from "../styles"

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link 
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" 
                rel="stylesheet" 
                />
                <style id="stitchess" dangerouslySetInnerHTML={{ __html: getCssText() }} />
                {/* tem como função pelo lado do servidor next ela vai carregar a pagina
                dentro do servidor e ver qual é o códico css necessario para carregar aquela página 
                e retornar dessa função  */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
     )
}

// main é onde se localiza o cunteudo da página em si 
//netxtscrip é em qual local a gente quer carregar os scripts