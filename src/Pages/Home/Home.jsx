import Postes from "../../Components/Postes/Postes"
import Stories from "../../Components/Stories/Stories"
import "./Home.css"

const Home = () => {
  return (
    <div className="home">

     <Stories/>
     <Postes/>
    </div>
  )
}

export default Home