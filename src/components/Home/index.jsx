/* eslint-disable react/prop-types */
import Search from "../Search"
import CardInfo from "../Card-info"
function Home(props) {
    return (
      <div>
        <h1>{props.title}</h1>
        <Search title="Search"/>
        <CardInfo title="CardInfo"/>
      </div>
    )
  }
  
  export default Home