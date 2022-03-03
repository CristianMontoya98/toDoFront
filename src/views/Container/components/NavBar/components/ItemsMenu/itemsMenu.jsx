import styles from './styles.module.css';
function ItemsMenu(props) {
    const { show, handleClickItem } = props;
  
    return (
      <div className={`${styles.menu} ${show ? styles.show : styles.hide}`}>
        <ul className={styles.menu__elements}>
          <li onClick={()=>handleClickItem()}>
            {/* Links to the diferent routes define with react router in the container component */}
            Inicio
          </li>
  
          <li onClick={()=>handleClickItem()}>
            Completadas
          </li>
  
          <li onClick={()=>handleClickItem()}>
          Eliminadas
          </li>
        </ul>
      </div>
    );
}
export {ItemsMenu}