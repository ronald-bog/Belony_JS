import { Contenido } from './components/Contenido';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './styles.scss';
import { Catalogo } from './components/Catalogo';

export function App() {
  //const [count, setCount] = useState(0);

  function mostrarNumero() {
    return "Estamos haciendo una prueba desde el padre con una funcion";
  }

  function compartirHijoPadre(num) {
    const numMulti = num * 10;
    console.log(`Numero recibido del hijo: ${numMulti}`);
  }

  return (
    <div>
      {/* <Header /> */}
      <h3>ESTO ES CONTENIDO DE APP.JSX</h3>
      <Contenido propDePrueba="Este contenido me envia el padre (APP)" propiedad2="este es el segundo ejemplo ......" propiedadF={mostrarNumero} compartir={compartirHijoPadre} />
    </div>
  );
}
