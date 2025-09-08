import { useState } from "react"
import { useNavigate } from "react-router-dom";
import logoPixel from '../assets/logo_pixel.png';
import "./PageRegister.css"

export const PageRegister = ()=> {
  const [botaos, setBotaos] = useState({ email: "", senha: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBotaos((prev) => ({ ...prev, [name]: value }));
  };

  const handleEntrarLogin = () => {
    navigate("/login"); 
    console.log("Entrar:", botaos);
  };

  const handleCadastrar = () => {
    console.log("Cadastrar:", botaos);
  };

  return (
    <div className="container">
      <header className="logo">
        <img src={logoPixel} alt="Logo Pixel" />
      </header>

      <main>
        <div className="backGround">

        </div>

        <form className="painelCentral">

          <input
            placeholder="E-mail"
            value={botaos.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={botaos.senha}
            onChange={handleChange}
          />

          <button type="button" onClick={handleCadastrar}>
          Cadastrar
          </button>

          <button type="button" onClick={handleEntrarLogin}>
            Entrar para login
          </button>

        </form>
      </main>

      <div className="barra_embaixo">
          <footer>
            <div className="texto_embaixo">
              <h3> Contatos </h3>
              <h3> Suporte </h3>
              <h3> Termos </h3>
              <h3> Privacidade </h3>
            </div>
            
            <div className="texto_abaixo">
            <h4>Texto abaixo apsosskjgaksga</h4>
            </div>
            
          </footer>
      </div>

    </div>

  );
}
