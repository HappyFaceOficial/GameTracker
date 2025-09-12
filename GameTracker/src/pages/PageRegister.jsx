import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoPixel from "../assets/logo_pixel.png";
import "./PageRegister.css";

export const PageRegister = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleCadastrar = async () => {
    try {
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          nome,
          email,
          senha,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.mensagem || "Erro ao cadastrar!");
        return;
      }

      alert(data.mensagem || "Cadastro realizado com sucesso!");
      setNome("");
      setEmail("");
      setSenha("");
      navigate("/");
    } catch (err) {
      console.error("Erro no cadastro:", err);
      alert("Erro ao conectar com o servidor");
    }
  };

  const handleEntrarLogin = () => {
    navigate("/login");
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
            <h1>CADASTRO</h1>
          </div>

          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail Novo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="senha"
            placeholder="Senha Nova"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
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
};
