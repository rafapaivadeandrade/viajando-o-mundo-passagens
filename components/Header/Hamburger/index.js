import React, { useState } from "react";

const Hamburger = ({styleHamburger}) => {

const [open, setOpen] = useState(false);
return (

    <div
        className={open ? "menu-btn open" : "menu-btn"}
        onClick={() => setOpen(!open)}
      >
        <div className="menu-btn__burger"></div>
    </div>
  );
}

export default Hamburger;