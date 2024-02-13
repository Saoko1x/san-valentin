import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Dino from './assets/dino2.webp'
import Dino2 from './assets/dino.webp'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>San Valentin</title>
        <link rel="stylesheet" href="style.css" />
      </Head>

      <main>
        <div id="message">
          <h1>¡Yo también quiero!<br /> Te amo 💓</h1>
          <Image 
            src={Dino2}
            width={250}
            height={250}
            alt="Dino Love"
          />
        </div>
        <Image 
          src={Dino}
          width={250}
          height={250}
          alt="Dino Love"
        />
        <h1>Hola hermosa</h1>
        <h1>¿Quieres ser mi San Valentín?</h1>
        <p style={{fontSize: 10}}>Prueba intentando que no jiji</p>
        <div className="options">
          <button id="yes">Si</button>
          <button id="no">No</button>
        </div>
      </main>

      <Script src="script.js" />
    </div>
  );
}
