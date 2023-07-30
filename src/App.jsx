import "./App.css";
import Appfooter from "./Componentes/AppFooter/AppFooter";
import Appheader from "./Componentes/AppHeader/AppHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";


function App() {
  return (
    <>
<Appheader/>
      <main>
        <Home />
      </main>
      <Appfooter />
    </>
  );
}

export default App;
