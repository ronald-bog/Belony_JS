import { Contenido } from './components/Contenido';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './styles.scss';

export function App() {
  //const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Contenido />
      <Footer />
    </div>
  );
}
