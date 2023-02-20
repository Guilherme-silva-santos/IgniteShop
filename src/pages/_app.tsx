import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/IgniteLogo.svg'
import { Container, Header } from '../styles/pages/app';
import Image from 'next/image';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt={""} />
      </Header>
      <Component {...pageProps} />
    </Container>

  )
}

// o arquivo app serve como um container para as outras paginas 
// então recomendado é que o globalcss estaja aqui, para fazer a importação do global styles
//apenas chama a função fora do app para que ele não seja carregado sempre que a pagina for recarregada