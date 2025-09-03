export default function TelaCadastro() {
    return (
      <div className="cadastro-container">
        <h1>Página de Cadastro</h1>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
  