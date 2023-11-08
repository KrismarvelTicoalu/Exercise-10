import Evolution from "../Evolution"
import TypeEffect from "../Type-Effect"
import Logo_CardInfo from "../Logo(Card-Info)"
function CardInfo(props) {
    return (
       <div>
      <h1>{props.title}</h1>
      <Evolution/>
      <TypeEffect/>
      <Logo_CardInfo/>
        </div>
    )
  }
  
  export default CardInfo