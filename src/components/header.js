import React from "react"
import { Link } from "gatsby"

export default props => (
  <header>
    <h3>
      Workshop{" "}
      {props.workshopNumber}
    </h3>
    <nav>
      <Link to={"/"}>
        Home
      </Link>{" "}
      /
      <Link to={"/about"}>
        About
      </Link>
    </nav>
  </header>
)
