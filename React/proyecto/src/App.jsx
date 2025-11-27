import { Contenido } from './components/Contenido';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './styles.scss';
import { Catalogo } from './components/Catalogo';
import { UseRef } from './components/UseRef';
import { State } from './components/State';
import { RefVsState } from './components/RefVsState';
import { UseStateScs } from './components/UseStateScss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';
import RenCond from './components/RenCond';
import { Fetch } from './components/Fetch';
// npm install react-router-dom

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
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<h1>Landing page....</h1>} />
          <Route path='catalogo' element={<Catalogo />} />
          <Route path='contenido' element={<Contenido />} />
          <Route path='f' element={<Footer />} />
          <Route path='h' element={<Header />} />
          <Route path='rvs' element={<RefVsState />} />
          <Route path='state' element={<State />} />
          <Route path='ur' element={<UseRef />} />
          <Route path='scss' element={<UseStateScs />} />
          <Route path='cond' element={<RenCond />} />
          <Route path='fetch' element={<Fetch />} />
          <Route path='*' element={<h1>❌ Esta seccion no fue encontrada ❌</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


{/* <Header /> */ }
{/*       <h3>ESTO ES CONTENIDO DE APP.JSX</h3>
      <Contenido propDePrueba="Este contenido me envia el padre (APP)" propiedad2="este es el segundo ejemplo ......" propiedadF={mostrarNumero} compartir={compartirHijoPadre} /> */}


{/* <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>*** PAGINA DE INICIO ***</h1>} />
      <Route path='ejemplo' element={<h1>pagina de ejemplo</h1>} />
      <Route path='x' element={<h1>XXXXXXXXXXXXXXXXXXXX</h1>} />
      <Route path='about' element={<h1>Esta es la seccion acerca de nosotros</h1>} />
      <Route path='*' element={<h1>❌ Esta seccion no fue encontrada ❌</h1>} />
    </Routes>
  </BrowserRouter>
</>; */}
