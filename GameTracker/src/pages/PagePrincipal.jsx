import "./PagePrincipal.css";
import { MdOutlineSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const PagePrincipal = () => {
  const navigate = useNavigate();

  const handleGameClick = (gameId) => {
    navigate(`/game`);
  };

  return (
    <div className="container">
      <div className="BGLogo">
        <h1>GameTracker</h1>
      </div>

      <div className="containerGames">
        <form>
          <div className="searchBar">
            <input type="text" placeholder="Pesquisar jogo..." />
            <MdOutlineSearch className="searchIcon" />
          </div>

          <select>
            <option>Ano de Lançamento</option>
          </select>
          <select>
            <option>Gênero</option>
          </select>
        </form>

        <div className="gamesRow">
          <div
            className="games"
            onClick={() => handleGameClick("silksong")}
          >
          </div>

          <div
            className="games"
            onClick={() => handleGameClick("2")}
          >
          </div>

          <div
            className="games"
            onClick={() => handleGameClick("3")}
          >
          </div>
        </div>
      </div>
    </div>
  );
};
