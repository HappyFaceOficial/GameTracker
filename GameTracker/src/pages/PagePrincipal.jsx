import "./PagePrincipal.css"
import { MdOutlineSearch } from "react-icons/md";

export const PagePrincipal = () => {
  return (
        <div className="container">
            <div className="BGLogo">
                <h1>GameTracker</h1>
            </div>
            <div className="containerGames">
                <form action="">
                    <input type="text" />
                    <MdOutlineSearch className="searchIcon"/>
                </form>
                <div className="gamesRow">
                    <div className="games" id="reddead">

                    </div> 
                    <div className="games">

                    </div>
                    <div className="games">

                    </div>
                   
                    

                </div>

            </div>


        </div>
        
  )
}
