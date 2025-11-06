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

  return (
    <div>
      {/* <Header /> */}
      <Contenido propDePrueba="Esto contenido que me envia el padre (APP)" propiedad2="este es el segundo ejemplo ......" propiedadF={mostrarNumero}/>
    </div>
  );
}
