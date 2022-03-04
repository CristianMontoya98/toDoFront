import { Link } from 'react-router-dom';
import styles from './styles.module.css';
function ItemsMenu(props) {
    const { show, handleClickItem } = props;
  
    return (
      <div className={`${styles.menu} ${show ? styles.show : styles.hide}`}>
        <ul className={styles.menu__elements}>
          <li onClick={()=>handleClickItem()}>
            {/* Links to the diferent routes define with react router in the container component */}
            <Link to="/">Inicio</Link>
            
          </li>
  
          <li onClick={() => handleClickItem()}>
            <Link to="/completed">Completadas</Link>
            
          </li>
  
          <li onClick={() => handleClickItem()}>
          <Link to="/deleted">Eliminadas</Link>
          
          </li>
        </ul>
      </div>
    );
}
export {ItemsMenu}