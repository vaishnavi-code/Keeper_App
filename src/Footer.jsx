import React from "react";
function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const copyright = "Copyright ⓒ " + year;
  return (
    <footer>
      <p>{copyright}</p>
    </footer>
  );
}

export default Footer;
