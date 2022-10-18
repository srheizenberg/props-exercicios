import React from "react";
import { CardVideo } from "./components/CardVideo";
import "./styles.css";
export default function App() {
  const robertoCarlos = {
    imagem: "https://picsum.photos/400/400?a=1",
    titulo: "Título do Video",
    usuario: "Roberto Carlos"
  };

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
          <button type="submit">Enviar</button>
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo carlos={robertoCarlos} />
            <CardVideo carlos={robertoCarlos} />
            <CardVideo carlos={robertoCarlos} />
            <CardVideo carlos={robertoCarlos} />
            <CardVideo carlos={robertoCarlos} />
            <CardVideo carlos={robertoCarlos} />
            <CardVideo carlos={robertoCarlos} />
            <CardVideo carlos={robertoCarlos} />
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
