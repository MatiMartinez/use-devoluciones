import { DevolucionesProvider } from "context/Devoluciones";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "routes";

function App () {
  return (
    <div>
      <DevolucionesProvider>
        <BrowserRouter>
          <RouterApp />
        </BrowserRouter>
      </DevolucionesProvider>
    </div>
  );
}

export default App;
