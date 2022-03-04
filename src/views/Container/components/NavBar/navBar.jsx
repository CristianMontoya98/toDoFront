import styles from "./styles.module.css";
import logo from "../../../../img/logo.svg";
import { ButtonMenu } from "./components/ButtonMenu/ButtonMenu";
import { useState } from "react";
import { ItemsMenu } from "./components/ItemsMenu/itemsMenu";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  /* Function to change the state of the toggle state variable */
  const handleClickMenu = () => {
    setToggle(!toggle);
  };
  const handleClickItem = () => {
    setToggle(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__top}>
        <img src={logo} alt="" />
        <ButtonMenu
          handleClickMenu={handleClickMenu}
          iconActive={toggle ? "fas fa-times" : "fas fa-bars"}
        />
      </div>
      <ItemsMenu show={toggle} handleClickItem={handleClickItem} />
    </nav>
  );
}
export { NavBar };
