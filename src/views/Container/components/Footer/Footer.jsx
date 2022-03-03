import React from 'react';
import logo from '../../../../img/logo.svg';
import styles from './styles.module.css';

function Footer () {
    return(
        <section className ={styles.container}>
            <img src= {logo}/>
          <p>Somos una compañía dedicada al comercio floricultor con más de 20 años de experiencia en el sector.</p>
          <p>TODOS LOS DERECHOS RESERVADOS, 2022</p>
        </section>
    )

}

export default Footer;