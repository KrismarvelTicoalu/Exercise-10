/* eslint-disable react/prop-types */
import Logo from "../logo"
import Generations  from "../generations"
function Header(props) {
    return (
    
    <div>
      <h1>{props.title}</h1>
      <Logo/>
      <Generations/>
    </div>
    
    )
  }

  export default Header