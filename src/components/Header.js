import { Link } from "react-router-dom"

function Header(props){
const navStyle= {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "width",
    width: "100%",
    height: "3em",
    margin: "auto",
    margintop: "5px",
    paddingTop: "6px"
}

    return(
        <header>
        <h1>My Portfolio Page</h1>
        <nav style={navStyle}>
        <Link to="/">
            <div>Home</div>
        </Link>
        <Link to="/projects">
            <div>Projects</div>
        </Link>
        <Link to="/about">
            <div>About</div>
        </Link>
        </nav>
        </header>
    )
}
export default Header