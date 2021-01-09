import React from "react"

import { useState } from "react"

import { Link } from "gatsby"

const Navigation = ({ locations }) => {
  const [toggle, setToggle] = useState(false)
  const onClick = () => setToggle(!toggle)

  const navItems = locations.map((location, index) => (
    <li key={index}>
      <Link to={`/location/${location.loc_id}`}>{location.name}</Link>
    </li>
  ))

  return (
    <div className={toggle ? "navBar show-nav" : "navBar"}>
      <button className="nav-toggle" onClick={onClick}>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>
      <nav role="navigation">
        <ul className="no-list">
          <li>
            <Link className="view_all" to="/">
              View All Locations
            </Link>
            <ul>{navItems}</ul>
          </li>
          <li>
            <Link className="embeding_instructions" to="/instructions">
              Embeding Instructions
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Navigation
