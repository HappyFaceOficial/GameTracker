import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoPixel from "../assets/logo_pixel.png";
import "./PageLogin.css";

export const PageLogin = () => {
  const [botaos, setBotaos] = useState({ email: "", senha: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBotaos((prev) => ({ ...prev, [name]: value }));
  };

  const handleEntrar = async () => {
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email: botaos.email,
          senha: botaos.senha,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.mensagem || "Usuário ou senha inválidos!");
        return;
      }

      alert(data.mensagem);
      navigate("/menu");
    } catch (err) {
      console.error("Erro no login:", err);
      alert("Erro ao conectar com o servidor");
    }
  };

  const handleCadastrar = () => {
    navigate("/register");
  };

  return (
    <div className="container">
      <header className="logo">
        <img src={logoPixel} alt="Logo Pixel" />
      </header>

      <main>
        <div className="backGround"></div>

        <form className="painelCentral" onSubmit={(e) => e.preventDefault()}>
          <div className="texto_caixa">
            <h1>LOGAR</h1>
          </div>

          <input
            type="email"
            name="email"
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

          <button type="button" onClick={handleEntrar}>
            Entrar
          </button>

          <button type="button" onClick={handleCadastrar}>
            Cadastrar
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
};
