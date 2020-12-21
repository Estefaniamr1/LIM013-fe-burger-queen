import { useHistory } from "react-router-dom";

function Ingresar() {
  let history = useHistory();

  function handleClick() {
    history.push("/Pedidos");
  }

  return (
    <button type="submit" onClick={handleClick}>
      Ingresar
    </button>
  );
}

export function Home() {
    return (
    <div>
        <header>
         <h1>BURGER QUEEN</h1>
        </header>
        <main>
          <div className="user">
           <h2>Mesero/a</h2>
           <input type="text" placeholder="Correo electrónico" id="emailUserM"/>
           <input type="text" placeholder="Contraseña" id="passwordUserM"/>
           <Ingresar/>
          </div>
          <div className="user">
           <h2>Jefe de cocina</h2>
           <input type="text" placeholder="Correo electrónico" id="emailUserJ"/>
           <input type="text" placeholder="Contraseña" id="passwordUserJ"/>
           <button type="submit">Ingresar</button>
          </div>
        </main>
      </div>
      );
  }