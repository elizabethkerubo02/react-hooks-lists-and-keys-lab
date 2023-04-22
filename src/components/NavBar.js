import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navbarLInks = links.map((link)=> (
    <a key={link} href={"#" + link}> {link}</a>
  ));

  return <nav>{navbarLInks}</nav>;
}

export default NavBar;
