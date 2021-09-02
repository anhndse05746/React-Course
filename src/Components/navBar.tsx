import React from "react";

export interface NavBarProps {
  totalCounters: number;
}

const NavBar: React.FC<NavBarProps> = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#"> */}
        {/* Navbar */}
        <p className="badge bg-primary m-2">{totalCounters}</p>
        {/* </a> */}
      </div>
    </nav>
  );
};

export default NavBar;
